import React, { Component } from 'react'
import './Blog.css'

// Import Post Component
import Post from './Post'

class Blog extends Component {
  render() {
    return(
      <div className="container">
        <h1>Recent Post</h1>
        {/* Rendering the list of post */}
        {this.props.blogs.map((blog, i) => <Post {...this.props} key={i} i={i} />)}
      </div>
    )
  }
}

export default Blog
