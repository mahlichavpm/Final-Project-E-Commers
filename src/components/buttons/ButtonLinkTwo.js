import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './ButtonLinkTwo.scss';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

export default function ButtonLink(props) {
    const iconArray = [
        {
            icon: <PhoneAndroidOutlinedIcon />,
            key: 'phone'
        },
        {
            icon: <ComputerOutlinedIcon />,
            key: 'computer'
        },
        {
            icon: <TvOutlinedIcon />,
            key: 'tv'
        },
        {
            icon: <VideogameAssetOutlinedIcon />,
            key: 'games'
        },
        {
            icon: <BlenderOutlinedIcon />,
            key: 'blender'
        },
        {
            icon: <KitchenOutlinedIcon />,
            key: 'kitchen'
        },
        {
            icon: <CheckroomOutlinedIcon />,
            key: 'modaIcon'
        },
        {
            icon: <FaceRetouchingNaturalOutlinedIcon />,
            key: 'beauty'
        },
        {
            icon: <HomeOutlinedIcon />,
            key: 'home'
        },
        {
            icon: <DirectionsCarOutlinedIcon />,
            key: 'car'
        },
        {
            icon: <MenuBookOutlinedIcon />,
            key: 'book'
        },
        {
            icon: <SportsKabaddiOutlinedIcon />,
            key: 'sport'
        },
        {
            icon: <SmartToyOutlinedIcon />,
            key: 'toy'
        },
    ];

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
                startIcon={iconArray.find(e => e.key === props.startIcon).icon}
                endIcon={props.endIcon}
                onClick={props.onClick}
                underline='none'
            >
                {props.name}
            </CategoryBtn>
    )
}