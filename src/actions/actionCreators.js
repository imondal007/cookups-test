// Add New Comment
export function addComment(postId, commentId, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    commentId,
    comment
  }
}
