import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Mainpage from "./Mainpage/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/mainpage" element={<Mainpage/>} />
        </Routes>
    </Router>
  );
}

export default App;
