import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { fetchPosts } from '../actions/posts-actions'
import PostTable from '../components/PostTable'

class Posts extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(fetchPosts( {id: query.id} ))
  }

  render() {
  	return(
      <PostTable posts={this.props.posts} title={`Posts for user ${this.props.url.query.id}`} browser={this.props.browser}/>
  	)
  }
}

const mapStateToProps = s => ({posts: s.posts, browser: s.browser})

export default withRedux( makeStore, mapStateToProps )(Posts)
