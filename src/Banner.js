import React from 'react';
import './Banner.css';
import { Button } from "@mui/material";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-info">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard
        </p>
      </div>

      <div className="bannerCards">
        <div className="card1">
          <img src="images/icon-brand-recognition.svg" alt="brand" />
          <h4>Brand Recognition</h4>
          <p>
            Boost your brand recognition with <br /> each click. Generate links
            don't mean a<br /> thing. Branded links help instill <br />
            confidence in your content.
          </p>
        </div>

        <div className="card2">
          <img src="images/icon-detailed-records.svg" alt="brand" />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your <br /> links. Knowing when
            and where
            <br />
            people engage with your content
            <br />
            helps inform better decisions.
          </p>
        </div>

        <div className="card3">
          <img src="images/icon-fully-customizable.svg" alt="brand" />
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and
            <br /> content discoverability through
            <br /> customizable links, supercharging
            <br />
            audience engagement.
          </p>
        </div>
      </div>

      <div className="bannerSection">
        <h4>Boost your links today</h4>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Banner;