import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onButtonSubmit } ) => {
    return(
        <div id='form'>
            <p id='intro-text' className='f4 white'>This Magic Brain will detect face in your picture. Get it a try</p>
            <div className='center'>
                <div className='center pa3 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-black'
                    onClick={onButtonSubmit}
                    >
                        Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;