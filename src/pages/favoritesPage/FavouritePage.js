import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartPageProduct from "../../components/cartPageProduct/cartPageProduct";
import ProductCard from "../../components/productCard/ProductCard";

export default function FavouritePage (props) {

    const users = JSON.parse(localStorage.getItem('users'));
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const activeUser = users.find(e => e.username === loggedUser);
    const productList = useSelector(state => state.product.product);
    const favouriteList = activeUser.favourites;
    const renderList = [];

    const getLikedProducts = () => {
        for(let i = 0; i < productList.length; i++){
            for(let x = 0; x < favouriteList.length; x++){
                if(productList[i].key === favouriteList[x]){
                    renderList.push(productList[i]);
                }
            }
        }
        console.log('zdr');
    }

    getLikedProducts();

    const removeItem = (key) => {
        let id = key;
        console.log((renderList));
        const index = renderList.findIndex(e => e.id);
        renderList.splice(index,1);
        console.log((renderList));
    }


    return(
        <Stack
        sx={{
            maxWidth: '1240px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '20px',
            paddingRight: '20px',
            position: 'relative',
            backgroundColor: 'primary.background'
        }}
        spacing={4}
    >
        <Typography sx={{marginTop: 2}} variant="h4">
            Любими продукти
        </Typography>
            <Stack
                sx={{
                    width: '100%',
                }}
            >
            <div className='contentContainer'>
                {renderList.map(e =>
                  <CartPageProduct
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={e.key}
                    removeItem={() => {removeItem(e.key)}}
                  ></CartPageProduct>)}
              </div>
            </Stack>
    </Stack>
    )
}