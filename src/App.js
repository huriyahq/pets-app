// import logo from "./logo.svg";
import "./App.css";
import CatCounter from "./components/CatCounter";
import Dog from "./components/Dog";
import Rabbit from "./components/Rabbit";
import Title from "./components/Title";
import Intro from "./components/Intro";


function App() {
  return (
      <main className="App-main">
      <Title>Pet App</Title>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Intro />
        <div>
          <div className="element">
          <CatCounter colour="#eb9e34" name="Garfield" lackOfCommonSense={true} food="lasagne"/>
          <CatCounter colour="#5D2E46" name="Cheshire" lackOfCommonSense={false} food="cake" />
          <CatCounter colour="#7F7B82" name="Tom" lackOfCommonSense={true} food="Jerry" />
          </div>
          <div className="element">
          <Dog colour="#826754" name="Scooby" dogYears={8} breed="Great Dane"/>
          <Dog colour="#B58DB6" name="Courage" dogYears={5} breed="Beagle" />
          <Dog colour="#AF3E4D" name="Clifford" dogYears={3} breed="Giant Vizsla" />
          </div>
          <div className="element">
          <Rabbit colour="#B1C1C0" name="Thumper" isAFloof={true} activity="hide-and-seek" />
          <Rabbit colour="#7B7263" name="Peter" isAFloof={true} activity="having adventures" />
          <Rabbit colour="#ECC05B" name="Rabbit" isAFloof={false} activity="gardening" />
          </div>
        </div>
      </main>
  );
}

export default App;