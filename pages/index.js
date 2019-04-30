import Layout from '../components/Layout'
import Link from 'next/link'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import AddCount from '../components/AddCount'
import { getCount, addCount, downCount } from '../store'

class Index extends Component {

  static getInitialProps ({ store, isServer }) {
    // store.dispatch(addCount())
    return { isServer }
  }

  componentDidMount () { //ถูกเรียกหลัง render 
    // this.timer = this.props.startClock()
    this.props.getCount()
  }

  componentWillUnmount () { //ถูกเรียกก่อน render 
    // clearInterval(this.timer)
  }

  add = () => {
    this.props.addCount()
  }
  down = () => {
    this.props.downCount()
  }

  render () {
    const { count } = this.props
    return (
      <Layout>
        <div>         
         
          <h1>
            Count: <span>{count}</span>
          </h1>
          <button onClick={this.add}>Add To Count</button>
          <button onClick={this.down}>Down To Count</button>

        </div>
      </Layout>
    )
  }
}


const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = dispatch => {
  return {
    getCount: bindActionCreators(getCount, dispatch),
    addCount: bindActionCreators(addCount, dispatch),
    downCount: bindActionCreators(downCount, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
