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
    let error = useSelector(state => state.activeUser.registerError);
    let users = useSelector(state => state.activeUser.users);
    const navigate = useNavigate();

    useEffect(() => {
        if(successfulRegister){
            let user = User(username)
            users = [...users,user];
            localStorage.setItem('users',JSON.stringify(users))
            navigate('/login')
        }
        setUsername('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[successfulRegister])
    


    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [matchPassErr,setMatchPassErr] = useState(false);
    const [correctInput,setCorrectInput] = useState(true);
    const [validPassword,setValidPassword] = useState(false);

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/gm

    const passCompare = () => {

        if(password1 === ''){
            return false
        }

        if(password === password1){
            setMatchPassErr(false)
            return true
        }
        setMatchPassErr(true)
        return false
    }

    useEffect(() => {
        passCompare()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[password1])

    useEffect(() => {
        if(password)

        if(regex.test(password)){
            console.log("minava");
            setValidPassword(false)
        } else {
            setValidPassword(true)
            console.log("ne minava");

        }

    },[password])


    useEffect(() => {

        if(username && !validPassword && passCompare()){
          setCorrectInput(false)
        } else {
            setCorrectInput(true)
        }
    },
    [username,password,password1])

    const handleRegister = () => {
        dispatch(registerUser({ username, password }));
    }

    const handleClick = (e) => {
        e.preventDefault();
        let flag = passCompare();
        if(flag){
            setPassword('');
            setPassword1('');
            setMatchPassErr(!flag);
            handleRegister();
        } else {
            setMatchPassErr(!flag);
        }

    }

    const handleInput = (e) => {
        if(e.target.value !== ' '){
            const value = e.target.value.trim();
            setUsername(value);
            dispatch(registerErrorHandler);
        }
    }

    const handleInputPassword = (e) => {
        if(e.target.value !== ' '){
        const value = e.target.value.trim();
        setPassword(value);
        }
    }

    const handleInputPasswordMatch= (e) => {
        if(e.target.value !== ' '){
        const value = e.target.value.trim();
        setPassword1(value);
        }
    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h4>Моля въведи данните си за да се регистрираш:</h4>
                    <div className='errorWrapper'>
                    {error ? <div className='errorContainer'>
                        <p>Потребителското име е заето!</p>
                    </div> : null}
                    </div>
                    <TextField helperText={''} size="small"  id={'username'} width='true'  value={username} onChange={handleInput} type={'text'}label={'Потребителско име'}/>
                    <TextField size="small" error={validPassword} id={'password'} helperText={'Паролата трябва да е поне 6 символа, да съдържа буква, число и специален символ.'} width='true' value={password} onChange={handleInputPassword} type={'password'} label={'Парола'}/>
                    <TextField size="small" id={'password1'} error={matchPassErr} width='true' value={password1} onInput={handleInputPasswordMatch} type={'password'} label={'Потвърдете паролата'}/>
                    {loading ? <Button><Loader/></Button> :
                    <Button onClick={handleClick} disabled={correctInput} variant='contained'>Регистрация</Button>}
                    <Link to={'/login'}>Вече имаш регистрация?</Link>
                </form>
            </div>
        </div>
    )
}