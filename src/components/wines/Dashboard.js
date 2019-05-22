import React, { Component } from 'react'
import WineList from './WineList'
import { connect } from 'react-redux'
import Notifications from './Notifications'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
render(){
  // console.log(this.props);
  const { wines, auth, notifications } = this.props;
  if(!auth.uid) return <Redirect to='/signin'/ >

  return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <WineList wines={wines}/>
        </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
    </div>

  )
 }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    wines: state.firestore.ordered.wines,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'wines', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 4, orderBy: ['time', 'desc']}
    ])
  )(Dashboard)
