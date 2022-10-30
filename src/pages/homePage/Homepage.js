import './Homepage.scss'
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from '../../img/Banner_1.webp'
import bannerImg2 from '../../img/Banner_2.webp'
import bannerImg3 from '../../img/Banner_3.webp'
import bannerImg4 from '../../img/Banner_4.webp'
import ButtonLinkTwo from '../../components/buttons/ButtonLinkTwo';
import { Stack } from '@mui/system';
import ProductCardSlider from '../../components/cardSlider/ProductCardSlider';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Homepage(props) {
    const navigate = useNavigate()
    const handleClose = (seter) => {
        seter(null);
    };
    const [menuComp, setMenuComp] = useState(null);
    const openMenuComp = Boolean(menuComp);
    const handleClickMenuComp = (event) => {
        setMenuComp(event.currentTarget);
    };
    const categories = useSelector(state => state.categories.categories);
    const[categoriesCopy, setCategoriesCopy] = useState(categories.slice())
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
                        {categoriesCopy.map(e => <ButtonLinkTwo 
                        name={e.name} 
                        startIcon={e.icon} 
                        key={e.key} 
                        onClick={() =>  navigate(`/${e.key}`)} 
                        />)}
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
                {categoriesCopy.map((e, i) => <ProductCardSlider title={e.name} key={i} id={e.key}/>)}
            </main>
        </Box >
    )
}