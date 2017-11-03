import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'

//import component
import Blog from './components/Blog'

// Passing state to props
function mapStateToProps(state) {
  return {
    blogs: state.blogs,
    comments: state.comments
  }
}

// Passing actionCreators to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// Smart Component
const App = connect(mapStateToProps, mapDispatchToProps)(Blog)

export default App
