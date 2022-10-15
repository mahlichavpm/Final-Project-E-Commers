import React from 'react'
import { TextField } from '@mui/material'

function Input(props) {
  return (
    <TextField fullWidth={props.width} type={props.type} id={props.id} label={props.label} variant="outlined" />
  )
}

export default Input