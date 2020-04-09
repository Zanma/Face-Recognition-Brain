import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognation from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';



const app = new Clarifai.App({
  apiKey: '4f024e19734d4e97992e98bd572c375d'
 })

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : '',
      box: {}
    }
  }

  onInputChange = ( event ) => {
    this.setState({input: event.target.value })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      rightCol : width - ( width * clarifaiFace.right_col ),
      topRow : height * clarifaiFace.top_row,
      bottomRow : height - ( height * clarifaiFace.bottom_row)
    }
  }

  displayFaceBox = (boxLocation) => {
    this.setState( {box: boxLocation} )
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models 
    .predict(
    Clarifai.FACE_DETECT_MODEL,
      // URL
      this.state.input
    )
    .then ( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch ( err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' 
                params={particleOptions} />
        <Navigation /> 
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognation box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
