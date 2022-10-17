import BlueBtn from "../reusibleComponents/BlueBtn";
import RegisterInput from "../reusibleComponents/Input";
import "./form.css"


export default function register () {
    return (
        <div className="form">
            <h1>Добре дошъл!</h1>
            <h2>Изглежда, че нямаш eMAG акаун.
                Хайде да ти направим нов акаунт!</h2>
            <p>Име и фамилия</p>
            <RegisterInput/>
            <p>Въведи силна парола</p>
            <RegisterInput className = "input"/>
            <p>Потвърди паролата</p>
            <RegisterInput/>
            <BlueBtn value = "Продължи"/>
        </div>
    )
};