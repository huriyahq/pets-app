import Counter from "./Counter.js";
function Cat(props) {

    // creating a props object. Another way is to do this at the top: function Cat ({name, colour, lackOfCommonSense})
    // const { name, colour, lackOfCommonSense } = props;
    
    // better to create object for styles because we want a different colour specific to the cat instead of the component having the same colour each time (which is what would happen with external ss)
    // styles go outside return statement
    const styles = {
        backgroundColor: props.colour
    }

    return (
        <div style={styles}>
            <h2>I am a cat.</h2>
            <p>My name is {props.name} and my favourite food is {props.food}.</p>
            <Counter />
        </div>
    )
}

export default Cat;

// using ternary statements
// condition ? thingTODoIfConditionTrue : thingToDoIfFalse