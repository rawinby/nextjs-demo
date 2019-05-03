import Layout from '../components/Layout'
import Link from 'next/link'
import React, { Component } from 'react'

// import AddCount from '../components/AddCount'
// import { getCount, addCount, downCount } from '../store'

import Button from '../components/Button';
import Loading from '../components/Loading'
import NewsItem from '../components/NewsItem'

class Index extends Component {

  static getInitialProps ({ store, isServer }) {
    // store.dispatch(addCount())
    return { isServer }
  }

  componentDidMount () { //ถูกเรียกหลัง render 
    // this.timer = this.props.startClock()
    // this.props.getCount()
  }

  componentWillUnmount () { //ถูกเรียกก่อน render 
    // clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <div>         
         
          <Button />
          <Loading />
          <NewsItem />

        </div>
      </Layout>
    )
  }
}

export default Index