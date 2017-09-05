import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { getAllPosts } from '../actions/posts-actions'

class Page extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(getAllPosts())
  }

  render() {
  	return(
  	  <div>{this.props.posts.allPosts}</div>
  	)
  }
}

const mapStateToProps = s => ({posts: s.posts})

export default withRedux( makeStore, mapStateToProps )(Page)
