import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

const Sidebar = () => {
  return(
    <nav className="sidebar grey darken-3">
      <div className="container">
      <Link to='/' className="brand-logo">Cellar Tracker</Link>
      <SignedInLink/>
      <SignedOutLink/>
      </div>
    </nav>
  )
}

export default Sidebar;
