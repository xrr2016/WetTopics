import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import LikeButton from './components/LikeButton'
import List from './components/List'
import Clock from './components/Clock'
import Editor from './components/Editor'
// import App from './App'
import './index.css'

class Title extends Component {
  handleClick = (event) => {
    console.log(this)
    alert(event.target.innerHTML)
  }
  render = () => (
    <h1 onClick={this.handleClick}>React Book!</h1>
  )
}

class Header extends React.Component {
  constructor() {
    super()
    console.log('constrictor')
  }
  componentWillMount() {
    console.log('component will mount')
  }
  render() {
    console.log('render')
    return (
        <div>
           <Title /> 
           <p>This is Header</p>
           <Clock />
        </div>
    )
  }
  componentDidMount() {
    console.log('component did mount')
  }
  componentWillUnmount() {
    console.log('conponent will unmount')
  }
}

class Main extends Component {
  render = () => (
    <div>
      Main Content
      {this.props.children}
    </div>
  )
}

class Footer extends Component {
  static propTypes = {
    author: PropTypes.number.isRequied
  }
  render = () => (
    <p>This is footer  <code>{this.props.author}</code> </p>
  )
}

class Index extends Component {
  state = {
    showHeader: true
  }
  handleClick = () => {
    this.setState({
      showHeader: !this.state.showHeader
    })
  }
  render = () => (
    <div>
      {this.state.showHeader ? <Header /> : null}
      <Main>
        <Editor />
      </Main>
      <LikeButton handleComponentClick={() => console.log('Click on LikeButton')} />
      <List />
      <p><button onClick={this.handleClick}>
        {this.state.showHeader ? 'NO' : 'YES'}
      </button></p>
      <Footer author={'xrr2106'} />
    </div>
  )
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
