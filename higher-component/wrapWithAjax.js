import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    state = {data: null}
    componentWillMount() {
      ajax.get('/data/' + name, (data) => {
        this.setSate({data})
      })
    }
    render() {
      return <WrappedComponent data={this.state.data}/>
    }
  }
  return NewComponent
}