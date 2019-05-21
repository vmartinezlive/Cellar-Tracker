import React from 'react'
import WineSummary from './WineSummary'
import { Link } from 'react-router-dom'

const WineList = ({wines}) => {
  return (
    <div className="wine-list section">
      { wines && wines.map(wine => {
        return (
          <Link to={'/wines/' + wine.id} key={wine.id}>
            <WineSummary wine={wine} />
          </Link>
        )
      })}
    </div>
  )
}
export default WineList
