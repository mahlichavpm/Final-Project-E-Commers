import './Login.scss';
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { loginUser, adminLogin, loginErrorHandler} from '../../store/activeUserSlice';
import { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';

export default function Login (){

    const userId = useSelector(state => state.activeUser.sessionId)
    const loading = useSelector(state => state.activeUser.loginLoader)
    const error = useSelector(state => state.activeUser.loginError)

    const [rememberMe,setRememberMe] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [correctInput,setCorrectInput] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(username && password){
          setCorrectInput(false)
        } else {
            setCorrectInput(true)
        }
    },
    [username,password])


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

    const handleInput = (e) => {
        setUsername(e.target.value);
        dispatch(loginErrorHandler())


    }

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h3>Здравей, влез в акаунта си:</h3>
                    <div className='errorWrapper'>
                    {error ? <div className='errorContainer'>
                        <p>Грешни входни данни!</p>
                    </div> : null}
                    </div>
                    <TextField size="small" error={error} id={'username'} width='true' type={'text'} value={username} onChange={handleInput} label={'Потребителско име'}/>
                    <TextField size="small" error={error} id={'password'} width='true' type={'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} label={'Парола'}/>
                    <FormControlLabel control={<Checkbox onClick={handleRememberMe} />} label="Запомни ме" />
                    {loading ? <Button><Loader/></Button> :
                    <Button onClick={handleLogin} disabled={correctInput} variant='contained'>Вход</Button>}
                    <Link to={'/register'}>Нямаш регистрация? Кликни тук. </Link>
                </form>
            </div>
        </div>
    )
}