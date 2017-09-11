import { createAction } from 'redux-actions'
import axios from 'axios'

import { FETCH_POSTS } from '../types'

const fetchPostsAction = createAction(FETCH_POSTS)

export const fetchPosts = payload => async d => {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${payload.id}`)
  d(fetchPostsAction(posts.data))
}
