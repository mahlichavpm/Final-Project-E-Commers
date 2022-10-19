import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ButtonLink (props) {
    const Link = styled(Button)({
        color: 'custom',
        padding: '6px 10px',
        fontSize: '12px',
        borderTop: '1px solid transparent',
        borderBottom: '1px solid transparent',
        textDecoration: 'none',
        width: '300px',
        borderRadius: '0px',
        direction: 'ltl',
        '&:hover': {
            borderTop: '1px solid  rgba(34, 34, 34, 0.2)',
            borderBottom: '1px solid  rgba(34, 34, 34, 0.2)',
            color: 'primary !important',
        },
      });
    return (
        <Link color={props.color} href={props.href} startIcon={props.startIcon} endIcon={props.endIcon}>{props.name}</Link>
    )
}