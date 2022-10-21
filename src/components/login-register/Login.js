import './Login.scss';
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../store/activeUserSlice';
import { useState } from 'react';




export default function Login (){

    const userId = useSelector(state => state.activeUser.sessionId)

    const [rememberMe,setRememberMe] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRememberMe = () => {
        if(!rememberMe){
            setRememberMe(true)
        }
    }

    const handleLogin = () => {
        if(rememberMe){
            localStorage.setItem('rememberUser',JSON.stringify(true))
        }
        setUsername('');
        setPassword('');
        dispatch(loginUser({ username, password }));
        <Navigate to={'/home'}/>
    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h3>Здравей, влез в акаунта си:</h3>
                    <TextField id={'username'} width='true' type={'text'} value={username} onChange={(e) => {setUsername(e.target.value)}} label={'Потребителско име'}/>
                    <TextField id={'password'} width='true' type={'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} label={'Парола'}/>
                    <FormControlLabel control={<Checkbox onClick={handleRememberMe} />} label="Запомни ме" />
                    <Button onClick={handleLogin} variant='contained'>Вход</Button>
                    <Link to={'/register'}>Нямаш регистрация? Кликни тук. </Link>
                </form>
            </div>
        </div>
    )
}