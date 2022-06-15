import React from "react";
import ItemState from "./Context/item/ItemState";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import AuthState from "./Context/authentication/AuthState";
import Login from "./Component/Login";
import SubNavbar from "./Component/SubNavbar";



function App() {
  return (
    <AuthState>
      <ItemState>
        <Router>
          <Navbar  />
          <div style={{ marginTop: "80px" }} >
            <SubNavbar/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        </Router>
      </ItemState>
    </AuthState>
  );
}

export default App;
