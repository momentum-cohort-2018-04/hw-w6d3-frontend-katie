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
      
        {/* <p>{this.state.images.user}</p>
        <img src = {this.state.images.previewURL}/>
        <p>{this.state.images.tags}</p> */}
        <div className = "film-border">
        <div className= "image-container">
        {images.map(function(image){
          return <Image image={image} q={text}/>
        })}
        </div>
        </div>
        {/* <div className="slide-container">
          <input type="range" min="1" max="100" value="50" className="slider"/>
        </div> */}
        <h1 className = "title">THE FILM REEL PHOTO SEARCH</h1>
      <input className ='search-box' placeholder="Search For Images" name="search" id="search" onChange = {this.searchTextUpdate.bind(this)}/>
        <button type="submit" className="button" onClick={this.getimages.bind(this)}>Search For Images!</button>
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
    this.state = {
      expanded: false
    }
}

expandPic(){
  this.setState({
    expanded : !this.state.expanded
  })
  console.log(this.state.expanded)
}

  render(){
    console.log(this.props)
  return (
    <div>
    
    {this.state.expanded ?(
       <div>
    {/* img on click goes to expandPic */}
      <img onClick = {this.expandPic.bind(this)} className = 'big-photo' src = {this.props.image.largeImageURL}/>
      <div className= "more-info">
        <div className = "src-link">
          <a href={this.props.image.pageURL}>Link</a>
        </div>
        <div className= "more-info-item">Contributor: <strong>{this.props.image.user}</strong></div>
        <div className= "more-info-item">Likes: <strong>{this.props.image.likes}</strong></div>
        <div className= "more-info-item">Downloads: <strong>{this.props.image.downloads}</strong></div>
        {/* <p>Tags: <strong>{this.props.image.tags}</strong></p> */}
      </div>
      {/* <BigPhoto expanded = {this.state.expanded}/> */}
      </div>
    ) : (
      <div className="imageWithInfo">
        {/* <p>Contributor: <strong>{this.props.image.user}</strong></p> */}
        <img className = "thumbnail" onClick ={this.expandPic.bind(this)} src = {this.props.image.previewURL}/>
        {/* <p>Tags: <strong>{this.props.image.tags}</strong></p> */}
    </div>
    )}
    </div>
  )
  
}
}

class BigPhoto extends Component {
  render() {
    const expanded = this.props.expanded
  return (
    <div>HELLO</div>
  )
  }
}

export default App;
