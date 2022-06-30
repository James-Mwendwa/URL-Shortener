import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link className='logo' to="/">Shortly</Link>
        <Link to="">Features</Link>
        <Link to="">Pricing</Link>
        <Link to="">Resources</Link>
      </div>

      <div className="signButtons">
        <Button className='login'>Login</Button>
        <Button className='signUp'>Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;