import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import "../page.css";
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const [user, setUser] = useState({
      email: ``,
      pass: ``
  });

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const nav = useNavigate();

  const handleChange = e => {
      const { name, value } = e.target;
      setUser({
          ...user,
          [name]: value
      });
  };

  const register = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:4000/register`, user);
    setShow(true);
    setMsg(res.data.message);
    if (res.data.message === "User registered successfully") {
      sleep(2000).then(r => {
        nav('/login');
      })
    }
  }  
  
  return (
    <>
      <Header />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
      </Modal>
      <h1>Chitter register</h1>
      <h2>Register an account using your email and password</h2>
      <div>
        <form onSubmit={register}>
          <input type="text" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
          <br></br>
          <input type="password" placeholder="Enter password" name="pass" value={user.pass} onChange={handleChange} placeholder="Password" />
          <br></br>
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  )
}

export default Register