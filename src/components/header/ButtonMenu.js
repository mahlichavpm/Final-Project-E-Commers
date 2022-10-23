import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ButtonMenu (props) {
    const Link = styled(Button)({
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '6px 20px',
        width: '100%',
        textTransform: 'none',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        },
      });
    return (
        <Link href={props.href} startIcon={props.startIcon} color='custom' endIcon={props.endIcon} underline='none'>{props.name}</Link>
    )
}