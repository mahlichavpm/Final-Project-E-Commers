import { TextField } from '@mui/material'
import Header from '../../components/header/Header'
import './ProfilePage.scss'
import ProfileAvatar from '../../components/profileAvatar/ProfileAvatar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changeUserName } from '../../store/activeUserSlice'

export default function ProfilePage () {

    const users = useSelector(state => state.activeUser.users);
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    let activeUser = users.find(e => e.username === loggedUser);
    const dispatch = useDispatch();

    const [name, setName] = useState(activeUser.name)
    
    // const getInitials = (username) => {
    //     if(username.split(' ').length <= 1){
    //         return;
    //     }
    //     const fullName = username.split(' ')
    //     const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    //     return initials.toUpperCase();
    // }

    // let initials = getInitials(activeUser.name)
    
    useEffect(() => {
        dispatch(changeUserName({loggedUser, name}))
    },[name])

    const handleNameChange = e => {
        setName(e.target.value)
       
    }

    return (
        <>
        <div className='profilePageContainer'>
            <div className='profileInfoContainer'>
                <div className='userInfo'>
                    <h3>{`Здравейте, ${activeUser.username}!`}</h3>
                    <ProfileAvatar 
                            sx={{bgcolor: 'orange', width: 240, height: 240, marginLeft: 15, fontSize: '120px'}}
                        />
                    <TextField variant="standard" size="small" id={'name'} width='true' value={name} onInput={handleNameChange} type={'text'} label={'Име и Фамилия'}/>
                    <TextField variant="standard" size="small" id={'name'} width='true' value={''} type={'text'} label={'Потребителско име'}/>
                    <TextField variant="standard" size="small" id={'name'} width='true' value={'0896640646'} type={'text'} label={'Телефон'}/>
                </div>
                <div className='adressInfo'>
                    <h3>Адрес за доставка:</h3>    
                    <TextField variant="standard" id={'name'} width='true' value={'България'} type={'text'} label={'Държава'}/>
                    <TextField variant="standard" id={'name'} width='true' value={'Бургас'} type={'text'} label={'Област'}/>
                    <TextField variant="standard" id={'name'} width='true' value={'Поморие'} type={'text'} label={'Град'}/>
                    <TextField variant="standard" id={'name'} width='true' value={'кв.Свобода'} type={'text'} label={'Адрес 1'}/>
                    <TextField variant="standard" id={'name'} width='true' value={'бл.16 вх.А ет.3'} type={'text'} label={'Адрес 2'}/>
                </div>
            </div>
        </div> 
        </>
    )
}