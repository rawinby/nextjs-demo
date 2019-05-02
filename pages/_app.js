

import React from 'react'
import { Provider } from 'react-redux'
// import withRedux from 'next-redux-wrapper'
// import { initStore } from '../store'

import App, {Container} from "next/app";
import Router from 'next/router'
import NProgress from 'nprogress'

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import reducer from '../reducers';
import rootSaga from '../sagas';



Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware,logger))
  }
  return applyMiddleware(...middleware)
}

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}


class MyApp extends App {

  // static async getInitialProps ({ Component, ctx }) {
  
  // }
  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }

}

export default withRedux(configureStore)(withReduxSaga(MyApp))
