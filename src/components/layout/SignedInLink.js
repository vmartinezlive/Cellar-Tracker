import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLink = (props) => {

  return(
    <ul className="right">
      <li><NavLink to='/create'>New Wines</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating orange lighten-3 black-text'>{props.profile.initals}</NavLink></li>
      </ul>


  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLink)
