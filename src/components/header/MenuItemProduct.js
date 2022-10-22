import { IconButton, MenuItem, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { Stack } from "@mui/system";
import { useState } from "react";

export default function MenuItemProduct(props) {
    const [remove, setRemove] = useState(true);
    if (remove) {
        return (
            <>
                <MenuItem sx={{
                    display: 'flex',
                    width: '300px',
                    gap: '20px',
                    justifyContent: 'space-between',
                }}>
                    <img
                        src={props.img || "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"}
                        loading='lazy'
                        height='40px'
                        alt="miata"
                    />
                    <Typography
                        variant="body2"
                        color="custom.main"
                        sx={{
                            width: '100%',
                        }}
                        noWrap
                    >
                        {props.description || 'Има Проблем V2 Има Проблем V2 Има Проблем V2'}
                    </Typography>
                    <Stack direction='column' spacing={1}>
                        <Typography
                            variant='caption'
                            color='primary.main'
                            sx={{
                                width: '100%',
                                overflow: 'hidden'
                            }}
                        >
                            {props.price || '200лв'}
                        </Typography>
                        <IconButton onClick={() => setRemove(false)}>
                            <CloseIcon fontSize='small'></CloseIcon>
                        </IconButton>
                    </Stack>
                </MenuItem>
            </>
        )   
    }
}
