import BlueBtn from "../../reusibleComponents/BlueBtn";
import Input from "../../reusibleComponents/Input";
import './Login.scss';
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login (props){

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h3>Здравей, влез в акаунта си:</h3>
                    <Input id={'username'} width={true} type={'text'}label={'Потребителско име'}/>
                    <Input id={'password'} width={true} type={'password'} label={'Парола'}/>
                    <FormControlLabel control={<Checkbox />} label="Запомни ме" />
                    <BlueBtn value={'Вход'}/>
                    <Link to={'/register'}>Нямаш регистрация?</Link>
                </form>
            </div>
        </div>
    )
}