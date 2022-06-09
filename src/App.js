import React from "react";

import SubNavbar from '../src/Component/SubNavbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"


function App() {
  return (
    <Router>
      <Navbar/>
      <SubNavbar/>
      <div >
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
