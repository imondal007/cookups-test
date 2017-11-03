import { createStore } from 'redux'

// import Root Reducer
import rootReducer from './reducers/index'

// import data and create an object to use on initial state
import {blogs, comments} from './blogData'

const initialState = {
  blogs,
  comments,
}

const store   = createStore(rootReducer, initialState)
export default store
