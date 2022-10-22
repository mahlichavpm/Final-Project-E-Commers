import React from 'react';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

function CheckBoxComponent(props) {
  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label={props.value} />
  )
}

export default CheckBoxComponent