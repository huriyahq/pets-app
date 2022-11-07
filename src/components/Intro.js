import React from 'react'
import { useState } from "react";

function Intro(){
    const [isActive, setIsActive] = useState(false);

  return (
    <div>
        <p className={`para ${isActive ? "is-active" : ""}`}
            onMouseOver={() => setIsActive(true)}
            onMouseOut={() => setIsActive(false)}>
            Hello, I am some intro text. Hover over me for some magic!
        </p>
    </div>
  )
}

export default Intro