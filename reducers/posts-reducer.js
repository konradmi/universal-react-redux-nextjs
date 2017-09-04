import { handleActions } from 'redux-actions'

import { GET_FIRST_POST } from '../types'

export default handleActions({
  [GET_FIRST_POST]: (state, action) => ({ ...state, firstPost: action.payload }),
}, {})
