import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { Navigate } from 'react-router-dom';
import "../page.css";
import { Modal } from 'react-bootstrap';

const Login = ({ accountSetter, setLoggedIn, loggedIn }) => {
  
  const [user, setUser] = useState({
      email: ``,
      pass: ``
  });
  
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  const handleChange = e => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value
        });
    };

    const login = async (e) => {
      e.preventDefault();
      const res = await axios.post(`http://localhost:4000/login`, user);
      setMsg(res.data.message);
      setShow(true);
      accountSetter(res.data.user);
      if (res.data.message === "Login Success") {
        sleep(2000).then(r => {
          setLoggedIn(true);
        })
      }
    }



  return (
    
    <>
      {loggedIn && <Navigate to={"/home"} />}
      <Header />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
      </Modal>
      
      <h1>Chitter login</h1>
      <h2>Login to your account using your email and password</h2>
      <div>
        <form onSubmit={login}>
          <input type="text" placeholder="Enter email" id="email" value={user.email} onChange={handleChange} placeholder="Email" />
          <br></br>
          <input type="password" placeholder="Enter password" id="pass" value={user.pass} onChange={handleChange} placeholder="Password" />
          <br></br>
          <input type="submit" value="Login" />
          <br></br>
          <a href="/register">Click here to create an account</a>
        </form>
      </div>
    </>
  )
}

export default Login