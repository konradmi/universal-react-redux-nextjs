import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { getAllPosts } from '../actions/posts-actions'
import PostRow from '../components/PostRow'

class Page extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(getAllPosts())
  }

  render() {
  	return(
  	  <div>
  	    {
  	      this.props.posts.allPosts.map((post, i) => <PostRow title={post.title} key={i}/>)
  	    }
  	  </div>
  	)
  }
}

const mapStateToProps = s => ({posts: s.posts})

export default withRedux( makeStore, mapStateToProps )(Page)
