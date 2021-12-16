import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import Home from "./Component/Redux/Home";
import HomeAxios from "./Component/ReduxAxios/Home";
import Header from "./Component/Hooks/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/redux" element={<Home />} />
          <Route path="/ra" element={<HomeAxios />} />
          <Route path="/hooks" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
