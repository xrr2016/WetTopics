import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'

class Header extends React.Component {
  render () {
    return (
        <div>
          <p>Cooooool!!!</p>
        </div>
    )
  }
}


ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
