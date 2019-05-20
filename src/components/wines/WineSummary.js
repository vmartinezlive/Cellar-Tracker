import React from 'react'

const WineSummary = ({wine}) => {

  return(
    <div className="card x-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{wine.winename}</span>
        <p>Posted by Victoria Martinez</p>
        <p className="grey-text">June 1, 2am</p>
      </div>
    </div>
  )
}

export default WineSummary
