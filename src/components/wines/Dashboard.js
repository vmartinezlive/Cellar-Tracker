import React, { Component } from 'react'
import WineList from './WineList'
import { connect } from 'react-redux'
import Notifications from './Notifications'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
render(){
  // console.log(this.props);
  const { wines } = this.props;

  return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6"></div>
        <WineList wines={wines}/>
          <div className="col s12 m5 offset-m1">
          <Notifications />

          </div>
        </div>
    </div>

  )
 }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    wines: state.firestore.ordered.wines
  }
}
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'wines'}
    ])
  )(Dashboard)
