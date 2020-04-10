import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn){
            return(
                <nav >
                    <p onClick={() => onRouteChange('signout')} id='nav-border' className='f5 link dim white pa2 mr4 pointer '>Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav >
                    <p onClick={() => onRouteChange('signin')} id='nav-text' className='f5 link dim white pa2 mr4 pointer'>Sign in</p>
                    <p onClick={() => onRouteChange('signin')} id='nav-text' className='f5 link dim white mr4 b-white br'></p>
                    <p onClick={() => onRouteChange('signup')} id='nav-border' className='f5 link dim white pa2 mr4 pointer'>Sign Up</p>
                </nav>
            );
        }        
}

export default Navigation;