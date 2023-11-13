import "./Register.css";
import logo from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/validation";
import { emailRegex } from "../../utils/constants";

export default function Register({
  onRegister, isSucess, isSend
}) {
  const { value, errors, isInputValue, handleChange, isValid } = useFormValidation();



  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(value.name, value.email, value.password);
  }



  return (
    <section className="auth">
      <Link to="/" className="auth__logo-link">
        <img src={logo} alt="логотип" className="auth__logo hover-link" />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>

      <form className="auth__form form" onSubmit={handleSubmit} isValid noValidate>
        <label className="auth__label auth__label-name">Имя</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`auth__input auth__input-register ${isInputValue.name === undefined|| isInputValue.name ? '' : 'auth__input_invalid'}`}
          placeholder="Введите имя"
          minLength="2"
          maxLength="30"
          required
          value={value.name || ""}
          onChange={handleChange}
        />
        <span className="auth__error">{errors.name}</span>
        <label className="auth__label auth__label-email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className="auth__input auth__input-register"
          placeholder="Введите email"
          pattern={emailRegex}
          required={true}
          value={value.email || ""}
          onChange={handleChange}
        />
        <span className="auth__error">{errors.email}</span>
        <label className="auth__label auth__label-password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="2"
          maxLength="30"
          className="auth__input auth__input-register auth__input-register_password"
          placeholder="Введите пароль"
          required={true}
          value={value.password || ""}
          onChange={handleChange}
        />
        <span className="auth__error auth__error_password">{errors.password}</span>
        <button
          className={`auth__submit auth__submit-register  hover-button ${isValid ? '' : 'auth__button_disabled'}`} type="submit" disabled={!isValid || isSend} onClick={handleSubmit}
        >
          Зарегистрироваться
        </button>
        <p className="auth__subtitle auth__subtitle-register">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="auth__subtitle-link hover-link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}
