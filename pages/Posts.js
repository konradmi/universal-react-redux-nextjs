import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { fetchPosts } from '../actions/posts-actions'

class Posts extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(fetchPosts( {id: query.id} ))
  }

  render() {
  	return(
      <div>
        <div>Posts for user {this.props.url.query.id}</div>
        <div>{JSON.stringify(this.props.posts)}</div>
      </div>
  	)
  }
}

const mapStateToProps = s => ({posts: s.posts})

export default withRedux( makeStore, mapStateToProps )(Posts)
