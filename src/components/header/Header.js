import { AppBar, Divider, IconButton, Menu, MenuItem, Badge, Toolbar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "@emotion/styled";
import Search from './Search';
import React, { useState } from "react";
import HistoryIcon from '@mui/icons-material/History';
import Logout from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
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
import { useSelector } from "react-redux";
import ButtonLink from "../buttons/ButtonLinkTwo";

// function uuidv4() {
//     return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
//         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
// }

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: '1240px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '16px',
    paddingLight: '16px'
});

export default function Header(props) {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (seter) => {
        seter(null);
    };

    const [menu, setMenu] = React.useState(null);
    const openMenu = Boolean(menu);
    const handleClickMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const [menuComp, setMenuComp] = React.useState(null);
    const openMenuComp = Boolean(menuComp);
    const handleClickMenuComp = (event) => {
        setMenuComp(event.currentTarget);
    };


    // const users = JSON.parse(localStorage.getItem('users'));
    // const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    // const activeUser = users.find(e => e.username === loggedUser);
    // const productList = useSelector(state => state.product.product);
    // const cartList = activeUser.cart;

    // const [cartBadge,setCardBadge] = useState(0)
    const cartBadge = useSelector(state => state.activeUser.cart)
    const favouritesCart = useSelector(state => state.activeUser.favourites)

    const [proba, setProba] = React.useState(null);
    const openProba = Boolean(proba);
    const handleClickProba = (event) => {
        setProba(event.currentTarget);
    };
    return (
        <>
            <AppBar position="sticky"
                sx={{
                    bgcolor: "white",
                }}>
                <Box >
                    <StyledToolbar>
                        <IconButton
                            aria-controls={openProba ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openProba ? 'true' : undefined}
                            onClick={handleClickProba}
                        >
                            <MenuIcon color="primary" />
                        </IconButton>

                        <div>

                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={proba}
                                open={openProba}
                                onClose={() => handleClose(setProba)}
                                sx={{
                                    marginTop: '12px',
                                    boxShadow: '0',
                                    borderRadius: '0 0 10px 10px'
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <Link
                                    className='homepageLink'
                                    aria-controls={openMenuComp ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenuComp ? 'true' : undefined}
                                    onMouseEnter={handleClickMenuComp}
                                    to={'/products'}>
                                    <ButtonLinkTwo name='Телефони, Таблети & Лаптопи' startIcon={<PhoneAndroidOutlinedIcon />} />
                                </Link>
                                {/* --------------------------------------------------------------------- */}

                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={menuComp}
                                    open={openMenuComp}
                                    onClose={() => handleClose(setMenuComp)}
                                    sx={{
                                        marginTop: '-8px',
                                        // boxShadow: '0',
                                        // borderRadius: '0 0 10px 10px'

                                    }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Телефони, Таблети & Лаптопи' startIcon={<PhoneAndroidOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Компютри & Периферия' startIcon={<ComputerOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Gaming' startIcon={<VideogameAssetOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Големи електроуреди' startIcon={<KitchenOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Малки електроуреди' startIcon={<BlenderOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Мода' startIcon={<CheckroomOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Здраве и красота' startIcon={<FaceRetouchingNaturalOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Дом, Градина & Petshop' startIcon={<HomeOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Играчки & Детски артикули' startIcon={<SmartToyOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Спорт & свободно време' startIcon={<SportsKabaddiOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Авто & Направи си сам' startIcon={<DirectionsCarOutlinedIcon />} />
                                    </Link>
                                    <Link className='homepageLink' to={'/products'}>
                                        <ButtonLinkTwo name='Книги, Офис & Храни' startIcon={<MenuBookOutlinedIcon />} />
                                    </Link>
                                </Menu>


                                {/* --------------------------------------------------------------------- */}
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Компютри & Периферия' startIcon={<ComputerOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Gaming' startIcon={<VideogameAssetOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Големи електроуреди' startIcon={<KitchenOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Малки електроуреди' startIcon={<BlenderOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Мода' startIcon={<CheckroomOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Здраве и красота' startIcon={<FaceRetouchingNaturalOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Дом, Градина & Petshop' startIcon={<HomeOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Играчки & Детски артикули' startIcon={<SmartToyOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Спорт & свободно време' startIcon={<SportsKabaddiOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Авто & Направи си сам' startIcon={<DirectionsCarOutlinedIcon />} />
                                </Link>
                                <Link className='homepageLink' to={'/products'}>
                                    <ButtonLinkTwo name='Книги, Офис & Храни' startIcon={<MenuBookOutlinedIcon />} />
                                </Link>
                            </Menu>
                        </div>



                        <Link to={'/home'}>
                            <img id="headerLogo"
                                src="https://s13emagst.akamaized.net/layout/bg/images/logo//18/26930.svg"
                                alt="logo"
                                ß />
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
                            <Button sx={{ color: "black" }} onClick={() => { navigate('/profile') }}>
                                <ProfileAvatar
                                    sx={{ bgcolor: 'orange', fontSize: '14px', marginRight: 1, width: 28, height: 28 }}
                                    onMouseEnter={handleClick}
                                />
                                <span>Профил</span>
                            </Button>


                            <Button sx={{ color: "black" }} onClick={() => { navigate("/favourites") }}>
                                <Badge badgeContent={favouritesCart.length} color="error">
                                    <FavoriteBorderIcon color="primary" />
                                    {/* <span>Любими</span> */}
                                </Badge>
                            </Button>
                           

                            <Button onClick={() => { navigate('/cart') }}>
                                <Badge badgeContent={cartBadge.length} color="error">
                                    <ShoppingCartOutlinedIcon color="primary" />
                                </Badge>
                            </Button>
                        </Stack>
                    </StyledToolbar>
                </Box>

                {/* ---------Bottom Menu------------- */}
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(to right, rgb(255, 29, 37) 5%, rgb(160, 50, 140) 35%, rgb(112, 64, 164) 45%, rgb(67, 89, 199) 55%, rgb(0, 130, 230) 70%);',
                        height: '5px'
                    }}>
                </Box>
            </AppBar >
        </>
    )
}