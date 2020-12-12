
import React, { Component } from 'react'
import './CSS/todo.css'
import Radium , { StyleRoot} from 'radium';



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
      

    }


    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
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
                
                <h2 className={classes}>Click Here To Register</h2>

                <button 
                style={style}
                onClick={this.toggleRegisterHandler}>Register</button>
                

                {
                this.state.showRegister == true ?
                <div>

                <form  onSubmit={this.handleSubmit}>

                    <h1 >User Registration</h1>
                    <label  >FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div> : null
    }
    </div>
    </StyleRoot>
            
        )
    }
}

export default Radium(Form)




