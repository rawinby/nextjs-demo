import React, { Component } from 'react'
import Layout from '../components/Layout'

export default class Error extends Component {

    static getInitialProps ({ res, xhr }) {
        const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
        return { statusCode }
    }
    render () {
        if(this.props.statusCode == 404){
            return (
                <Layout>
                <p>
                    404 Not Found
                </p>
                </Layout>
            )
        }else{
            return (
                <Layout>
                <p>
                    { this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client' }
                </p>
                </Layout>
            )
        }
  }

}