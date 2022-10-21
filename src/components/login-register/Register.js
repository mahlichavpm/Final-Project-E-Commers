
import './Login.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from '../../store/activeUserSlice';
import { Button, TextField } from "@mui/material";
import Login from './Login';

export default function Register (){

    const successfulRegister = useSelector(state => state.activeUser.userRegistered)


    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [matchPassErr,setMatchPassErr] = useState(false)

    const handleRegister = () => {
        dispatch(registerUser({ username, password }));
    }

    const passCompare = () => {
        if (password === password1){
            return true
        }
        return false
    }

    const handleClick = (e) => {
        e.preventDefault();
        let flag = passCompare();
        if(flag){
            setUsername('');
            setPassword('');
            setPassword1('');
            setMatchPassErr(!flag)
            handleRegister()
        } else {
            setMatchPassErr(!flag)
        }

    }

    return (
        successfulRegister ? <Login/> :
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h4>Моля въведи данните си за да се регистрираш:</h4>
                    <TextField id={'username'} width='true'  value={username} onChange={(e) => {setUsername(e.target.value)}} type={'text'}label={'Потребителско име'}/>
                    <TextField id={'password'} width='true' value={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'} label={'Парола'}/>
                    <TextField id={'password1'} error={matchPassErr} width='true' value={password1} onChange={(e) => {
                     setPassword1(e.target.value);
                     passCompare()
                    }} type={'password'} label={'Потвърдете паролата'}/>
                    <Button variant='contained' onClick={handleClick}>Регистрация</Button>
                    <Link to={'/login'}>Вече имаш регистрация?</Link>
                    
                </form>
            </div>
        </div>
    )
}