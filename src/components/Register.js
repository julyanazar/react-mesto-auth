function Register() {
    return (
      <section className="login">
        <h1 className="login__title">Регистрация</h1>
        <form className="login__form">
          <input className="login__input" placeholder="Email"/>
          <input className="login__input" placeholder="Пароль"/>
          <button className="login__submit">Зарегистрироваться</button>
        </form>
        <h2 className="login__login">Уже зарегистрированы? Войти</h2>
      </section>
    );
  }
  
  export default Register; 