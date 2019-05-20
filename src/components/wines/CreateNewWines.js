import React, { Component } from 'react'

class CreateNewWine extends Component {
  state = {
    winename: " ",
    vintage: " ",
    price: " ",
    region: " ",
    location: " ",
    varietal: " ",
    category: " ",
    alcohol: " ",
    location-cloumn: " ",
    location-row: " ",
    notes: " ",
    pairings-notes: " "


  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="winename">Name of the Wine</label>
            <input type="text" id="winename" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="vintage">Vintage of the Wine</label>
            <input type="text" id="vintage" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="price">Amount paid</label>
            <input type="text" id="price" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="region">Wine Region</label>
            <input type="text" id="region" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <label htmlFor="location">Winery</label>
          <input type="text" id="location" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="varietal">Varietal</label>
            <input type="text" id="varietal" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="alcohol">Alcohol Content</label>
            <input type="text" id="alcohol" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <h5>Add cellar information:</h5>
          <label htmlFor="location-column">Column</label>
          <input type="text" id="location-column" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="location-row">Row</label>
            <input type="text" id="location-row" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
          <h5>Add cellar information:</h5>
          <label htmlFor="notes">Enter notes</label>
          <input type="text" id="notes" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="pairing-notes">Pairing Notes</label>
            <input type="text" id="pairing-notes" onChange={this.handleChange}/>
          </div>


          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateNewWine
