import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Auth from '../utils/auth';
import resultIcon from '../images/popup-result-icon.svg';
import resultIconError from '../images/popup-result-icon-error.svg';

function Login({ setEmail, openInfoTooltip, onClose, infoTooltipContent, setLoggedIn }) {
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
    e.preventDefault()
    const email = valueEmail;
    const password = valuePassword;

    Auth.authorize(email, password)
      .then((data) => {
        if (!data) {
          throw new Error('Произошла ошибка');
        }

        Auth.getContent(data)
          .then((res) => {
            setEmail(res.data.email);
          })
          .catch(err => console.log(err));

        setLoggedIn(true);
        infoTooltipContent({
          iconPath: resultIcon,
          text: 'Вы успешно авторизовались!'
        })
        openInfoTooltip();

        setTimeout(history.push, 3000, "/");
        setTimeout(onClose, 2500);
      })
      .catch(() => {
        infoTooltipContent({
          iconPath: resultIconError,
          text: 'Что то пошло не так!'
        })
        openInfoTooltip();
      })
  }

  return (
    <section className="login">
      <h1 className="login__title">Вход</h1>
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

        <button className="login__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;