import React, { Component } from 'react'
import FliterLink from '../containers/FilterLink.js'

const Footer = () => (
  <p>
    Show: {" "}
    <FliterLink filter="SHOW_ALL">All</FliterLink>
    {", "}
    <FliterLink filter="SHOW_ACTIVE">Active</FliterLink>
    {", "}
    <FliterLink filter="SHOW_COMPLETED">Completed</FliterLink>
  </p>
)


export default Footer