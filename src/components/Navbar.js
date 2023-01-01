import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/Logo.svg'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ll-navbar">
        <div className="container-fluid">
          <Link  to="/" className="navbar-brand ll-brand">
            <img src={logo} alt='logo'/>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar