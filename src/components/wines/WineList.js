import React from 'react'
import WineSummary from './WineSummary'

const WineList = ({wines}) => {
  return (
    <div className="wine-list section">
      { wines && wines.map(wine => {
        return (
          <WineSummary wine={wine} key={wine.id}/>

        )

      })}


    </div>
  )
}
export default WineList
