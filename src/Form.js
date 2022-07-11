import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import Error from './Error';
import './Form.css';
import axios from 'axios';

function Form({inputValue}) {

  const [link, setLink] = useState('');
  const [error, setError] = useState(false);


   const handleSubmit = (e) => {
     e.preventDefault();
     inputValue()

   };

   useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setLink(data)
    })
    .catch((error) => console.log(error.message))

   },[inputValue]);

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit}>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="Shorten a link here..."
        />
        <Button>Shorten It!</Button>
      </form>
    </div>
  );
}

export default Form;