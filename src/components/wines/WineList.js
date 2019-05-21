import React from 'react'
import WineSummary from './WineSummary'
import { Link } from 'react-router-dom'

const WineList = ({wines}) => {
  return (
    <div className="wine-list section">
      { wines && wines.map(wine => {
        return (
          <Link to={'/wines/' + wine.id}>
            <WineSummary wine={wine} key={wine.id}/>
          </Link>
        )
      })}
    </div>
  )
}
export default WineList
