
import './Login.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { registerUser, registerErrorHandler } from '../../store/activeUserSlice';
import { Button, TextField } from "@mui/material";
import Loader from '../../components/loader/Loader';
import { User } from '../../model/User';


export default function Register (){

    const successfulRegister = useSelector(state => state.activeUser.userRegistered);
    const loading = useSelector(state => state.activeUser.registerLoader);
    const error = useSelector(state => state.activeUser.registerError)
    let users = useSelector(state => state.activeUser.users)
    const navigate = useNavigate();

    useEffect(() => {
        if(successfulRegister){
            let user = User(username)
            users = [...users,user];
            localStorage.setItem('users',JSON.stringify(users))
            console.log(users);
            navigate('/login')
        }
        setUsername('');
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
            setPassword('');
            setPassword1('');
            setMatchPassErr(!flag)
            handleRegister()
        } else {
            setMatchPassErr(!flag)
        }

    }

    const handleInput = (e) => {
        setUsername(e.target.value);
        dispatch(registerErrorHandler);
    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h4>Моля въведи данните си за да се регистрираш:</h4>
                    <TextField size="small" error={error} id={'username'} width='true'  value={username} onChange={handleInput} type={'text'}label={'Потребителско име'}/>
                    <TextField size="small" id={'password'} width='true' value={password} onChange={(e) => {setPassword(e.target.value)}} type={'password'} label={'Парола'}/>

                    <TextField size="small" id={'password1'} error={matchPassErr} width='true' value={password1} onInput={(e) => {
                     setPassword1(e.target.value);
                    
                    }} type={'password'} label={'Потвърдете паролата'}/>
                    {loading ? <Button><Loader/></Button> :
                    <Button onClick={handleClick} variant='contained'>Регистрация</Button>}
                    <Link to={'/login'}>Вече имаш регистрация?</Link>
                </form>
            </div>
        </div>
    )
}