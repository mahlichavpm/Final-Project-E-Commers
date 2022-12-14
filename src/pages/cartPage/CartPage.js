import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../components/buttons/ProductButton";
import CartPageProduct from '../../components/cartPageProduct/CartPageProduct';
import './CartPage.scss'

export default function Cart() {


    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const productList = useSelector(state => state.product.product);
    const cartList = useSelector(state => state.activeUser.cart)
    const renderList = [];
    const navigate = useNavigate();

    (() => {
        for(let i = 0; i < productList.length; i++){
            for(let x = 0; x < cartList.length; x++){
                if(productList[i].key === cartList[x].id){
                    renderList.push(productList[i]);
                }
            }
        }
    })();

    const totalPrice = () => {
        let sum = 0;
        for(let i = 0; i < renderList.length; i++){
            const id = renderList[i].title.replaceAll(' ','')
            const obj = cartList.find(es => es.id === id);
           sum += renderList[i].price * obj.qty; 
        }
        return(sum);
    };

    const [finalPrice,setFinalPrice] = useState(totalPrice());
    const [deliveryPrice,setDeliveryPrice] = useState(10);

    useEffect(() => {
        setFinalPrice(totalPrice())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartList])

    useEffect(() => {
        if(finalPrice >= 100){
            setDeliveryPrice(0)
        } else if(finalPrice < 100){
            setDeliveryPrice(10)
        }
    },[finalPrice])

    const handleOrderFinalizing = () => {
        if(loggedUser){
            navigate('/order')
        }else{
            navigate('/login')
        }
    }

    return (
        renderList.length === 0 ? 
        <div className="pageContainer">
            <h1>Нямате продукти в количката.</h1>
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
            <Typography sx={{marginTop: 2}} variant="h4">
                Количка
            </Typography>
            <Stack
                direction='row'
                spacing={4}
            >
                <Stack
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    {renderList.map((e,id) =>
                  <CartPageProduct
                    img={e.img.src}
                    alt={e.img.alt}
                    title={e.title}
                    description={e.descripton}
                    averigeReview={e.averigeReview}
                    stock={e.stock}
                    price={e.price}
                    key={id}
                    id={e.key}
                  ></CartPageProduct>)}
                </Stack>
                <Stack
                    spacing={2}
                    sx={{
                        border: '1px solid  rgba(34, 34, 34, 0.2)',
                        borderRadius: '8px',
                        width: '400px',
                        padding: '8px',
                        maxHeight: '245px',
                        position: 'sticky',
                        top: '133px',
                        backgroundColor: 'white',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'custom.main',
                            fontWeight: 'bold'
                        }}
                    >
                        Информация за поръчката
                    </Typography>
                    <Stack>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Typography
                                variant="subtitle"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                Всички продукти:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                {finalPrice.toFixed(2)} лв.
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Typography
                                variant="subtitle"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                Цена за доставка:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                {deliveryPrice} лв.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'custom.main',
                            fontWeight: 'bold'
                        }}
                    >
                        Общо: {(finalPrice + deliveryPrice).toFixed(2)} лв.
                    </Typography>
                    <Button onClick={() => {handleOrderFinalizing()}} name='Продължи' />
                </Stack>
            </Stack>
        </Stack>
    )
}