import BlueBtn from "../../reusibleComponents/BlueBtn";
import Input from "../../reusibleComponents/Input";
import './Login.scss'

export default function Register (props){

    return (
        <div className="loginWrapper">
            <div className="loginContainer">
                <form>
                    <h2>Здравей!</h2>
                    <h4>Моля въведи данните си:</h4>
                    <Input id={'username'} width={true} type={'text'}label={'Потребителско име'}/>
                    <Input id={'password'} width={true} type={'password'} label={'Парола'}/>
                    <Input id={'confirmPassword'} width={true} type={'password'} label={'Потвърдете Паролата'}/>
                    <BlueBtn value={'Регистрация'}/>
                    
                    
                    
                </form>
            </div>
        </div>
    )
}