import React from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { DollarOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import SortIcon from '@mui/icons-material/Sort';
import ProductCard from '../../components/productCard/ProductCard';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';


export default function AllProductsList() {

  const { Content, Sider } = Layout;

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


  const items = [
    getItem('По цена', 'sub1', <DollarOutlined />, [
      getItem('Диапазон:', 'g1', null, [getItem('<500лв.', '1'), getItem('> 500лв.', '2')], 'group'),
    ]),
    getItem('По марка', 'sub2', <SortIcon />, [
      getItem('Марки:', 'g1', null, [getItem('Apple', '3'), getItem('Samsung', '4')], 'group'),
    ]),
  ];
  const productList = useSelector(state => state.product.product);

  return (
    <>
      {/* <Stack
        sx={{
          maxWidth: '1240px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          position: 'relative',
          backgroundColor: 'primary.background'
        }}
        spacing={2}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Компютри & Периферия</Breadcrumb.Item>
          <Breadcrumb.Item>Настолни компютри & Монитори</Breadcrumb.Item>
        </Breadcrumb>
        <Typography variant="h4">
          Количка за пазаруване
        </Typography>
        <Stack
          direction='row'
          spacing={2}
        >
          <Stack
            sx={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: '8px',
              padding: '8px'
            }}
          >
            <Typography variant="h4">
              Филтри
            </Typography>
          </Stack>
          <Stack
          spacing={2}
          direction='row'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
          >
            {/* <div className='contentContainer'> */}
              {/*</>{productList.map(e =>
                <ProductCard
                  img={e.img.src}
                  alt={e.img.alt}
                  title={e.title}
                  description={e.descripton}
                  averigeReview={e.averigeReview}
                  stock={e.stock}
                  price={e.price}
                  key={e.key}
                ></ProductCard>)}
            {/* </div> */}
          {/*</Stack>
        </Stack>
      </Stack> */}
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Компютри & Периферия</Breadcrumb.Item>
            <Breadcrumb.Item>Настолни компютри & Монитори</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider 
              className="site-layout-background" 
              width={200}
              
            >
               <Menu
                mode="inline"
                style={{ height: '100%' }}
                items={items}
              />
              
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className='contentContainer'>
                {productList.map(e =>
                  <ProductCard
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={e.key}
                    onClick={() => {console.log(e.key);}}
                    onClickFav={() => {console.log(e.key);}}
                  ></ProductCard>)}
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
} 
