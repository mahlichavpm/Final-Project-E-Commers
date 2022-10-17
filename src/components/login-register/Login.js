import BlueBtn from "../../reusibleComponents/BlueBtn";
import login from "../../img/login.png"
import Input from "../../reusibleComponents/Input";
import './Login.scss';

export default function Login (props){

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <img src={login} alt='loginImg'></img>
                    <Input id={'username'} width={true} type={'text'}label={'Потребителско име'}/>
                    <Input id={'password'} width={true} type={'password'} label={'Парола'}/>
                    <BlueBtn value={'Вход'}/>
                </form>
            </div>
        </div>
    )
}