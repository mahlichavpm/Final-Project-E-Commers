import * as React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ProfileAvatar(props) {

    const users = useSelector(state => state.activeUser.users);
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    let activeUser = users.find(e => e.username === loggedUser);
 
    const getInitials = (username) => {
        if(typeof username === 'undefined'){
            return null;
        }
        if(username.split(' ').length <= 1){
            return;
        }
        const fullName = username.split(' ')
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }
    let initials = getInitials(activeUser?.name); 

    return (
        <Avatar
            sx={props.sx}
            id='avatar'
            onMouseEnter={props.onMouseEnter}
        >{initials}</Avatar>
    )
}

