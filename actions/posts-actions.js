import { createAction } from 'redux-actions'
import axios from 'axios'

import { GET_FIRST_POST } from '../types'

const getFirstPostAction = createAction(GET_FIRST_POST)

export const getFirstPost = payload => async d => {
  const firstPost = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  console.log('firstPost', JSON.stringify(firstPost.data))
  d(getFirstPostAction(JSON.stringify(firstPost.data)))
}
