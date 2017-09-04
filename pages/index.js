import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { getFirstPost } from '../actions/posts-actions'

class Page extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(getFirstPost())
    return { custom: 'custom prop' }
  }

  render() {
  	return(
  	  <div>CUSTOM PROP {this.props.custom} {this.props.posts.firstPost}</div>
  	)
  }
}

const mapStateToProps = s => ({posts: s.posts})

export default withRedux( makeStore, mapStateToProps )(Page)
