import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@mui/material'
import ProductCard from '../productCard/ProductCard';
import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './ProductCardSlider.scss'

export default function Example(props) {
    const productList = useSelector(state => state.product.product);
    const [productSlider, setProductSlider] = useState(productList.filter(e => e.globalCat === props.id).splice(0, 20));
    const [sliderPage, setSliderPage] = useState([
        productSlider.slice().splice(0, 4),
        productSlider.slice().splice(4, 4),
        productSlider.slice().splice(8, 4),
        productSlider.slice().splice(12, 4),
        productSlider.slice().splice(16, 4)
    ]);

    const navigate = useNavigate()

    return (
        <Stack spacing={2} sx={{ marginTop: '36px' }}>
            <Typography variant='h4'>{props.title || "Stava"}</Typography>
            <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation='slide'
                indicatorIconButtonProps={{
                    style: {
                        width: '18px',
                        height: '18px',
                        color: '#888',
                        borderRadius: '50%',
                        textAlign: 'center',
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#0082e6',
                    }
                }}
            >
                {sliderPage.map((e, i) =>
                    <Stack direction='row' spacing={2} key={i}>
                        {e.map(e => <ProductCard
                            img={e.img.src}
                            alt={e.img.alt}
                            title={e.title}
                            description={e.descripton}
                            averigeReview={e.averigeReview}
                            stock={e.stock}
                            price={e.price}
                            key={e.key}
                            id={e.key}
                            onCardClick={() => navigate(`/${e.globalCat}/${e.subCat}/${e.key}`)}
                        ></ProductCard>)}
                    </Stack>
                )}
            </Carousel>
        </Stack>
    )
}
