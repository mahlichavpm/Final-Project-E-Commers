import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ProductCard from "../../components/productCard/ProductCard";

export default function ProductPageSlider() {
    const navigate = useNavigate();
    const productList = useSelector(state => state.product.product);
    let { key, subCategory, globalCategory } = useParams();
    const [productSlider, setProductSlider] = useState(productList.filter(e => e.globalCat === globalCategory).splice(0, 20));
    const [sliderPage, setSliderPage] = useState([
        productSlider.slice().splice(0, 4),
        productSlider.slice().splice(4, 4),
        productSlider.slice().splice(8, 4),
        productSlider.slice().splice(12, 4),
        productSlider.slice().splice(16, 4)
    ]);
   
    return (
        <Stack spacing={2} sx={{ marginTop: '36px' }}>
            <Typography variant='h4'>Сходни продукти</Typography>
            <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation='slide'
                sx={{
                    minWidth: '1200px'
                }}
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
                fullHeightHover={false}
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