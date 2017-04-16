import React, { Component } from 'react'

class Editor extends Component {
  state = {
    content: '<h1>DangerouslySetHTML</h1>'
  }
  render () {
    return (
      <div>
        {this.state.content}
        <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
      </div>
    )
  }
}

export default Editor