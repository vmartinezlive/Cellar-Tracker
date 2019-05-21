import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

const Sidebar = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLink/> : <SignedOutLink />;
  return(
    <nav className="sidebar grey darken-3">
      <div className="container">
      <Link to='/' className="brand-logo">Cellar Tracker</Link>
      { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Sidebar)
