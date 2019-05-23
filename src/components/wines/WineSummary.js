import React from 'react'
import moment from 'moment'

const WineSummary = ({wine}) => {

  return(
    <div className="card x-depth-0 project-summary">
    <style jsx>{`
      border: 3px solid yellow;
      `}</style>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{wine.winename}</span>
        <p>Posted by {wine.authorFirstName} {wine.authorLastName}</p>
        <p className="grey-text">{moment(wine.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default WineSummary
