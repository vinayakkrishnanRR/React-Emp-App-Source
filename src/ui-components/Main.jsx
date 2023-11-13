import React from 'react'
import Navbar from './Navbar.jsx'

const Main = (props) => {
  return (
    <div>
      <Navbar/>
      {props.child}
    </div>
  )
}

export default Main
