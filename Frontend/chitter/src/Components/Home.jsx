import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header'
import AddPeep from './Peeps/AddPeep'
import Peep from './Peeps/Peep'

const Home = ( {account, loggedIn}) => {

  useEffect(() => {
    getPeeps();
  }, []);
  
  const [peeps, setPeeps] = useState();

  async function getPeeps() {

    const res = await axios.get("http://localhost:4000/getPeeps");
    setPeeps(res);
    setPeeps(res.data.map((peep, index) => {
      return (
        <div key={index}>
          <Peep data={peep} />
        </div>
      )
    }));

  }
  

  return (
    <>
      <div style={{ backgroundColor: '#87CEEB', height: "100vh" }}>
      <Header />
      <div style={{ textAlign: "center", marginTop: "5vh" }}>
        {loggedIn && <AddPeep account={account} />}
        {peeps}
      </div>
      </div>
    </>
  )
}

export default Home