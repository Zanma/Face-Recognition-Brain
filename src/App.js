import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

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
  render(){
    return (
      <div className="App">
        <Particles className='particles' 
                params={particleOptions} />
        <Navigation /> 
        <Rank />
        <ImageLinkForm />
          
          { /*<Logo /> */}
      </div>
    );
  }
}

export default App;
