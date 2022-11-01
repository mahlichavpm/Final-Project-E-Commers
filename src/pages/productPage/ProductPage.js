import "./ProductPage.scss";
import { Box, Container } from "@mui/system";
import ProductButton from "../../components/buttons/ProductButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Breadcrumbs, Link, Rating, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';
import Carousel from "react-material-ui-carousel";
import ProductCard from "../../components/productCard/ProductCard";

export default function ProductPage() {
  const productList = useSelector(state => state.product.product);
  let { key, subCategory, globalCategory } = useParams();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.categories);
  const globalCategoryName = categories.filter(e => e.key === globalCategory)[0];
  const [sortedProductList, setSortedProductList] = useState(productList.slice()
    .filter(e => e.subCat === subCategory)
  );

  // ---------Slider------------
  const [productSlider, setProductSlider] = useState(productList.filter(e => e.globalCat === globalCategory).splice(0, 20));
  const [sliderPage, setSliderPage] = useState([
    productSlider.slice().splice(0, 4),
    productSlider.slice().splice(4, 4),
    productSlider.slice().splice(8, 4),
    productSlider.slice().splice(12, 4),
    productSlider.slice().splice(16, 4)
  ]);

  const [selectedImage, setSelectedImage] = useState(`${sortedProductList.filter(e => e.key === key)[0].img.src}`);

  return (
    <>
      {sortedProductList.filter(e => e.key === key).map((e, i) =>
        <Stack
          sx={{
            maxWidth: '1240px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
          key={i}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: '12px', marginBottom: '24px' }}>
            <Link
              sx={{ '&:hover': { color: 'primary.main' } }}
              underline="none"
              color="custom.light"
              onClick={() => navigate(`/home`)}
            >
              Начало
            </Link>
            <Link
              sx={{ '&:hover': { color: 'primary.main' } }}
              underline="none"
              color="custom.light"
              onClick={() => navigate(`/${globalCategory}`)}
            >
              {globalCategoryName.name}
            </Link>
            <Link
              sx={{ '&:hover': { color: 'primary.main' } }}
              underline="none"
              color="custom.light"
              onClick={() => navigate(`/${globalCategory}/${subCategory}`)}
            >
              {globalCategoryName.subCategory.filter(e => e.key === subCategory)[0].name}
            </Link>
            <Typography color="custom.main">{e.title}</Typography>
          </Breadcrumbs>
          <Container maxWidth="xl">
            <Box sx={{ minHeight: "100vh" }}>
              <Typography color="custom.main" variant='h4' sx={{ margin: '0 0 15px 0' }}>{e.title}</Typography>
              <Stack direction='row' spacing={4}>
                <Stack spacing={2}>
                  <div className="imgGalery">
                    <img src={selectedImage || e.img.src} width='400' alt="qnko" />
                  </div>
                  <Stack direction='row' spacing={2} sx={{ width: '400px', overflowX: 'auto', }}>
                    <img src={e.img.src} className={e.img.src === selectedImage ? 'selctedImage' : ''} onClick={() => { setSelectedImage(e.img.src) }} width='80' alt="qnko" />
                    {e.img.src1 ? <img src={e.img.src1} className={e.img.src1 === selectedImage ? 'selctedImage' : ''} onClick={() => { setSelectedImage(e.img.src1) }} width='80' alt="qnko" /> : <></>}
                    {e.img.src2 ? <img src={e.img.src2} className={e.img.src2 === selectedImage ? 'selctedImage' : ''} onClick={() => { setSelectedImage(e.img.src2) }} width='80' alt="qnko" /> : <></>}
                    {e.img.src3 ? <img src={e.img.src3} className={e.img.src3 === selectedImage ? 'selctedImage' : ''} onClick={() => { setSelectedImage(e.img.src3) }} width='80' alt="qnko" /> : <></>}
                    {e.img.src4 ? <img src={e.img.src4} className={e.img.src4 === selectedImage ? 'selctedImage' : ''} onClick={() => { setSelectedImage(e.img.src4) }} width='80' alt="qnko" /> : <></>}
                  </Stack>
                </Stack>
                <Stack spacing={2}>
                  <Stack sx={{
                    backgroundColor: 'white',
                    padding: '12px',
                    borderRadius: '12px'
                  }}>
                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
                      <LocalShippingTwoToneIcon />
                      <Typography variant="h6">Доставка в: </Typography>
                    </Stack>
                    <Typography variant='subtitle2' color='custom.light'>София-Град (Столична)</Typography>
                    <Typography variant='h6' color='custom.green'>Безплатна</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}
                    sx={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: '12px',
                      borderRadius: '12px'
                    }}>
                    <Typography variant='h6' color='custom'>Рейтинг:</Typography>
                    <Rating name="half-rating" readOnly defaultValue={e.averigeReview} size='medium' />
                  </Stack>

                  <Stack direction='row' spacing={1}
                    sx={{
                      backgroundColor: 'white',
                      padding: '12px',
                      borderRadius: '12px'
                    }}>
                    <Typography variant='h6' color='custom'>Ползи:</Typography>
                    <Stack>
                      <Typography variant='subtitle2' color='custom.light'>Проверка на пратката</Typography>
                      <Typography variant='subtitle2' color='custom.light'>30 дни право на връщане</Typography>
                      <Typography variant='subtitle2' color='custom.light'>Включена гаранция: 24 месеца</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '12px',
                    borderRadius: '12px',
                    width: '300px',
                    height: 'min-content'
                  }}
                  spacing={2}
                >
                  <Typography variant='h6' color='custom.green'>в наличност</Typography>
                  <Stack direction='row' spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='subtitle1' color='custom.main'>Цена:</Typography>
                    <Typography variant='h5' color='alert.main'>{e.price} лв.</Typography>
                  </Stack>
                  <ProductButton name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
                  <ProductButton startIcon={<FavoriteBorderIcon color="custom.light" />} name={'Добави в любими'} />
                </Stack>
              </Stack>
              <Stack
                sx={{
                  backgroundColor: 'white',
                  padding: '12px',
                  borderRadius: '12px',
                  width: '100%',
                  height: 'min-content',
                  margin: '36px 0'
                }}
              >
                <Typography variant="h6" color="custom.main">Описание:</Typography>
                <Typography variant='subtitle1' color='custom.light'>{e.descripton}</Typography>
              </Stack>
              {/* Slider */}
              <Stack spacing={2} sx={{ marginTop: '36px' }}>
                <Typography variant='h4'>Сходни продукти</Typography>
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
                  indicatorContainerProps={{
                    style: {
                      marginTop: '24px',
                    }

                  }}
                  fullHeightHover={false}
                  navButtonsWrapperProps={{
                    style: {
                      padding: '50px'

                    }
                  }}
                  navButtonsProps={{
                    style: {
                      backgroundColor: 'cornflowerblue',
                      borderRadius: 20,
                      next: {
                        marginRight: '60px'
                      }
                    },
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
            </Box>
          </Container>
          {/* </div> */}
        </Stack>)}
    </>
  );
}
