import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Welcome from './Components/Welcome';

function App() {

  const [account, setAccount] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Welcome />} />
        <Route path="/login" element={<Login accountSetter={setAccount} setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> } />
        <Route path="/home" element={<Home account={account} loggedIn={loggedIn} />} />
        <Route path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
