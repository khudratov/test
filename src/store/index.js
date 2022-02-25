import { combineReducers, createStore } from 'redux'
import { userReducer } from './reducers/userReducer'
import { postsReducer } from './reducers/postsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
})

export const store = createStore(rootReducer)
