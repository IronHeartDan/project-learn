import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Css from "./Css";
import Home from "./Home";
import Html from "./Html";
import Javascript from "./Javascript";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
