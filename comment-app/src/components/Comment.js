import React from 'react'

const Comment = (props) => (
  <li className="comment">
    <span className="comment-username">{props.username}:</span>
    {props.content}
  </li>
)

export default Comment