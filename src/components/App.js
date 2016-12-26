import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';

class App extends Component {
  render(){
    return(
      <div>
        <PostBody />
        <CommentBox />
      </div>
    )
  }
}

export default App;
