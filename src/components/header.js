import React from 'react'
import {MainContext, useContext} from '../context.js'

function Header() {
    const {theme} = useContext(MainContext)
  return (
    <div>Current Theme = {theme}</div>
  )
}
export default Header