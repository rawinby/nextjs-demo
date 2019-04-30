import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const exampleInitialState = {
  count: 0
}

export const actionTypes = {
  GET: 'GET',
  ADD: 'ADD',
  DOWN: 'DOWN',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET:
      return Object.assign({}, state, {
        count: state.count
      })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DOWN:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state
  }
}

// ACTIONS
export const getCount = () => dispatch => {
  return dispatch({ type: actionTypes.GET })
}
export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}
export const downCount = () => dispatch => {
  return dispatch({ type: actionTypes.DOWN })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}