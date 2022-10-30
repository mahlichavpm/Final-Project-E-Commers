import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { Breadcrumb, Layout, Menu } from 'antd';
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Checkbox, Divider, FormControlLabel, Link, Pagination, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router';
import usePagination from './pagination';
import { addToFavourites } from '../../store/activeUserSlice';
import { PropaneSharp } from '@mui/icons-material';

export default function AllProductsList() {
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.categories);
  let { subCategory, globalCategory } = useParams();
  // console.log(subCategory, globalCategory);

  //------------------Data------------------
  const productList = useSelector(state => state.product.product);
  const [sortedProductList, setSortedProductList] = useState(productList.slice().filter(e => e.subCat === subCategory));
  // useEffect(() => {
  //   setSortedProductList(sortedProductList)
  // }, [sortedProductList])

  //--------------Pagination----------------
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(sortedProductList.length / PER_PAGE);
  // console.log(sortedProductList);
  const _DATA = usePagination(sortedProductList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // --------------Sort/Filter---------------
  const [filtredSorted, setFiltredSorted] = useState({
    sort: '',
    fromPrice: '',
    toPrice: '',
    onStock: false,
    review: 0
  })

  useEffect(() => {

    let filtredSortedProductList = sortedProductList.slice()

    // switch (filtredSorted.sort) {
    //   case 'descendingOrder':
    //     filtredSortedProductList.sort((a, b) => b.price - a.price);
    //     break;
    //   case 'ascending':
    //     filtredSortedProductList.sort((a, b) => a.price - b.price);
    //     break;
    //   case 'aToZ':
    //     filtredSortedProductList.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    //     break;
    //   case 'zToA':
    //     filtredSortedProductList.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
    //     break;
    //   case '':
    //     filtredSortedProductList = productList.filter(e => e.subCat === subCategory);
    //     break;
    //   default:
    //     filtredSortedProductList = productList.filter(e => e.subCat === subCategory);
    //     break;
    // }

    filtredSortedProductList = filtredSortedProductList.filter(el =>
      (filtredSorted.onStock ? el.stock !== 0 : true) &&
      (filtredSorted.review > 0 ? el.averigeReview === Number(filtredSorted.review) : true) &&
      (filtredSorted.fromPrice && filtredSorted.toPrice ? el.price > Number(filtredSorted.fromPrice) && el.price < Number(filtredSorted.toPrice) : true) &&
      (filtredSorted.fromPrice || filtredSorted.toPrice ? el.price > Number(filtredSorted.fromPrice) || el.price < Number(filtredSorted.toPrice) : true)
    ).sort((a, b) => {switch (filtredSorted.sort) {
      case 'descendingOrder':
        return b.price - a.price;
      case 'ascending':
        return a.price - b.price;
      case 'aToZ':
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      case 'zToA':
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
      // case '':
      //   return  
    }})



    console.log(filtredSorted.review);
    console.log(filtredSortedProductList);

    setSortedProductList(filtredSortedProductList)
  }, [filtredSorted])

  const { Content, Sider } = Layout;
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const globalCategoryName = categories.filter(e => e.key === globalCategory)[0]

  const addToFavourite = (key) => {
    dispatch(addToFavourites({ key }))
  }

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
        <>
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
          <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Сортирай по:</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={filtredSorted.sort}
              label="Age"
              onChange={(e) => setFiltredSorted({ ...filtredSorted, sort: e.target.value })}
            >
              {/* <MenuItem value=''>
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={'aToZ'}>от А към З</MenuItem>
              <MenuItem value={'zToA'}>от З към А</MenuItem>
              <MenuItem value={'ascending'}>Възходящ ред</MenuItem>
              <MenuItem value={'descendingOrder'}>Низходящ ред</MenuItem>
            </Select>
          </FormControl>
          <Stack
            direction='row'
            spacing={2}
          >
            <Stack
              spacing={2}
              sx={{
                width: '300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '8px'
              }}
            >
              <Typography variant='h5'>
                Филтри
              </Typography>
              <Divider />
              {/* ------onStock Filter--------- */}
              <Stack>
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
              <Stack>
                <Typography variant='h6'>
                  Цена
                </Typography>
                <Stack direction='row' spacing={2}>
                  <TextField
                    sx={{ width: '100%' }}
                    id="filled-basic"
                    onInput={(e) => setFiltredSorted({ ...filtredSorted, fromPrice: e.target.value })}
                    label="От"
                    variant="filled"
                    size='small'
                  />
                  <TextField sx={{ width: '100%' }} id="filled-basic" onInput={(e) => setFiltredSorted({ ...filtredSorted, toPrice: e.target.value })} label="До" variant="filled" size='small' />
                </Stack>
                {/* ------Review Filter--------- */}
                <Stack>
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
                        sx={{ width: '100%' }}
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
            </Stack>
            {/* ------Products--------- */}
            <Stack>
              <Content style={{ padding: '0 24px', minHeight: 280, width: 952 }}>
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
                    // onClickFav={() => { addToFavourite(e.key) }}
                    ></ProductCard>)}
                </div>
              </Content>
            </Stack>
          </Stack>
          <Pagination count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => handleChange(e, page)} />
        </>
      </Stack>
    </>
  );
}

