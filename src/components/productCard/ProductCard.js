import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, CardActionArea, IconButton, Rating, Stack } from '@mui/material';
import ProductButton from '../buttons/ProductButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';


export default function ProductCard(props) {
    // const goToProduct = () => {

    // }
    return (
        <Card sx={{
            maxWidth: 300,
            minWidth: 300,
            border: '1px solid  rgba(34, 34, 34, 0.2)',
            borderRadius: '8px'
        }}
        >
            <CardActionArea
                // onClick={

                // }
            >
                <Stack>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                        alt={props.alt || "Mnogo bega"}
                    />
                    <IconButton sx={{
                        position: 'absolute',
                        right: '0px',
                        backgroundColor: 'white',
                        margin: '8px',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'primary.main'
                        }
                    }}>
                        <FavoriteBorderIcon color="custom.light" />
                    </IconButton>
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
            </CardActionArea>
            <CardActions>
                <ProductButton onClick={(e)=>{props.onClick(props.key)}} name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
            </CardActions>

        </Card>
    )
}