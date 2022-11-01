import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
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
            <CategoryBtn 
                href={props.href}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                onClick={props.onClick}
                underline='none'
            >
                {props.name}
            </CategoryBtn>
    )
}