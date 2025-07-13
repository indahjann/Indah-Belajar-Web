import React, {useState, useEffect} from 'react';

function MyComponent(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    )
}

export default MyComponent;