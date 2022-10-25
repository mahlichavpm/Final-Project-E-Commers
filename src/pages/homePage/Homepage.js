import './Homepage.scss'
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from '../../img/Banner_1.webp'
import bannerImg2 from '../../img/Banner_2.webp'
import bannerImg3 from '../../img/Banner_3.webp'
import bannerImg4 from '../../img/Banner_4.webp'
import ButtonLinkTwo from '../../components/buttons/ButtonLinkTwo';
import { Stack } from '@mui/system';
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
import ProductCardSlider from '../../components/cardSlider/ProductCardSlider';
import { Link } from 'react-router-dom';
import { Box, Menu, TextField, Typography } from '@mui/material';
import React from 'react';


export default function Homepage(props) {
    const handleClose = (seter) => {
        seter(null);
    };
    const [menuComp, setMenuComp] = React.useState(null);
    const openMenuComp = Boolean(menuComp);
    const handleClickMenuComp = (event) => {
        setMenuComp(event.currentTarget);
    };
    return (
        <Box>
            <main className='homepageWrapper'>
                <Stack direction='row' sx={{ boxShadow: '0 2px 12px -4px rgb(0 0 0 / 10%)' }}>
                    <Stack alignItems='flex-start'
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "flex",
                                xl: "flex"
                            },
                            backgroundColor: 'white',
                        }}>
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
                    </Stack>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Stack>
                <ProductCardSlider />
                <ProductCardSlider />
            </main>
        </Box >
    )
}