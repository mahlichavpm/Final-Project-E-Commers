import { Button, CardActions, CardContent, CardMedia, IconButton, Input, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeItemFromCart, removeQuantity } from "../../store/activeUserSlice";

export default function CartPageProduct(props) {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.activeUser.cart);

    const [quantity,setQuantity] = useState(null)

    useEffect(() => {
       const obj = cart.find(e => e.id === props.id)
       setQuantity(obj.qty)
    },[cart])
    
    console.log(quantity);
    

        const removeItem = (id) => {
            dispatch(removeItemFromCart(id))
        }

        const increment = (id) => {
            dispatch(addQuantity(id))
        }
        const decrement = (id) => {
            dispatch(removeQuantity(id))
        }

        return (

            <Stack
                direction='row'
                sx={{
                    border: '1px solid  rgba(34, 34, 34, 0.2)',
                    borderRadius: '8px',
                    width: '100%',
                    backgroundColor: 'white'
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                    alt={props.alt || "Mnogo bega"}
                    sx={{ maxWidth: '300px' }}
                />
                <CardContent
                    sx={{
                        width: '100%',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title || "Има Проблем!"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description || 'Има Проблем V2'}
                    </Typography>
                    <Typography
                            variant='h6'
                            color='primary'
                            sx={{
                                width: '100%',
                                overflow: 'hidden'
                            }}
                        >
                           Ед. цена: {props.price || '20000лв'}
                        </Typography>
                </CardContent>
                <CardActions>
                    <Stack
                        alignItems='center'
                    >
                        
                        <Typography
                            variant='h6'
                            color='black'
                            sx={{
                                width: '100%',
                                overflow: 'hidden'
                            }}
                        >
                           Общо:{(props.price*quantity).toFixed(2) || '20000лв'}лв.
                        </Typography>
                        <Stack
                            direction='row'
                        >
                            <Input
                            variant="standard"
                            disabled
                            size="small"
                            sx={{
                                textAlign: 'center'
                            }}  
                            value={quantity}/>
                              <IconButton
                               onClick={() => decrement(props.id)}
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        background: 'transparent'
                                    },
                                }}
                            >-
                            </IconButton>
                            <IconButton
                             onClick={() => increment(props.id)}
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        background: 'transparent'
                                    },
                                }}
                            >+
                            </IconButton>
                            <IconButton
                                onClick={() => removeItem(props.id)}
                                sx={{
                                    '&:hover': {
                                        color: 'alert.main',
                                        background: 'transparent'
                                    },
                                }}
                            >
                                <CloseIcon fontSize='small'></CloseIcon>
                            </IconButton>
                           
                        </Stack>
                    </Stack>
                </CardActions>
            </Stack>
        )
}