import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { Breadcrumb, Layout, Menu } from 'antd';
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Divider, FormControlLabel, Pagination, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router';
import usePagination from './pagination';
import { addToFavourites } from '../../store/activeUserSlice';

export default function AllProductsList() {
  const navigate = useNavigate()
  const categories = useSelector(state => state.categories.categories);
  let { subCategory, globalCategory } = useParams()
  // console.log(subCategory, globalCategory);

  //------------------Data------------------
  const productList = useSelector(state => state.product.product);
  const [sortedProductList, setSortedProductList] = useState(productList.slice().filter(e => e.subCat === subCategory));
  useEffect(() => {
    setSortedProductList(sortedProductList)
  }, [sortedProductList])

  //-------------------Key------------------
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

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
    
    //Logikata e da wzema kopie na masiwa koito pokazwam i da mu priloja vsichki filtri na kup ama ne raboti

    // switch (filtredSorted.sort) {
    //   case 'descendingOrder':
    //     setSortedProductList(sortedProductList.slice().sort((a, b) => b.price - a.price));
    //     break;
    //   case 'ascending':
    //     setSortedProductList(sortedProductList.slice().sort((a, b) => a.price - b.price));
    //     break;
    //   case 'aToZ':
    //     setSortedProductList(sortedProductList.slice().sort());
    //     break;
    //   case 'zToA':
    //     setSortedProductList(sortedProductList.slice().sort((a, b) => b.title - a.title));
    //     break;
    //   // case '':
    //   //   setSortedProductList(productList.slice());
    //   //   break;
    //   // default:
    //   //   setSortedProductList(productList.slice());
    //   //   break;
    // }

    sortedProductList.filter(el => el.price > Number(filtredSorted.fromPrice) || el.price < Number(filtredSorted.toPrice))
    // arrayToFilter.filter(el => el.price > Number(filtredSorted.fromPrice) || el.price < Number(filtredSorted.toPrice))
    // .filter(el => el.averigeReview === 1 || 2 || 3 || 4 || 5)
    // arrayToFilter.filter(el => el.averigeReview === 2)&&
    // arrayToFilter.filter(el => el.averigeReview === 3)&&
    // arrayToFilter.filter(el => el.averigeReview === 4)&&
    // arrayToFilter.filter(el => el.averigeReview === 5)&&
    // .filter(el => el.stock > 0)
    // console.log(arrayToFilter);
    console.log(sortedProductList);




    setSortedProductList(sortedProductList)
  }, [filtredSorted])

  const { Content, Sider } = Layout;
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

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
        {/* {console.log(subCategory)}
        {console.log(sortedProductList)}
        {console.log(sortedProductList.filter(e => e.subCat === subCategory))} */}
        {/* { */}
          
          {/* // sortedProductList.filter(e => e.subCat === subCategory).map(e => */}
            <>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Компютри & Периферия</Breadcrumb.Item>
                <Breadcrumb.Item>Настолни компютри & Монитори</Breadcrumb.Item>
              </Breadcrumb>
              <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }} size="small">
                <InputLabel id="demo-select-small">Сортирай по:</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={filtredSorted.sort}
                  label="Age"
                  onChange={(e) => setFiltredSorted({ ...filtredSorted, sort: e.target.value })}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
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
                    <FormControlLabel control={<Checkbox onChange={(e) => setFiltredSorted({ ...filtredSorted, onStock: e.target.value })} />} label="В наличност" />
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
                            value="0"
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
                          key={uuidv4()}
                          id={e.key}
                          onClick={() => navigate(`/${globalCategory}/${subCategory}/${e.key}`)}/*da se sloji link kum dadenata str s porduct */
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

