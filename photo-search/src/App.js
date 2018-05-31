import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      images: []
    }
  }


  render() {
    return (
      <div className="App">
        <p>{this.state.images}</p>
        <button onClick={this.getimages.bind(this)}>Read More!</button>
      </div>
    );
  }


  getimages(){
    request.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_SECRET_CODE}&q=('red')`)
    .then(response => {
       this.setState({
        images : response.body.hits[0].user
      })
      console.log(this.state.images)
  })
// }
}
}

class Image extends Component {
  constructor () {
    super()
    this.state = {
    }
}

export default App;
