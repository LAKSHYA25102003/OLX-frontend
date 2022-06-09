import React from "react";
import ItemState from "./Context/item/ItemState";
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
    <ItemState>
      <Router>
        <Navbar />
        <SubNavbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </ItemState>
  );
}

export default App;
