import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import whiteWine from '../../img/whiteWine1.png'



const WineDetails = (props) => {
  const { wine, auth } = props;
  if(!auth.uid) return <Redirect to='/signin'/ >

  if (wine) {
    return (
      <div className="container section wine-details">
        <style jsx>{`
            .card-content {
              display: flex;
              flex-direction: row;

            }
            .card-image{
            width: 50px;
            height: 70px;
            margin-right: 50px;
            margin-top: 40px;kkj
            }
          `}</style>
        <div className="right-align">
          <a class="btn-floating btn-small  waves-effect waves-light red right-align"><i class="material-icons">delete</i></a>
        </div>
        <div className="card z-depth-0">
          <div className="card-content">
          <div className="card-image">
            <img className="picture" src={whiteWine} alt="wine bottle"/>
          </div>
          <div className="content">
            <span className="card-title">{wine.winename}</span>
              <p>Vintage:{ wine.vintage}</p>
              <p>Price: { wine.price}</p>
              <p>Region: { wine.region}</p>
              <p>Location: { wine.location}</p>
              <p>Varietal: { wine.varietal}</p>
              <p>Category: { wine.category}</p>
              <p>Alcohol: { wine.alcohol}</p>
              <h6>Cellar Information:</h6>
              <p>Location Column: { wine.locationcolumn}</p>
              <p>Location Row: { wine.locationrow}</p>
              <p>Notes: { wine.notes}</p>
              <p>Pairing Notes: { wine.pairingnotes}</p>
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return{
//     deleteWine: (wine) => dispatch(deleteWine(wine))
//   }
// }

const mapStateToProps = (state, ownProps) => {
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
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'wines' }
  ])

)(WineDetails)
