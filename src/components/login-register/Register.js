import BlueBtn from "../../reusibleComponents/BlueBtn";
import Input from "../../reusibleComponents/Input";
import './Login.scss'
import { Link } from "react-router-dom";

export default function Register (props){

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h4>Моля въведи данните си за да се регистрираш:</h4>
                    <Input id={'username'} width={true} type={'text'}label={'Потребителско име'}/>
                    <Input id={'password'} width={true} type={'password'} label={'Парола'}/>
                    <Input id={'confirmPassword'} width={true} type={'password'} label={'Потвърдете Паролата'}/>
                    <BlueBtn value={'Регистрация'}/>
                    <Link to={'/login'}>Вече имаш регистрация?</Link>
                    
                </form>
            </div>
        </div>
    )
}