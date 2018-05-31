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
    console.log('image-state', this.state.images)
    const images = this.state.images
    const text = this.state.text
    return (
      <div className="App">
      <h1>IMAGE SEARCH</h1>
      <input className ='search-box' placeholder="Search For Images" name="search" id="search" onChange = {this.searchTextUpdate.bind(this)}/>
        <button type="submit" className="button" onClick={this.getimages.bind(this)}>Search For Images!</button>
        {/* <p>{this.state.images.user}</p>
        <img src = {this.state.images.previewURL}/>
        <p>{this.state.images.tags}</p> */}
        
        {images.map(function(image){
          return <Image image={image} q={text}/>
        })}
      </div>
    );
  }


  getimages(){
    request.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_SECRET_CODE}&q=('${this.state.text}')`)
    .then(response => {
       this.setState({
        images : response.body.hits
      })
      console.log(this.state.images.previewURL)
  })
// }
}
searchTextUpdate (event) {
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
        <p>{this.props.image.user}</p>
        <img src = {this.props.image.previewURL}/>
        <p>{this.props.image.tags}</p>
    </div>
  )
  
}
}

export default App;
