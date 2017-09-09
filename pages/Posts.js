import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'

export default class Posts extends Component {
  
  static getInitialProps({store, pathname, query}) {
    return {}
  }

  render() {
  	return(
      <div>Posts for user {this.props.url.query.id}</div>
  	)
  }
}
