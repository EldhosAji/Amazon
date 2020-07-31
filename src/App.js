import React, { useEffect } from "react";
import Checkout from "./screen/Checkout";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Nav from "./screen/components/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./screen/components/StateProvider";
import { auth } from "./screen/components/firebase";
function App() {
  const [{ cart, user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(user);
    const authentication = auth.onAuthStateChanged((auth) => {
      if (auth) {
        dispatch({
          type: "SET_USER",
          user: auth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      authentication();
    };
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Nav />
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
