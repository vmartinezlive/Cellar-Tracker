import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
  console.log(state);
  return{

  }
}

export default connect(mapStateToProps)(Sidebar)
