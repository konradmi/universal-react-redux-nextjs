import { handleActions } from 'redux-actions'

import { GET_ALL_POSTS } from '../types'

export default handleActions({
  [GET_ALL_POSTS]: (state, action) => ({ ...state, allPosts: action.payload }),
}, {})
