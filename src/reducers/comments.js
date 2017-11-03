function comments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return {
        // Copy Existing state
        ...state,
        // Add new data, If any comment available copy it if no data create an empty Object to prevent error
        [action.postId] : [ ...state[action.postId] || [], {id: action.commentId, body: action.comment}]
      }
    default:
      return state
  }
}

export default comments
