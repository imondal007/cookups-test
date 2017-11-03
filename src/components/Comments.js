import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Rendering comment list
  listComment(comment, i) {
    return(
        <li key={i}>{comment.body}</li>
    )
  }

  // Comment Form submit handler
  handleSubmit(e) {
    const comments   = this.props.comments
    const postId     = this.props.postId
    const comment    = this.comment.value

    // If any comment available, find the id of last comment and add one with it, if no comment set the value to zero
    const commentId  = (comments.length > 0) ? comments[comments.length -1].id + 1 : 0

    e.preventDefault()
    this.props.addComment(postId, commentId, comment)
    this.commentForm.reset()
  }

  render() {
    return(
      <div className="comment-box">
        <h4>Comments:</h4>

        {/* Comment List */}
        <ul className="comment-list">
          {this.props.comments.map(this.listComment)}
        </ul>

        {/* Form */}
        <form ref={form => this.commentForm = form} onSubmit={this.handleSubmit} >
          <input ref={input => this.comment = input} placeholder="Your comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comments
