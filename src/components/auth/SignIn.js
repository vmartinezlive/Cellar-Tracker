import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'
import photo from './../../img/signIn.png'



class SignIn extends Component {
  state = {
    email: " ",
    password: " "

  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/'/ >
    return (
      <div className="section">
      <style jsx>{`
        .section{
          position: relative;
          width: 100%;
          display: flex;
          flex-flow: column nowrap;

        }
        .container img {
          display: block;
          width: 100vw;
          height: 100vh;
          position: center;
        }
        .form {
          position: inline-block;
          margin-top: -500px;
          margin-left: 200px;
          margin-right: 200px;
        }


        `}</style>
        <section>
          <img src={photo} alt="wine bottle and barrels"/>
        </section>

        <div className="form">
          <form className="formSignIn" onSubmit={this.handleSubmit}>
          <h5 className="orange-text text-lighten-4">Sign In</h5>
          <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <button className="btn orange lighten-3 z-depth-0 black-text">Login</button>
          <div className="red-text center">
          { authError ? <p>{authError}</p> : null }
          </div>
        </div>



        </form>
        </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (credentials) => dispatch(signIn(credentials))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


  // .container{
  //   background-image: url('../../assets/signinbkgrnd.png')
  // }






  // width: 100vw;
  // height: 100vh;
  // postion: relative;
  // objectfit: cover;
