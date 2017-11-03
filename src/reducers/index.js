import { combineReducers } from 'redux'

// individual reducers
import blogs from './blogs'
import comments from './comments'

const rootReducer = combineReducers({blogs, comments})

export default rootReducer
