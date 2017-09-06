import { createAction } from 'redux-actions'
import axios from 'axios'

import { GET_ALL_POSTS } from '../types'

const getAllPostsAction = createAction(GET_ALL_POSTS)

export const getAllPosts = payload => async d => {
  const allPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  d(getAllPostsAction(allPosts.data))
}
