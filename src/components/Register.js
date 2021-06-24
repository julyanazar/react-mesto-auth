import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../utils/auth';
import resultIcon from '../images/popup-result-icon.svg';
import resultIconError from '../images/popup-result-icon-error.svg';

function Register({ openInfoTooltip, onClose, infoTooltipContent }) {
    const [valueEmail, setValueEmail] = React.useState('');
    const [valuePassword, setValuePassword] = React.useState('');
    const history = useHistory();

    function handleChangeEmail(e) {
        setValueEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setValuePassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const email = valueEmail;
        const password = valuePassword;

        Auth.register(email, password)
            .then(() => {
                infoTooltipContent({
                    iconPath: resultIcon,
                    text: 'Вы успешно зарегистрировались!'
                })
                openInfoTooltip();

                setTimeout(history.push, 3000, "/sign-in");
                setTimeout(onClose, 2500);
            })
            .catch(() => {
                infoTooltipContent({
                    iconPath: resultIconError,
                    text: 'Что-то пошло не так! Попробуйте ещё раз.'
                })
                openInfoTooltip();
                setTimeout(onClose, 2500);
            })
    }

    return (
        <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form onSubmit={handleSubmit} className="login__form">
                
                <input 
                    value={valueEmail} 
                    type="email" 
                    className="login__input" 
                    placeholder="Email" 
                    onChange={handleChangeEmail} />
                <input 
                    value={valuePassword} 
                    type="password" 
                    className="login__input" 
                    placeholder="Пароль" 
                    onChange={handleChangePassword} />

                <button className="login__submit">Зарегистрироваться</button>
            </form>
            <Link className="login__login" to="/sign-in">Уже зарегистрированы? Войти</Link>
        </section>
    );
}

export default Register;