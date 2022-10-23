import * as React from 'react';
import { Avatar } from '@mui/material';

export default function ProfileAvatar(props) {
    return (
        <Avatar
            sx={props.sx}
            id='avatar'
            onMouseEnter={props.onMouseEnter}
        >ВЙ</Avatar>
    )
}

