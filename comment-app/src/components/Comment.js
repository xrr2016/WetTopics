import React from 'react'

const Comment = (props) => (
  <li className="comment">
    <span className="comment-user">{props.username}:</span>
    {props.content}
  </li>
)

export default Comment