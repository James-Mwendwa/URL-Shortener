import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="home">
      <div className="homepage-info">
        <h2>
          More than just <br /> shorter links
        </h2>
        <p>
          Build your brand's recognition and get detailed <br /> insights on how
          your links are performing
        </p>
        <Button>Get Started</Button>
      </div>

      <div className="homepage-svg">
        <img src="images/illustration-working.svg" alt="illustration" />
      </div>
    </div>
  );
}

export default Home;