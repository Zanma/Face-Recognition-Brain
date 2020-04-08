import React from 'react';

const FaceRecognation = ({imageUrl}) => {
    return(
      <div className='center ma'>
        <div className='absolute mt4'>
          <img alt='' src={imageUrl} width='500px' height='auto'/>
        </div>
      </div>  
    );
}

export default FaceRecognation;