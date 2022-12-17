import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';


const AddPeep = ({account}) => {

  const [peep, setPeep] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    const peep = e.target.value;
      setPeep(peep);
  };
    


  const submitPeep = async (e) => {
    e.preventDefault();
    const dateCreated = new Date().toLocaleDateString();
    const peepInfo = {
      peep: peep,
      email: account.email,
      dateCreated: dateCreated
    }
    const res = await axios.post(`http://localhost:4000/addPeep`, { peepInfo });
    setShow(true);
    setMsg(res.data.message);
    window.location.reload(); // this line refreshes page after peep submit but it refreshes so they are no longer logged in and it loses state, alternatively i could exclude this line but the user would have to manually refresh
  }

  return (
    <>
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
      </Modal>
    <form onSubmit={submitPeep}>
      <label>
        <p>Fancy a peep?</p>
        <textarea rows="4" cols="50" onChange={handleChange}/>
      </label>
      <br />
      <button type="submit">Post peep</button>
    </form>      
    </>
  )
}

export default AddPeep