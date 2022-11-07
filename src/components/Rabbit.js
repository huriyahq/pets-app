import Button from "./Button.js";

function Rabbit(props) {

    // another way to create and use props
    const { name, colour, isAFloof, activity } = props;
    
    
    // better to create object for styles because we want a different colour specific to the cat instead of the component having the same colour each time (which is what would happen with external ss)
    const styles = {
        backgroundColor: colour,
        position: "relative"
    }

    return (
        <div style={styles}>
            <h2>I am a rabbit.</h2>
            <p>My name is {name} and I like {activity}.</p>
            {
                isAFloof ?
                <p>I am a floof</p>
                :
                <p>I could be floofier</p>
            }
            <Button />
        </div>
    )
}
export default Rabbit;