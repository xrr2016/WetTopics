import React, { Component } from 'react'

const users =  [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

const User = (props) => (
  <li>{props.index} {props.username} {props.age} {props.gender}</li>
)

class List extends Component {
  render () {
    return (
      <div>
        {users.map((user, index) => (
          <User key={index} index={index} {...user}/>
        ))}
      </div>
    )
  }
}

export default List