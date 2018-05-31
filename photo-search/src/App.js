import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      images: [],
      text: ''
    }
  }


  render() {
    console.log(this.state.text)
    return (
      <div className="App">
        {/* <p>{this.state.images.user}</p>
        <img src = {this.state.images.previewURL}/>
        <p>{this.state.images.tags}</p> */}
        <Image image={this.state.images} q={this.state.text}/>
        <textarea className ='search-box' placeholder="Search For Images" name="search" id="search" onChange = {this.updateText.bind(this)}/>
        <button type="submit" className="button" onClick={this.getimages.bind(this)}>Search For Images!</button>
      </div>
    );
  }


  getimages(){
    request.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_SECRET_CODE}&q=('${this.state.text}')`)
    .then(response => {
       this.setState({
        images : response.body.hits[0]
      })
      console.log(this.state.images.previewURL)
  })
// }
}
updateText (event) {
  this.setState({text: event.target.value})
}

}

class Image extends Component {
  constructor () {
    super()
    
}
  render(){
    console.log(this.props)
  return (
    <div className="image-container">
        <p>yo</p>
        <p>{this.props.image.user}</p>
        <img src = {this.props.image.previewURL}/>
        <p>{this.props.image.tags}</p>
    </div>
  )
  
}
}

export default App;
