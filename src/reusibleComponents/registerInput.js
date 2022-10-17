import React from 'react'
import { TextField } from '@mui/material'
import "./registerInput.css"

function Input() {
  return (
    <TextField 
    className='registerInput'
    id="outlined-basic"
    label="Outlined"
    variant="outlined"
    />
  )
}

export default Input