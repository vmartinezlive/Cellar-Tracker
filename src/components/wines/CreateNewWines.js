import React, { Component } from 'react'

class CreateNewWines extends Component {
  state = {
    winename: " ",
    vintage: " ",
    price: " ",
    region: " ",
    location: " ",
    varietal: " ",
    category: " ",
    alcohol: " ",
    locationcloumn: " ",
    locationrow: " ",
    notes: " ",
    pairingnotes: " "
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
          <h5 className="grey-text text-darken-3">Add New Wine</h5>
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

          <h5>Add Cellar Information:</h5>
          <br/>
          <div className="input-field">
          <label htmlFor="locationcolumn">Column</label>
          <input type="text" id="locationcolumn" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="locationrow">Row</label>
            <input type="text" id="locationrow" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="notes">Enter notes</label>
            <textarea id="notes" className="materialize-textarea" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="pairingnotes">Pairing Notes</label>
            <textarea id="pairingnotes" className="materialize-textarea" onChange={this.handleChange}/>
          </div>


          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateNewWines
