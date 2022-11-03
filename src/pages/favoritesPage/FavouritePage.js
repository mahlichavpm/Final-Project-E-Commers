import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";

export default function FavouritePage () {

    const productList = useSelector(state => state.product.product);
    const favouriteList = useSelector(state => state.activeUser.favourites);
    const renderList = [];

    (() => {
        for(let i = 0; i < productList.length; i++){
            for(let x = 0; x < favouriteList.length; x++){
                if(productList[i].key === favouriteList[x]){
                    renderList.push(productList[i]);
                }
            }
        }
    })();
  

    return(
        renderList.length === 0 ? 
        <div className="pageContainer">
            <h1>Нямате любими продукти.</h1>
        </div>
        :
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
        <Typography sx={{marginTop: 4}} variant="h4">
            Любими продукти
        </Typography>
            <Stack
                sx={{
                    width: '100%',
                }}
            >
            <div className='contentContainer'>
                {renderList.map((e,id) =>
                  <ProductCard
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={id}
                    id={e.key}
                  ></ProductCard>)}
              </div>
            </Stack>
    </Stack>
    )
}