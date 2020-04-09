import React from 'react';
import './FaceRecognition.css'

const FaceRecognation = ({imageUrl, box}) => {
    return(
      <div className='center ma'>
        <div className='absolute mt4'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
          <div className='bounding-box' style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}></div>
        </div>
      </div>  
    );
}

export default FaceRecognation;