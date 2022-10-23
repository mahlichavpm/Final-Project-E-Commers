import { CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CartPageProduct(props) {
    const [remove, setRemove] = useState(true);
    if (remove) {
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
                </CardContent>
                <CardActions>
                    <Stack
                        alignItems='center'
                    >
                        <Typography
                            variant='h6'
                            color='primary.main'
                            sx={{
                                width: '100%',
                                overflow: 'hidden'
                            }}
                        >
                            {props.price || '200лв'}
                        </Typography>
                        <Stack
                            direction='row'
                        >
                            <IconButton
                                onClick={() => setRemove(false)}
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                <FavoriteBorderIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                                onClick={() => setRemove(false)}
                                sx={{
                                    '&:hover': {
                                        color: 'alert.main',
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
}