import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ resetPassHandler, inputValue, setInputValue }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  
  const  handleLogin = (e) => {
    e.preventDefault();
     
    if (passwordValue === "123456" && inputValue.trim() === "+71111111111") {
      setInputValue("");
      setPasswordValue("");
      localStorage.setItem("user", true);
      navigate("/");
   
  }
}
  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col justify-center gap-2 items-start">
        <label htmlFor="login" className="text-semibold text-[#989898] text-sm">
          Введите логин
        </label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          id="login"
          name="login"
          className="w-[280px] h-[30px] border-2 border-[#E5E5E5] rounded-sm"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 items-start">
        <label
          htmlFor="password"
          className="text-semibold text-[#989898]  text-sm"
        >
          Введите пароль
        </label>
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          id="password"
          name="password"
          className="w-[280px] h-[30px] border-2 border-[#E5E5E5] rounded-sm"
        />
      </div>
      <div className="flex justify-end w-full">
        <p
          className="text-[#F6B52E] text-[16px] cursor-pointer"
          onClick={resetPassHandler}
        >
          Забыли пароль?
        </p>
      </div>
      <div className="mt-4">
        <button onClick={handleLogin} className="w-[280px] h-[40px] border-[#F2B705] bg-[#F2B705] rounded-lg text-white text-xl">
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm
