import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Button, CardActionArea, IconButton, Rating, Stack } from '@mui/material';
import ProductButton from '../buttons/ProductButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourites, removeItemFromFav } from '../../store/activeUserSlice';
import useSelection from 'antd/lib/table/hooks/useSelection';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


export default function ProductCard(props) {
    // const goToProduct = () => {

    // }
    // const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const favouriteList = useSelector(state => state.activeUser.favourites)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (key) => {
        dispatch(addToCart({key}))
      }

    const handleAddtoFavouritesBtn = (key) => {
        if(favouriteList.indexOf(key) !== -1){
            dispatch(removeItemFromFav(key))
        }
        else {
            dispatch(addToFavourites({key}))
        }
        
    }

    const favBtnLabel = (key) => {
        if(favouriteList.indexOf(key) !== -1){
            return 'Премахни от любими'
        }
        return 'Добави в любими'
    }
 

    return (
        <Card sx={{
            maxWidth: 288,
            minWidth: 288,
            border: '1px solid  rgba(34, 34, 34, 0.2)',
            borderRadius: '8px'
        }}
        // onClick={() => props.onClick() || 'none'}
        >
            <CardActionArea onClick={() => { navigate(`/product/`) }}>
                {/* <Stack sx={{ position: 'relative' }}> */}
                <Stack>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                        alt={props.alt || "Mnogo bega"}
                    />
                </Stack>

                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color='custom'
                        noWrap={true}
                    >
                        {props.title || "Има Проблем!"}
                    </Typography>
                    <Typography variant="body2" color="custom.light">
                        {props.description || 'Има Проблем V2'}
                    </Typography>
                    <Rating name="half-rating" readOnly defaultValue={props.averigeReview || 0} size='small' />
                    <Typography variant="body2" color="custom.light">
                        {props.stock || 'Няма си количество'}
                    </Typography>
                    <Typography variant="body1" color="alert.main">
                        {props.price || 'Няма си цена'}
                    </Typography>
                </CardContent>
                {/* </Stack> */}
            </CardActionArea>
            <CardActions>
                <Stack sx={{gap: 1, width: '100%' }}>
                <ProductButton onClick={()=>{handleAddtoFavouritesBtn(props.id)}} startIcon={<FavoriteBorderIcon color="custom.light" />}  name={favBtnLabel(props.id)} />
                <ProductButton onClick={() => {handleAddToCart(props.id)}} name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
                </Stack>
            </CardActions>

        </Card>
    )
}