import React,{ useState } from 'react';
import Modal from 'react-modal';
import './CSS/todo.css'
import Login from './Login';
Modal.setAppElement('#root')

function Logins() {
  const[modalIsOpen, setModalIsOpen]= useState(false)
  return (
    <div className="Logins">
      
     <h2> <button onClick={()=> setModalIsOpen(true)}> click here to login </button></h2>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick ={false} 
      onRequestClose={()=>setModalIsOpen(false)}
      
      
      style={{
        overlay: {
          position: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '150px',
          left: '150px',
          right: '150px',
          bottom: '150px',
          border: '1px solid #ccc',
          background: '#cococo',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      >

        
         <Login/>
        <div>
          <button onClick ={() =>setModalIsOpen(false)}>Logout</button>
        </div>
      </Modal>
    </div>




  );
}

export default Logins;
