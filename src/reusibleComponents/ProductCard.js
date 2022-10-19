import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function ProductCard() {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"
                alt="green iguana"
            />
            <Checkbox defaultChecked />
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <Rating name="half-rating" defaultValue={3} precision={0.5} size= 'small'/>
            </CardContent>
            <CardActions>
                <Button size="medium">Share</Button>
                <Button size="medium">Learn More</Button>
            </CardActions>
        </Card>
    )
}