function Title (props) {

    function coinToss() {
        return Math.random() < 0.5 ? "heads" : "tails";
    }
    
    const styleOne = {
        color: "#EFC7E5",
        textDecorationStyle: "solid"
    };

    const styleTwo = {
        color: "#EAF6FF",
        textDecorationStyle: "wavy"
    };
    
    let text;
    
    if (coinToss() === "heads") {
    
        text = <h1 className="title" style={styleOne}>{props.children}</h1>;
    } else {
        text = <h1 className="title" style={styleTwo}>{props.children}</h1>;
    }

    return (
        <div>
            {text}
        </div>
      )
}

export default Title