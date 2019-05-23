import React from 'react'
import WineSummary from './WineSummary'
import { Link } from 'react-router-dom'
import wineList from './../../img/rack.png'


const WineList = ({wines}) => {
  return (
    <div className="wine-list section">
    <style jsx>{`
      .winelist {
        display: block;
        width: 100vw;
        height: 100vh;
        position: center no-repeat;

      }
      link{
        position: absolute;

      }
      `}</style>

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
