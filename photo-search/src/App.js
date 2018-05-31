import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }


  render() {
    return (
      <div className="App">
        <p>{images[0]}</p>
      </div>
    );
  }
}


  request.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_SECRET_CODE}&q=('red')`)
  .then(response => {
     const images = response.body.hits
  })



export default App;
