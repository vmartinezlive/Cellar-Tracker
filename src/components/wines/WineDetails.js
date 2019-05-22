import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'



const WineDetails = (props) => {
  const { wine, auth } = props;
  if(!auth.uid) return <Redirect to='/signin'/ >

  if (wine) {
    return (
      <div className= "container section wine-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{wine.winename}</span>
              <p>{ wine.vintage}</p>
              <p>{ wine.price}</p>
              <p>{ wine.region}</p>
              <p>{ wine.location}</p>
              <p>{ wine.varietal}</p>
              <p>{ wine.category}</p>
              <p>{ wine.alcohol}</p>
              <p>{ wine.locationcolumn}</p>
              <p>{ wine.locationrow}</p>
              <p>{ wine.notes}</p>
              <p>{ wine.pairingnotes}</p>
            </div>
              <div className="card-action grey lighten-4 grey-text">
            <div> Posted by{wine.authorFirstName} {wine.authorLastName}</div>
            <div> {moment(wine.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading wine...</p>
      </div>
    )
  }

}

const masStateToProps = (state, ownProps) => {
  console.log(state);
    const id = ownProps.match.params.id;
    const wines = state.firestore.data.wines;
    const wine = wines ? wines[id] : null
  return{
    wine: wine,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(masStateToProps),
  firestoreConnect([
    { collection: 'wines' }
  ])

)(WineDetails)
