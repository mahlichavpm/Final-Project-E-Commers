import React from 'react'
import Button from '@mui/material/Button';
import './BlueBtn.css';


function BlueBtn(props) {
  return (
    <Button className='blue-btn'>{props.value}</Button>
  )
}

export default BlueBtn