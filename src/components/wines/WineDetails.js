import React from 'react'

const WineDetails = (props) => {
  const id = props.match.params.id;
  return (

      <div className= "container section wine-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Wine Name - {id}</span>
            <p>Lorem ipsum dolor sit amet, a et cum, nunc potenti, ad sapien wisi nulla, vitae nec elit modi nunc ornare, placerat accumsan.
            </p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div> Posted by Victoria Martineez</div>
            <div> June 2, 2am </div>
          </div>

      </div>
    </div>
  )
}

export default WineDetails
