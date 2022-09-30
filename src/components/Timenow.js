import React, { useState } from "react";
function Timenow() {
    
    const [time, setTime] = useState(new Date().toString())
    function showDateAndTime() {
        
        setTime(new Date().toString())
    }
    setInterval(showDateAndTime, 1000)

    return <div className="ui container center">It is {time}</div>;
    
}

export default Timenow;


