import React from 'react';
import 'antd/dist/antd.min.css';
import './AllProductsList.scss'
import { DollarOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import SortIcon from '@mui/icons-material/Sort';
import Header from '../../components/header/Header';
import ProductCard from '../../components/productCard/ProductCard';


export default function AllProductsList () {

const { Content,Sider } = Layout;

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

  return (
    <>
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Компютри & Периферия</Breadcrumb.Item>
          <Breadcrumb.Item>Настолни компютри & Монитори</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              style={{ height: '100%' }}
              items={items}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className='contentContainer'> 
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
    </>
  );
} 
