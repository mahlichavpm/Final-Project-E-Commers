import * as React from 'react';
import Button from '@mui/material/Button';

import styled from '@emotion/styled';
const ProductButton = styled(Button)({
    width: '100%',
    background: 'linear-gradient(to right,#4a60c1 10%,#3985e0)',
    display: 'flex',
    justifyContent: 'space-evenly',
    '&:hover': {
        background: 'linear-gradient(to right,#3147a8 10%,#206cc7)',
    }

})

export default function ProductCustomButton(props) {
    return (
        <ProductButton
            variant="contained"
            startIcon={props.startIcon}
            endIcon={props.endIcon}
        >
            {props.name}
        </ProductButton>
    );
}