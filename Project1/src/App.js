import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import A from "./Component/ContextAPI/A";
import Form from "./Component/Form/Form";
import Navbar from "./Component/Navbar/Navbar";
import Axios from "./Component/Axios/Axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Counter from "./Component/HOC/Counter";
import Hover from "./Component/HOC/Hover";
import Lifecyle from "./Component/LIfecycle/Lifecyle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/context" element={<A />} />
          <Route path="/form" element={<Form />} />
          <Route path="/lc" element={<Lifecyle />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Counter />
      <Hover /> */}
    </div>
  );
}

export default App;
