import React from 'react';

const Hero = (props) => {
    return (
        <div>
            <button onClick={props.clickAction}>Bruv!</button>
        </div>
    );
};

export default Hero;