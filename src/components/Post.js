import React, { Component } from 'react'
import './Post.css'

//import comment
import Comments from './Comments'

class Post extends Component {
  render() {
    const index = this.props.i
    const id = this.props.blogs[index].id
    const comments  = this.props.comments[id] || []
    return(
      <div className="post-box">
        <div className="post-area">
          <h2>{this.props.blogs[index].title}</h2>
          <p>{this.props.blogs[index].description}</p>
        </div>
        <div className="comment-area">
          <Comments { ...this.props} comments={comments} postId={id} />
        </div>
      </div>
    )
  }
}

export default Post
