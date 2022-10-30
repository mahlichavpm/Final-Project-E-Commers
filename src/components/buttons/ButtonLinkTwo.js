import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './ButtonLinkTwo.scss';

export default function ButtonLink(props) {
    const CategoryBtn = styled(Button)({
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
        // <Link className='link' to={props.to || '/products'}>
            <CategoryBtn
                href={props.href}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                // onMouseEnter={(e) => {props.onMouseEnter(e)}}
                // onMouseLeave={props.onMouseLeave}
                // onMouseEnter={(e) => {props.onMouseEnter(e)}}
                // onMouseLeave={(e) => {props.onMouseLeave(e)}}
                onClick={props.onClick}
                underline='none'
                // key={props.key}   greshkata s key -> undefined
            >
                {props.name}
            </CategoryBtn>
        // </Link>
    )
}