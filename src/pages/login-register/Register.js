
import './Login.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { registerUser } from '../../store/activeUserSlice';
import { Button, TextField } from "@mui/material";
import Login from './Login';


export default function Register (){

    const successfulRegister = useSelector(state => state.activeUser.userRegistered);
    const navigate = useNavigate();

    useEffect(() => {
        if(successfulRegister){
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[successfulRegister])
    


    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [matchPassErr,setMatchPassErr] = useState(false)

    const passCompare = () => {
        if (password === password1){
            setMatchPassErr(false)
            return true
        }
        setMatchPassErr(true)
        return false
    }

    useEffect(() => {
        passCompare()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[password,password1])


    const handleRegister = () => {
        dispatch(registerUser({ username, password }));
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
                    <TextField size="small" id={'username'} width='true'  value={username} onChange={(e) => {setUsername(e.target.value)}} type={'text'}label={'Потребителско име'}/>
                    <TextField size="small" id={'password'} width='true' value={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'} label={'Парола'}/>

                    <TextField size="small" id={'password1'} error={matchPassErr} width='true' value={password1} onInput={(e) => {
                     setPassword1(e.target.value);
                    
                    }} type={'password'} label={'Потвърдете паролата'}/>
                    <Button  variant='contained' onClick={handleClick}>Регистрация</Button>
                    <Link to={'/login'}>Вече имаш регистрация?</Link>
                    
                </form>
            </div>
        </div>
    )
}