import './Login.scss';
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { loginUser, adminLogin } from '../../store/activeUserSlice';
import { useEffect, useState } from 'react';

export default function Login (){

    const userId = useSelector(state => state.activeUser.sessionId)

    const [rememberMe,setRememberMe] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        if(userId){
            navigate('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userId])

    const handleRememberMe = () => {
        if(!rememberMe){
            setRememberMe(true)
        }
    }

    const isAdmin = (username,password) => {
        if(username === 'admin' && password === 'admin'){
            return true
        }
        return false
    }

    const handleLogin = () => {

        if(isAdmin(username,password)){
            dispatch(adminLogin())
        } else {

            if(rememberMe){
                localStorage.setItem('rememberUser',JSON.stringify(true))
            }
            setUsername('');
            setPassword('');
            dispatch(loginUser({ username, password }));
        }
    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h3>Здравей, влез в акаунта си:</h3>
                    <TextField size="small" id={'username'} width='true' type={'text'} value={username} onChange={(e) => {setUsername(e.target.value)}} label={'Потребителско име'}/>
                    <TextField size="small" id={'password'} width='true' type={'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} label={'Парола'}/>
                    <FormControlLabel control={<Checkbox onClick={handleRememberMe} />} label="Запомни ме" />
                    <Button onClick={handleLogin} variant='contained'>Вход</Button>
                    <Link to={'/register'}>Нямаш регистрация? Кликни тук. </Link>
                </form>
            </div>
        </div>
    )
}