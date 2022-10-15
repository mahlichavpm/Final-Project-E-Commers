import React from 'react'
import Button from '@mui/material/Button';
import './BlueBtn.scss';


function BlueBtn(props) {
  return (
    <Button variant="contained" className='blue-btn'>{props.value}</Button>
  )
}

export default BlueBtn