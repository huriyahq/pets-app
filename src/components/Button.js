import { useState } from "react"; // this is a hook

function Button() {

    const [changeColour, setChangeColour] = useState(false);

    // function for handleClick 
    const handleClick = () => {
        setChangeColour(!changeColour);
    }

    return (
        <>
        <span className="whiskers left-whisker-1"></span>
        <span className="whiskers left-whisker-2"></span>
        <span className="whiskers right-whisker-1"></span>
        <span className="whiskers right-whisker-2"></span>
        <button id="invert" className={`${(changeColour === true) ? "btn activeBtn" : "btn inactiveBtn"}`} onClick={handleClick}></button>
        </>
    )
}


export default Button


// props for: colour of button, textColor of button, function to invert colours

// button should invert text and background colours
// will need to pass down function as a prop to invert the colours
