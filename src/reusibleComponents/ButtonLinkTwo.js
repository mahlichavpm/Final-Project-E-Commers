import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export default function ButtonLink (props) {
    const Link = styled(Button)({
        // display: 'flex',
        color: 'custom',
        padding: '6px 10px',
        fontSize: '12px',
        // boxSizing: 'border-box',
        borderTop: '1px solid transparent',
        borderBottom: '1px solid transparent',
        width: '300px',
        '&:hover': {
            borderTop: '1px solid  rgba(34, 34, 34, 0.2)',
            borderBottom: '1px solid  rgba(34, 34, 34, 0.2)',
            color: 'primary',
        }
      });
    return (
        <Link color={props.color} href={props.href} startIcon={props.startIcon} endIcon={props.endIcon}>{props.name}</Link>
    )
}