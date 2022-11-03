import { AppBar, Divider, IconButton, Menu, MenuItem, Badge, Toolbar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "@emotion/styled";
import Search from './Search';
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.scss'
import ProfileAvatar from "../profileAvatar/ProfileAvatar";
import MenuIcon from '@mui/icons-material/Menu';
import ButtonLinkTwo from "../buttons/ButtonLinkTwo";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: '1240px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '16px',
    paddingLight: '16px'
});

export default function Header() {

    const navigate = useNavigate();
    const handleClose = (seter) => {
        seter(null);
    };

    const [menu, setMenu] = React.useState(null);
    const openMenu = Boolean(menu);
    const handleClickMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const categories = useSelector(state => state.categories.categories);

    const cart = useSelector(state => state.activeUser.cart);
    const [cartBadge, setCardBadge] = useState(0);
    useEffect(() => {
        let sum = 0;
        cart.forEach(e => {
            sum += e.qty
        })
        setCardBadge(sum)
    }, [cart])

    const favouritesCart = useSelector(state => state.activeUser.favourites);

    const location = useLocation();
    const [toggleMenu, setToggleMenu] = useState(location.pathname);

    useEffect(() => {
        if (location.pathname === '/home') {
            setToggleMenu(false)
        } else {
            setToggleMenu(true)
        }
    }, [location.pathname])

    return (
        <>
            <AppBar position="sticky"
                sx={{
                    bgcolor: "white",
                }}>
                <Box >
                    <StyledToolbar>
                        {toggleMenu ? <IconButton
                            aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={handleClickMenu}
                        >
                            <MenuIcon color="primary" />
                        </IconButton> : null}

                        <div>

                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={menu}
                                open={openMenu}
                                onClose={() => handleClose(setMenu)}
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
                                {categories.map((e, i) =>
                                    <ButtonLinkTwo name={e.name} key={i} startIcon={e.icon} onClick={() =>  {navigate(`/${e.key}`); setMenu(null)}} />
                                )}
                            </Menu>
                        </div>

                        <Link to={'/home'}>
                            <img id="headerLogo"
                                src="https://s13emagst.akamaized.net/layout/bg/images/logo//18/26930.svg"
                                alt="logo"
                            />
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
                                />
                                <span>Профил</span>
                            </Button>


                            <Button sx={{ color: "black" }} onClick={() => { navigate("/favourites") }}>
                                <Badge badgeContent={favouritesCart.length} color="error">
                                    <FavoriteBorderIcon color="primary" />
                                </Badge>
                            </Button>


                            <Button onClick={() => { navigate('/cart') }}>
                                <Badge badgeContent={cartBadge} color="error">
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