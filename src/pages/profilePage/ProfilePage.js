import { Avatar, TextField } from '@mui/material'
import Header from '../../components/header/Header'
import './ProfilePage.scss'

export default function ProfilePage () {


    return (
        <>
         <Header/>
        <div className='profilePageContainer'>
            <div className='profileInfoContainer'>
                <div className='userInfo'>
                    <h3>Здравейте, Виктор Йорданов!</h3>
                    <Avatar
                            sx={{ fontSize: 120 ,bgcolor: 'orange', width: 240, height: 240, marginLeft: 15 }}
                            id='avatar'
                        >ВЙ</Avatar>
                    <TextField variant="standard" size="small" id={'name'} width='true' value={'Виктор Йорданов'} type={'text'} label={'Име и Фамилия'}/>
                    <TextField variant="standard" size="small" id={'name'} width='true' value={'mahals'} type={'text'} label={'Потребителско име'}/>
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