import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main";
import StateComp from "./Components/State/State";
import Student from "./Components/Student/Student";
import Student1 from "./Components/Student/Student1";
import Parent from "./Components/Props/Parent";
import ParentComp from "./Components/child-parent/ParentComp";
import "bootstrap/dist/css/bootstrap.css"; // integrating bootstrap with react app
import Grid from "./Components/Bootstrap/Grid";
import Card from "./Components/Bootstrap/Card";

function App() {
  return (
    <div className="App">
      {/* <Main />
      <h2>Welcome to React world</h2>
      <Header /> */}
      {/* <StateComp /> */}
      {/* <Student /> */}
      {/* <Student1 /> */}
      {/* <Parent /> */}
      {/* <ParentComp /> */}
      {/* <h2 className="text-primary bg-dark mt-5">Welcome to React</h2>
      <button className="btn btn-outline-primary">Bootstrap</button> */}
      {/* <Grid /> */}
      <Card />
    </div>
  );
}

export default App;
