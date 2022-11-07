import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-field" onClick={() => setCount(count + 1)}>
        <p>You pet me {count} times!</p>
        </div>
    )
}
export default Counter


