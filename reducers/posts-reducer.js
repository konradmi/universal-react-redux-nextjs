import { handleActions } from 'redux-actions'

import { FETCH_POSTS } from '../types'

export default handleActions({
  [FETCH_POSTS]: (state, action) => action.payload,
}, {})
