import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from './ProductCard';
import './ProductCardSlider.scss'

export default function ProductCardSlider(props) {
    return (
        <div className='product-card-slider-component'>
            <Typography variant='h1'>Stava</Typography>
            <Carousel interval={null} pause={false} variant='dark' className='ProductCardSlider' indicators={false}>
                <Carousel.Item>
                    <Stack direction='row' spacing={2}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Stack>
                </Carousel.Item>

                <Carousel.Item>
                    <Stack direction='row' spacing={2}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Stack>
                </Carousel.Item>

                <Carousel.Item>
                    <Stack direction='row' spacing={2}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Stack>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

