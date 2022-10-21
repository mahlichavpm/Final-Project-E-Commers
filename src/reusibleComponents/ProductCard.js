import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating, Stack } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ProductButton from './ProductButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function ProductCard(props) {
    return (
        <Card sx={{ 
            maxWidth: 300,
            border: '1px solid  rgba(34, 34, 34, 0.2)',
            borderRadius: '8px'
            }}>
            <CardActionArea>
                <Stack>
                    <CardMedia
                        component="img"
                        height="200"
                        image= {props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                        alt={props.alt || "Mnogo bega"}
                    />
                    {/* <Checkbox defaultChecked />
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
                </Stack>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='custom'>
                        {props.title || "Има Проблем!"}
                    </Typography>
                    <Typography variant="body2" color="custom.light">
                        {props.description || 'Има Проблем V2'}
                    </Typography>
                    <Rating name="half-rating" readOnly defaultValue={props.rating || 0} size='small' />
                    <Typography variant="body2" color="custom.light">
                        {props.stock || 'Няма си количество'}
                    </Typography>
                    <Typography variant="body1" color="alert.main">
                        {props.price || 'Няма си цена'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ProductButton name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
            </CardActions>

        </Card>
    )
}