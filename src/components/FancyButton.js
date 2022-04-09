import React from 'react'

const FancyButton = React.forwardRef((props, ref) => (
    <div>
        <p>{props.text}</p>
        <button className="fancy-btn" ref = { ref } >{props.children}</button> 
    </div>
));

export default FancyButton;