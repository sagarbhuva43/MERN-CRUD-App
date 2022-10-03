import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      <Link className='logo' to="/"><h1 className='logo'>bezKoder</h1></Link>
       <Link className='a' to="/tutorials">Tutorials</Link>
      <Link className='a' to="/add">Add</Link>
    </div>
  )
}
export default Navbar
