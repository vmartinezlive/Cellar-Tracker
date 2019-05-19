import React, { Component } from 'react'
import WineList from './WineList'

class Dashboard extends Component {
render(){
  return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6"></div>
        <WineList/>
          <div className="col s12 m5 offset-m1">

          </div>
        </div>
    </div>

  )
}

}
  export default Dashboard
