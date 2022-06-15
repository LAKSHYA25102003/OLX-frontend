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


function App() {
  return (
    <AuthState>
      <ItemState>
        <Router>
          <Navbar />
          <div >
            <Routes>
              <Route path="/*" element={<Home />}></Route>
            </Routes>
          </div>
        </Router>
      </ItemState>
    </AuthState>
  );
}

export default App;
