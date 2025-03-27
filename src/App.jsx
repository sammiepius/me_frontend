import { useState } from 'react';
import CreateProfile from './pages/signup/CreateProfile';
import Login from './pages/login/Login';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Profile from './components/Profile';

// import './App.css'

function App() {
  return (
    // <div>
    //   <Profile />
    //   <center><p style={{fontWeight:'bold'}}>INTEREST</p></center>
    //   <hr />
    //   <Home />
    // </div>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
