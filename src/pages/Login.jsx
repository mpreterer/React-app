import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import AuthContext from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Логин" />
        <MyInput type="password" placeholder="Пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
