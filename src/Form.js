import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import Error from './Error';
import './Form.css';

import axios from 'axios';

 const url = 'https://api.shrtco.de/v2';

function Form() {

  const [link, setLink] = useState([]);
  const [error, setError] = useState(true);

   const handleClick = (e) => {
     e.preventDefault;
     setLink()
   };

   useEffect(() => {

   },[])

  return (
    <div className="formPage">
      <form>
        <input
          value={link}
          onChange={(e) => e.target.value}
          type="text"
          placeholder="Shorten a link here..."
        />
      </form>
      <Button onClick={handleClick}>Shorten It!</Button>
    </div>
  );
}

export default Form;