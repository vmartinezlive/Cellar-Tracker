import React, { Component } from 'react'
import background from '../../assets/signinbkgrnd.png';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'

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
    const { authError } = this.props;
    return (
      <div className="container">
      <style jsx>{`
          .container {
            width: 100vw;
            height: 100vh;
            postion: relative;
            objectfit: cover;

        }
        .form {
          postion: absolute;
          margin: 20%;
          margin-top: -500px;
        }

        `}</style>
        <img className="background2" src={background} alt="background picture of barrel, green grapes and wine bottles"></img>
        <div className="form">
        <form className="formSignIn" onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
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
    authError: state.auth.authError
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
