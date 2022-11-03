import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { Layout } from 'antd';
import ProductCard from '../../components/productCard/ProductCard';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Checkbox, FormControlLabel, Link, Pagination, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router';
import usePagination from './Pagination';

export default function AllProductsList() {
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.categories);
  let { subCategory, globalCategory } = useParams();
 
  //------------------Data------------------
  const productList = useSelector(state => state.product.product);
  const [sortedProductList, setSortedProductList] = useState(productList.slice().filter(e => e.subCat === subCategory));

  //--------------Pagination----------------
  let [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5)
  const PER_PAGE = perPage;

  const count = Math.ceil(sortedProductList.length / PER_PAGE);
  const _DATA = usePagination(sortedProductList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // --------------Sort/Filter---------------
  const [filtredSorted, setFiltredSorted] = useState({
    sort: '0',
    fromPrice: '',
    toPrice: '',
    onStock: false,
    review: 0
  })

  useEffect(() => {

    let filtredSortedProductList = productList.slice().filter(e => e.subCat === subCategory)
    filtredSortedProductList = filtredSortedProductList.filter(el =>
      (filtredSorted.onStock ? el.stock !== 0 : true) &&
      (filtredSorted.review > 0 ? el.averigeReview === Number(filtredSorted.review) : true) &&
      (filtredSorted.fromPrice && filtredSorted.toPrice ? el.price > Number(filtredSorted.fromPrice) && el.price < Number(filtredSorted.toPrice) : true) &&
      (filtredSorted.fromPrice ? el.price > Number(filtredSorted.fromPrice) : true) &&
      (filtredSorted.toPrice ? el.price < Number(filtredSorted.toPrice) : true)
    ).sort((a, b) => {
      switch(filtredSorted.sort) {
        case 'descendingOrder':
          return b.price - a.price;
        case 'ascending':
          return a.price - b.price;
        case 'aToZ':
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        case 'zToA':
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        case '':
          return false;
        default:
          return false;
      }
    })

    setSortedProductList(filtredSortedProductList)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtredSorted])

  const { Content } = Layout;
  const globalCategoryName = categories.filter(e => e.key === globalCategory)[0]

  return (
    <>
      <Stack
        sx={{
          maxWidth: '1240px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
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
          <Typography color="custom.main">{globalCategoryName.subCategory.filter(e => e.key === subCategory)[0].name}</Typography>
        </Breadcrumbs>
        <Stack sx={{ width: '100%', height: 'min-height', marginBottom: '16px' }} direction='row' justifyContent='flex-end'>
          {/* -----------SORT------------------- */}
          <FormControl sx={{ m: 1, minWidth: 180, maxWidth: 200, }} size="small" variant="standard">
            <InputLabel id="demo-select-small">Сортирай по:</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={filtredSorted.sort}
              onChange={(e) => setFiltredSorted({ ...filtredSorted, sort: e.target.value })}
            >

              <MenuItem value='0'><em>По подразбиране</em></MenuItem>
              <MenuItem value={'aToZ'}>от А към Я</MenuItem>
              <MenuItem value={'zToA'}>от Я към А</MenuItem>
              <MenuItem value={'ascending'}>Цена възходящ ред</MenuItem>
              <MenuItem value={'descendingOrder'}>Цена низходящ ред</MenuItem>
            </Select>
          </FormControl>
        {/* ---------------Product per page--------------- */}
          <FormControl sx={{ m: 1, minWidth: 180, maxWidth: 200, }} size="small" variant="standard">
            <InputLabel id="demo-select-small">Брой:</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
        >
          <Stack
            spacing={2}
          >
            {/* ------onStock Filter--------- */}
            <Stack
              sx={{
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '8px',
                height: 'min-content'
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => setFiltredSorted({ ...filtredSorted, onStock: !filtredSorted.onStock })}
                  />
                }
                label="В наличност"
              />
            </Stack>
            {/* ------Price Filter--------- */}
            <Stack
              sx={{
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '8px',
                height: 'min-content'
              }}
            >
              <Typography variant='h6'>
                Цена
              </Typography>
              <Stack direction='row' spacing={2}>
                <TextField
                  type='number'
                  InputProps={{ inputProps: { min: 0 } }}
                  sx={{ width: '100%' }}
                  id="filled-basic"
                  onInput={(e) => setFiltredSorted({ ...filtredSorted, fromPrice: e.target.value })}
                  label="От"
                  variant="filled"
                  size='small'
                />
                <TextField type='number' InputProps={{ inputProps: { min: 0 } }} sx={{ width: '100%' }} id="filled-basic" onInput={(e) => setFiltredSorted({ ...filtredSorted, toPrice: e.target.value })} label="До" variant="filled" size='small' />
              </Stack>
            </Stack>
            {/* ------Review Filter--------- */}
            <Stack
              sx={{
                width: '280px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '8px',
                height: 'min-content'
              }}
            >
              <Typography variant='h6'>
                Оценка
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e) => setFiltredSorted({ ...filtredSorted, review: e.target.value })}
                >
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label='Всички'
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label={<Rating readOnly defaultValue={1} size='small' />}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label={<Rating readOnly defaultValue={2} size='small' />}
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label={<Rating readOnly defaultValue={3} size='small' />}
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label={<Rating readOnly defaultValue={4} size='small' />}
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label={<Rating readOnly defaultValue={5} size='small' />}
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
          {/* ------Products--------- */}
          <Stack>
            <Content style={{ minHeight: 280, }}>
              <div className='contentContainer'>
                {_DATA.currentData().map(e =>
                  <ProductCard
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={e.key}
                    id={e.key}
                    onCardClick={() => navigate(`/${globalCategory}/${subCategory}/${e.key}`)}
                  ></ProductCard>)}
              </div>
            </Content>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: '100%',
            marginTop: '24px'
          }}
          direction='row'
          justifyContent='center'
        >
          <Pagination count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => handleChange(e, page)} />
        </Stack>
      </Stack>
    </>
  );
}

