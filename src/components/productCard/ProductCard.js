import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Button, CardActionArea, Rating, Stack } from '@mui/material';
import ProductButton from '../buttons/ProductButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourites, removeItemFromFav } from '../../store/activeUserSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ProductCard(props) {
  
    const favouriteList = useSelector(state => state.activeUser.favourites);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [heartIcon,setHeartIcon] = React.useState(false);

    const handleAddToCart = (key) => {
        dispatch(addToCart({key}))
      }

    React.useEffect(() => {
        if(favouriteList.indexOf(props.id) !== -1){
            setHeartIcon(true)
        } else {
            setHeartIcon(false)
        }
    },[favouriteList])

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
        >
            <CardActionArea onClick={() => props.onCardClick()}>
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
                    <Typography variant="body2" color="custom.light" noWrap={true}>
                        {props.description || 'Има Проблем V2'}
                    </Typography>
                    <Rating name="half-rating" readOnly defaultValue={props.averigeReview || 0} size='small' />
                    <Typography variant="body1" color="alert.main">
                        {props.price + ' лв' || 'Няма си цена'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack sx={{gap: 1, width: '100%' }}>
                <ProductButton onClick={()=>{handleAddtoFavouritesBtn(props.id)}} startIcon={heartIcon ? <FavoriteIcon color='custom.light'/> :<FavoriteBorderIcon color="custom.light" />}  name={favBtnLabel(props.id)} />
                <ProductButton onClick={() => {handleAddToCart(props.id)}} name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
                </Stack>
            </CardActions>
        </Card>
    )
}