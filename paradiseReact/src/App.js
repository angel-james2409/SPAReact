import React from 'react';
import './App.css';
import Form from './Components/Form'
//import Forms from './Components/Forms'
import Login from './Components/Login';
import Menu from './Components/Menu';
import Payment from './Components/Payment';
import Example from './Components/Example';
import Logins from './Components/Logins';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      

        <NavLink exact  activeClassName="active " to="/Components/Form">Register</NavLink>
        <pre></pre>
        {/* <NavLink exact  activeClassName="active " to="/Components/Login">Login</NavLink> */}
        {/* <NavLink exact  activeClassName="active " to="/Components/Menu">Menu</NavLink> */}
        
        <NavLink exact  activeClassName="active " to="/Components/Payment">Payment</NavLink>
        <pre></pre>
        <NavLink exact  activeClassName="active " to="/Components/Example">Example</NavLink>
        <pre></pre>
        <NavLink exact  activeClassName="active " to="/Components/Logins">Login Page</NavLink> 
        <pre></pre>
        
        <h1>WELCOME TO SPA PARADISE</h1>
        <hr/>
        <Switch>
          <Route exact path="/Components/Form" component={Form}/>
          <Route exact path="/Components/Login" component={Login}/>
           <Route exact path="/Components/Menu" component={Menu}/>
           <Route exact path="/Components/Payment" component={Payment}/>
           <Route exact path="/Components/Example" component={Example}/>
           <Route exact path="/Components/Logins" component={Logins}/>


        </Switch>

      </div>
    </Router>

  );
}

export default App;
