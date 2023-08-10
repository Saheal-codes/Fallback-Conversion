
import "./App.css";
import Main from "./Components/Main";
import React, { useState, createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Unitconverter from "./Components/Unitconverter";

export const Context = createContext();

function App() {
  const [data, setData] = useState();

  let routes;
  routes = (
    <Routes>
      <Route path="/Converter" element={<Main />} />
      <Route path="/unitconverter" element={<Unitconverter />} />
    </Routes>
  );
  return (
    <>
      <Provider store={store}>
        <Router>
          {routes}
        </Router>
      </Provider>
    </>
  );
}

export default App;
