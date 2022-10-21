import { AppBar, CardMedia, Divider, IconButton, ImageListItem, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "@emotion/styled";
import Search from './Search';
import ButtonLink from './ButtonLinkOne';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import React from "react";
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HistoryIcon from '@mui/icons-material/History';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuItemProduct from "./MenuItemProduct";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const StyledNav = styled(Box)({
    padding: '5px 24px',
    backgroundImage: 'linear-gradient(to right, rgb(255, 29, 37) 5%, rgb(160, 50, 140) 35%, rgb(112, 64, 164) 45%, rgb(67, 89, 199) 55%, rgb(0, 130, 230) 70%);',
    justifyContent: 'space-between',
    display: 'flex'
})

export default function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
    return (
        <AppBar position="sticky"
            sx={{
                bgcolor: "white",

            }}>
            <Box>
                <StyledToolbar>
                    <Link to={'/home'}>
                        <img id="headerLogo" src="https://s13emagst.akamaized.net/layout/bg/images/logo//18/26930.svg" alt="logo" />
                    </Link>
                    <Search />
                    <Stack direction="row"
                        alignItems="center"
                        spacing={4}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "flex",
                                lg: "flex",
                                xl: "flex"
                            }
                        }}>
                        <Avatar
                            sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}
                            id='avatar'
                            onMouseEnter={handleClick}
                        >Sl</Avatar>

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
                            <MenuItem>
                                <Avatar /> Профил
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <FavoriteBorderIcon fontSize="small" />
                                </ListItemIcon>
                                Любими
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                Количка
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <HistoryIcon fontSize="small" />
                                </ListItemIcon>
                                Моите поръчки
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <StarBorderIcon fontSize="small" />
                                </ListItemIcon>
                                Ревюта
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>

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
                            <MenuItemProduct/>
                            <MenuItemProduct/>
                            <MenuItemProduct/>
                        </Menu>

                        <Badge badgeContent={5} color="alert">
                            <ShoppingCartOutlinedIcon color="primary" />
                        </Badge>
                    </Stack>
                </StyledToolbar>
            </Box>
            <Box>
                <StyledNav >
                    <Stack spacing={4} direction='row'>
                        <ButtonLink href='#text-buttons' name='еМАG кредитна карта от Fibank' />
                        <ButtonLink href='#text-buttons' name='eCREDIT' />
                        <ButtonLink href='#text-buttons' name='easybox в София' />
                        <ButtonLink href='#text-buttons' name='Виж повече' />
                    </Stack>
                    <ButtonLink href='#text-buttons' name='eMAG Help' startIcon={<HeadphonesOutlinedIcon />} />
                </StyledNav>
            </Box>
        </AppBar >
    )
}