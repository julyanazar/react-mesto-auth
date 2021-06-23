import React from 'react';

function Login() {
  return (
    <section className="login">
      <h1 className="login__title">Вход</h1>
      <form className="login__form">
        <input className="login__input" placeholder="Email" />
        <input className="login__input" placeholder="Пароль" />
        <button className="login__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;