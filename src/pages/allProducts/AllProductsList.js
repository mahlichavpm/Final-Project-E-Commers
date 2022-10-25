import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { DollarOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import SortIcon from '@mui/icons-material/Sort';
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites } from '../../store/activeUserSlice';
import { Checkbox, Divider, FormControlLabel, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AllProductsList() {
  const productList = useSelector(state => state.product.product);

  const [sort, setSort] = React.useState('');
  const [sortedProductList, setSortedProductList] = useState(productList.slice());

  const handleChange = (event) => {
    setSort(event.target.value);
    switch (event.target.value) {
      case 'descendingOrder':
        setSortedProductList(productList.slice().sort((a, b) => a.price - b.price));
        break;
      case 'ascending':
        setSortedProductList(productList.slice().sort((a, b) => b.price - a.price));
        break;
      case 'aToZ':
        setSortedProductList(productList.slice().sort((a, b) => a.title - b.title));
        break;
      case 'zToA':
        setSortedProductList(productList.slice().sort((a, b) => b.title - a.title));
        break;
      case '':
        setSortedProductList(productList.slice());
        break;
      default:
        setSortedProductList(productList.slice());
        break;
    }
  };

  const { Content, Sider } = Layout;

  // function getItem(label, key, icon, children, type) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     type,
  //   };
  // }


  // const items = [
  //   getItem('По цена', 'sub1', <DollarOutlined />, [
  //     getItem('Диапазон:', 'g1', null, [getItem('<500лв.', '1'), getItem('> 500лв.', '2')], 'group'),
  //   ]),
  //   getItem('По марка', 'sub2', <SortIcon />, [
  //     getItem('Марки:', 'g1', null, [getItem('Apple', '3'), getItem('Samsung', '4')], 'group'),
  //   ]),
  // ];

  let fromPrice = '';
  let toPrice = '';

  const onInputPriceFrom = (e) => {
    fromPrice += e.target.value;

    if (toPrice) {
      setSortedProductList(productList.slice().filter(el => el.price > Number(fromPrice) && el.price < Number(toPrice)))
    } else if (fromPrice === '') {
      setSortedProductList(productList.slice());
    } else {
      setSortedProductList(productList.slice().filter(el => el.price > Number(fromPrice)))
    }
  }

  // const items = [
  //   getItem('По цена', 'sub1', <DollarOutlined />, [
  //     getItem('Диапазон:', 'g1', null, [getItem('<500лв.', '1'), getItem('> 500лв.', '2')], 'group'),
  //   ]),
  //   getItem('По марка', 'sub2', <SortIcon />, [
  //     getItem('Марки:', 'g1', null, [getItem('Apple', '3'), getItem('Samsung', '4')], 'group'),
  //   ]),
  // ];
  // const productList = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const onInputPriceTo = (e) => {
    toPrice += e.target.value

    if (fromPrice) {
      setSortedProductList(productList.slice().filter(el => el.price > Number(fromPrice) && el.price < Number(toPrice)))
    } else if (toPrice === '') {
      setSortedProductList(productList.slice());
    } else {
      setSortedProductList(productList.slice().filter(el => el.price < Number(toPrice)))
    }
  }

  const [checked, setChecked] = React.useState(true);
  const onStock = (e) => {
    setChecked(!checked);
    if (checked) {
      console.log('stava');
      setSortedProductList(productList.slice().filter(el => el.stock > 0))
    } else {
      setSortedProductList(productList.slice());
    }
  }

  const handleReviewChange = (e => {
    switch (e.target.value) {
      case '0':
        setSortedProductList(productList.slice());
        break;
      case '1':
        setSortedProductList(productList.slice().filter(el => el.averigeReview === 1));
        break;
      case '2':
        setSortedProductList(productList.slice().filter(el => el.averigeReview === 2));
        break;
      case '3':
        setSortedProductList(productList.slice().filter(el => el.averigeReview === 3));
        break;
      case '4':
        setSortedProductList(productList.slice().filter(el => el.averigeReview === 4));
        break;
      case '5':
        setSortedProductList(productList.slice().filter(el => el.averigeReview === 5));
        break;
      default:
        break;
    }
  })

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  
  const addToFavourite = (key) => {
    dispatch(addToFavourites({key,loggedUser}))
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
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Компютри & Периферия</Breadcrumb.Item>
          <Breadcrumb.Item>Настолни компютри & Монитори</Breadcrumb.Item>
        </Breadcrumb>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 200 }} size="small">
          <InputLabel id="demo-select-small">Сортирай по:</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={sort}
            label="Age"
            onChange={(e) => handleChange(e)}
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
              <FormControlLabel control={<Checkbox onChange={onStock} />} label="В наличност" />
            </Stack>
            {/* ------Price Filter--------- */}
            <Stack>
              <Typography variant='h6'>
                Цена
              </Typography>
              <Stack direction='row' spacing={2}>
                <TextField sx={{ width: '100%' }} id="filled-basic" onInput={onInputPriceFrom} label="От" variant="filled" size='small' />
                <TextField sx={{ width: '100%' }} id="filled-basic" onInput={onInputPriceTo} label="До" variant="filled" size='small' />
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
                    onChange={handleReviewChange}
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
                {sortedProductList.map(e =>
                  <ProductCard
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={e.key}
                    onClick={() => {console.log(e.key);/*da se sloji link kum dadenata str s porduct */}}
                    onClickFav={() => {addToFavourite(e.key)}}
                  ></ProductCard>)}
              </div>
            </Content>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

{/* <Layout className="site-layout-background" style={{ padding: '24px 0' }}> */ }
{/* <Sider
              className="site-layout-background"
              width={248}

            >
              <Menu
                mode="inline"
                style={{ height: '100%' }}
                items={items}
              />

              

            </Sider> */}
