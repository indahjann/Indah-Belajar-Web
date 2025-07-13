import React, { useState, useEffect } from "react";

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVEN LISTENER ADDED")
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVEN LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${height} x ${width}`
    }, [height, width]);

    window.addEventListener("resize", handleResize);
    console.log("EVEN LISTENER ADDED")
    
    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}

export default MyComponent;