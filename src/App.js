import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognation from './components/FaceRecognation/FaceRecognation';
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
      imageUrl : ''
    }
  }

  onInputChange = ( event ) => {
    console.log('check input')
    this.setState({input: event.target.value })
  }

  onButtonSubmit = () => {
    console.log('check submit')
    this.setState({imageUrl: this.state.input})
    app.models 
    .predict(
    Clarifai.FACE_DETECT_MODEL,
      // URL
      this.state.input
    )
    .then
      (
        function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
        function(err) {// there was an error
      }
    );
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
        <FaceRecognation  imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
