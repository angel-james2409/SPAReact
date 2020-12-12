import React, { Component } from 'react'
import './CSS/todo.css'
import Radium , { StyleRoot} from 'radium';


import {BrowserRouter as Router, Redirect, Route, Link, NavLink, Switch} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "",
            password: "",
            
        }
        this.handleSubmit=this.handleSubmit.bind(this)
      

    }


    firsthandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
  
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

  
    handleSubmit = (event) => {
        if(this.state.Name==='angel james'|| this.state.password==="1234"){
      
       //this.props.history.push("/Components/Menu");
       window.location.href='/Components/Menu';            
    }
        
        else if(this.state.Name==='subha'|| this.state.password==="1234"){
      
            //this.props.history.push("/Components/Menu");
            window.location.href='/Components/Menu';            
        
             }
        else{
            alert(`  login Failed !!!!`)  
        }
        console.log(this.state);
        this.setState({
           Name: '',
           password: '',
           
        })
     event.preventDefault()
        
    }
    toggleRegisterHandler = () => {
        const doesShow= this.state.showRegister;
        this.setState({showRegister: !doesShow});
    }
    
    
        render() {
    
            const style={
               
                backgroundColor: 'green',
                color:'white',
                font:'inherit',
                border: '1px solid blue',
               padding: '8px',
               cursor:'pointer',
               ':hover':{
                backgroundColor:'lightgreen',
                color:'black'

            }
            /*'@media (min-width: 500px)':{
                width:'450px'
            }*/
          
        }
        let classes =['red','bold'].join(' ');
        // style:backgroundColor:'red';
       return (

       <StyleRoot>
           <div>
              
               <h2 className={classes}>Click here to Login</h2>

               <button 
               style={style}
               onClick={this.toggleRegisterHandler}>Login</button>
                

                {
                this.state.showRegister === true ?
                <div>
                <form  onSubmit={this.handleSubmit}>
 
               <h1 >Login</h1>

              <label  >Name :</label> <input type="text" value={this.state.Name} onChange={this.firsthandler} placeholder="Enter Your Name..." /><br />
              <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />

              <input type="submit" value="Submit" />
                
    
                </form>

            </div> : null
    }
    </div>
    </StyleRoot>
              )
            }
        }
        
        export default Radium(Login)
             