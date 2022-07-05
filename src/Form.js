import { Button } from '@mui/material';
import React from 'react';
// import Error from './Error';
import './Form.css';

function Form() {
  return (
    <div className='formPage'>
        <form>
            <input type="text" placeholder='Shorten a link here...' />
        </form>
        <Button>Shorten It!</Button>
        
    </div>
  )
}

export default Form;