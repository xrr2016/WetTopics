import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'

class Title extends Component {
  render = () => (
    <h1>React Book!</h1>
  )
}

class Header extends React.Component {
  render () {
    return (
        <div>
           <Title /> 
           <p>This is Header</p>
        </div>
    )
  }
}

class Main extends Component {
  render = () => (
    <p>Main Content</p>
  )
}

class Footer extends Component {
  render = () => (
    <p>This is footer</p>
  )
}

class Index extends Component {
  render = () => (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
