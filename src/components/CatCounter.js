import { useState } from "react";

function CatCounter(props) {
    const styles = {
        backgroundColor: props.colour
    }

    const [count, setCount] = useState(0);

    return (
        <div style={styles} onClick={() => setCount(count + 1)}>
        <h2>I am a cat.</h2>
        <p>My name is {props.name} and my favourite food is {props.food}.</p>
        <p>You pet me {count} times!</p>
        </div>
    )
}
export default CatCounter


