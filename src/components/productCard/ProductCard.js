import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, CardActionArea, Checkbox, IconButton, Rating, Stack } from '@mui/material';
import ProductButton from '../buttons/ProductButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/activeUserSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useSelector } from 'react-redux';


export default function ProductCard(props) {
    // const goToProduct = () => {

    // }
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const dispatch = useDispatch();

    const handleAddToCart = (key) => {
        dispatch(addToCart({ key, loggedUser }))
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
            <CardActionArea onClick={() => { props.onClick() }}>
                {/* <Stack sx={{ position: 'relative' }}> */}
                <Stack>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                        alt={props.alt || "Mnogo bega"}
                    />
                    <CardActionArea
                        sx={{
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Checkbox sx={{
                            backgroundColor: 'white',
                            margin: '8px',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'primary.main'
                            }
                        }}
                            onClick={(e) => {
                                e.stopPropagation()
                                props.onClickFav()
                            }} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon color='alert' />} />
                    </CardActionArea>
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
                    <Typography variant="body2" color="custom.light">
                        {props.stock || 'Няма си количество'}
                    </Typography>
                    <Typography variant="body1" color="alert.main">
                        {props.price + ' лв' || 'Няма си цена'}
                    </Typography>
                </CardContent>
                {/* </Stack> */}
            </CardActionArea>
            <CardActions>
                <ProductButton onClick={() => { handleAddToCart(props.id) }} name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
            </CardActions>

        </Card>
    )
}