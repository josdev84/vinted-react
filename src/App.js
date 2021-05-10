import './App.css';
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cookie from "js-cookie";
import React, {useState} from "react";
// import Loader from "./asset/Loader"




function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);


const setUser = (tokenToSet) => {
  if (tokenToSet) {
    Cookie.set("userToken", tokenToSet);
    setToken(tokenToSet);
  } else {
    Cookie.remove("userToken");
    setToken(null);
  }
};
  return (
    <div>
      <Router>
        <Header token={token} setUser={setUser}/>
        <Switch>
          <Route path="/offer/:id">
            <Offer/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route>
          <Route path="/login">
             <Login setUser={setUser}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
       
        
        
      
  );
}

export default App;
