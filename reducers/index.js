import { combineReducers } from 'redux'
import users from './users-reducer'
import posts from './posts-reducer'

const rootReducer = combineReducers({
  users,
  posts
})

export default rootReducer
