function Dog({dogYears, colour, breed, name}) {
// logic goes at the top outside of the return statement
    const styles = {
        backgroundColor: colour
    }

    // const humanYears = dogYears * 7;

    function calculateHumanYears(n) {
        return n * 7;
    }

    const humanYears = calculateHumanYears(dogYears);


    // function changeText(e) {
    //     e.target.setAttribute("style", {styles});
    // }

    return (
        <div style={styles}>
            <h2>I am a dog.</h2>
            <p>My name is {name}. I am a {breed}.</p>
            <p>I am {dogYears} years old in dog years. That's {humanYears} human years.</p>
        </div>
    )
}

export default Dog;