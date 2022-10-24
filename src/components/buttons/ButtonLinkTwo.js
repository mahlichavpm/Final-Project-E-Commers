import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

export default function ButtonLink(props) {
    const Link = styled(Button)({
        color: '#222',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '6px 20px',
        fontSize: '12px',
        textTransform: 'none',
        borderTop: '1px solid transparent',
        borderBottom: '1px solid transparent',
        textDecoration: 'none',
        width: '250px',
        borderRadius: '0px',
        '&:hover': {
            borderTop: '1px solid  rgba(34, 34, 34, 0.2)',
            borderBottom: '1px solid  rgba(34, 34, 34, 0.2)',
            color: '#0082e6',
        },
    });
    return (
        <Link
            href={props.href}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            // onMouseEnter={(e) => {props.onMouseEnter(e)}}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={(e) => {props.onMouseEnter(e)}}
            // onMouseLeave={(e) => {props.onMouseLeave(e)}}
            underline='none'
            key={uuidv4()}
        >
            {props.name}
        </Link>
    )
}