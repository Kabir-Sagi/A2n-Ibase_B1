import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import State1 from "./Components/State/State1";
import Image from "./Components/State/Image";
import Effect1 from "./Components/useEffect/effect1";
import Profile from "./Components/Profile/Profile";
import Form from "./Components/UseRef/form";
import NameReducer from "./Components/UseReducer/NameReducer";

function App() {
  return (
    <div className="App">
      {/* <h2>Welcome to React Hooks</h2>
      <p>----------------------------------------------</p>
      <State1 />
      <p>----------------------------------------------</p>
      <Image /> */}
      {/* <Effect1 /> */}
      {/* <Profile /> */}
      {/* <Form /> */}
      <NameReducer />
    </div>
  );
}

export default App;
