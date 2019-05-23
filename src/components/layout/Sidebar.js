import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'
import logo from './../../img/logo.png'


const Sidebar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink />;
  return(
    <nav className="sidebar transparent ">

    <style jsx>{`
      .sidebar .container .cellarImg{
        width: 115px;
        height: auto;
        z-index: 2;
      }

      `}</style>
      <div className="container">
      <Link to='/'className="brand-logo">
      <img className="cellarImg" src={logo} alt=""/>

      </Link>
      { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Sidebar)
