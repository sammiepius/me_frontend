import React from 'react';
import './landingpage.css';
import landingpage from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <img src={landingpage} alt="" /> */}
      <div className="submit-container1">
        <div className="profile" onClick={() => navigate('/create')}>Create profile</div>
        <div className="login" onClick={() => navigate('/login')}>Login</div>
      </div>
    </div>
  );
}
