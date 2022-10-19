import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export default function ButtonLink (props) {
    const Link = styled(Button)({
        padding: '8px 9px',
        fontSize: '12px',
        color: 'aliceblue',
        boxSizing: 'border-box',
        border: '1px solid transparent',
        borderRadius: '20px',
        '&:hover': {
            border: '1px solid white',
            borderRadius: '20px',
            boxSizing: 'border-box',
            color: 'aliceblue',
        },
      });
    return (
        <Link href={props.href} startIcon={props.startIcon} endIcon={props.endIcon}>{props.name}</Link>
    )
}