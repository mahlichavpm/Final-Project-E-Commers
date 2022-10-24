import { AppBar, Divider, IconButton, Menu, MenuItem, Badge, Toolbar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "@emotion/styled";
import Search from './Search';
import ButtonLink from './ButtonLinkOne';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import React, { useState } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HistoryIcon from '@mui/icons-material/History';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import MenuItemProduct from "./MenuItemProduct";
import SideCategory from '../sideCategory/SideCategory';
import ButtonMenu from './ButtonMenu';
import './header.scss'
import ProfileAvatar from "../profileAvatar/ProfileAvatar";
import MenuIcon from '@mui/icons-material/Menu';
import ButtonLinkTwo from "../buttons/ButtonLinkTwo";
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




// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: '1240px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingLight: '20px'
});

const StyledNav = styled(Box)({
    padding: '5px 24px',
    justifyContent: 'space-between',
    display: 'flex',
    maxWidth: '1240px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingLight: '20px'
})

export default function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (seter) => {
        seter(null);
    };
    const [wish, setWish] = React.useState(null);
    const openWish = Boolean(wish);
    const handleClickWish = (event) => {
        setWish(event.currentTarget);
    };

    const [menu, setMenu] = React.useState(null);
    const openMenu = Boolean(menu);
    const handleClickMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const [menuComp, setMenuComp] = React.useState(null);
    const openMenuComp = Boolean(null);
    const handleClickMenuComp = (event) => {
        setMenuComp(event.currentTarget);
    };
    return (
        <AppBar position="sticky"
            sx={{
                bgcolor: "white",
            }}>
            <Box >
                <StyledToolbar>
                    {/* <IconButton onMouseEnter={handleClickMenu}>
                        <MenuIcon color="primary" />
                    </IconButton> */}
                    {/* <Menu
                        anchorEl={menu}
                        id="account-menu"
                        open={openMenu}
                        onMouseLeave={() => handleClose(setMenu)}
                        onClose={() => handleClose(setMenu)}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    >
                        {/* <ButtonLinkTwo
                            onMouseEnter={(e) => handleClickMenuComp(e)}
                            onMouseLeave={(e) => handleClose(e)}
                            name='Компютри & Периферия'
                            startIcon={<ComputerOutlinedIcon />}
                        /> */}

                        <Button
                            sx={{
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
                            }}
                            underline='none'
                            key={uuidv4()}
                            startIcon={<ComputerOutlinedIcon />}
                            onMouseEnter={(e) => handleClickMenuComp(e)}
                            onMouseLeave={(e) => handleClose(e)}
                        >
                            Компютри & Периферия
                        </Button>

                        {/* <Menu
                            anchorEl={menuComp}
                            id="account-menu"
                            open={openMenuComp}
                            // onMouseLeave={() => handleClose(setMenuComp)}
                            // onClose={() => handleClose(setMenuComp)}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 320,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'top', vertical: 'right' }}
                            anchorOrigin={{ horizontal: 'top ', vertical: 'left' }}
                        >

                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                            <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                        </Menu> */}
                        <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Gaming' startIcon={<VideogameAssetOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Големи електроуреди' startIcon={<KitchenOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Малки електроуреди' startIcon={<BlenderOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Мода' startIcon={<CheckroomOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Здраве и красота' startIcon={<FaceRetouchingNaturalOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Дом, Градина & Petshop' startIcon={<HomeOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Играчки & Детски артикули' startIcon={<SmartToyOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Спорт & свободно време' startIcon={<SportsKabaddiOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Авто & Направи си сам' startIcon={<DirectionsCarOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Книги, Офис & Храни' startIcon={<MenuBookOutlinedIcon />} />
                    </Menu> */}


                    <Link to={'/home'}>
                        <img id="headerLogo" src="https://s13emagst.akamaized.net/layout/bg/images/logo//18/26930.svg" alt="logo" />
                    </Link>

                    <Search />

                    <Stack direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "flex",
                                lg: "flex",
                                xl: "flex",
                            }
                        }}>
                        <ProfileAvatar
                            sx={{ bgcolor: 'orange', width: 36, height: 36 }}
                            onMouseEnter={handleClick}
                        />

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onMouseLeave={() => handleClose(setAnchorEl)}
                            onClose={() => handleClose(setAnchorEl)}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Link className='link' to={'/profile'} >
                                <ButtonMenu startIcon={<ProfileAvatar sx={{ bgcolor: 'orange' }} />} name='Профил'></ButtonMenu>
                            </Link>
                            <Divider />
                            <Link className='link' to={'/love'} >
                                <ButtonMenu startIcon={<FavoriteBorderIcon fontSize="small" />} name='Любими'></ButtonMenu>
                            </Link>
                            <Link className='link' to={'/cart'} >
                                <ButtonMenu startIcon={<ShoppingCartOutlinedIcon fontSize="small" />} name='Количка'></ButtonMenu>
                            </Link>
                            <Link className='link' to={'/history'} >
                                <ButtonMenu startIcon={<HistoryIcon fontSize="small" />} name='Моите поръчки'></ButtonMenu>
                            </Link>
                            <ButtonMenu startIcon={<Logout fontSize="small" />} name='Logout'></ButtonMenu>
                        </Menu>
                        <Badge badgeContent={0} color="alert" />
                        <IconButton onMouseEnter={handleClickWish}>
                            <Badge badgeContent={0} color="alert">
                                <FavoriteBorderIcon color="primary" />
                            </Badge>
                        </IconButton>
                        <Menu
                            anchorEl={wish}
                            id="account-menu"
                            open={openWish}
                            onMouseLeave={() => handleClose(setWish)}
                            onClose={() => handleClose(setWish)}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItemProduct />
                            <MenuItemProduct />
                            <MenuItemProduct />
                        </Menu>

                        <Badge badgeContent={5} color="alert">
                            <ShoppingCartOutlinedIcon color="primary" />
                        </Badge>
                    </Stack>
                </StyledToolbar>
            </Box>
            <Box sx={{ backgroundImage: 'linear-gradient(to right, rgb(255, 29, 37) 5%, rgb(160, 50, 140) 35%, rgb(112, 64, 164) 45%, rgb(67, 89, 199) 55%, rgb(0, 130, 230) 70%);', }}>
                <StyledNav>
                    <Stack spacing={2} direction='row'>
                        {/* <SideCategory /> */}
                        <ButtonLink href='#text-buttons' name='еМАG кредитна карта от Fibank' />
                        <ButtonLink href='#text-buttons' name='eCREDIT' />
                        <Stack
                            spacing={2}
                            direction='row'
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "none",
                                    lg: "flex",
                                    xl: "flex",
                                }
                            }}
                        >
                            <ButtonLink href='#text-buttons' name='easybox в София' />
                            <ButtonLink href='#text-buttons' name='easybox в София' />
                            <ButtonLink href='#text-buttons' name='easybox в София' />
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "flex",
                                lg: "flex",
                                xl: "flex",
                            }
                        }}
                    >
                        <ButtonLink

                            href='#text-buttons'
                            name='eMAG Help' startIcon={<HeadphonesOutlinedIcon />} />
                    </Stack>
                </StyledNav>
            </Box>
        </AppBar >
    )
}