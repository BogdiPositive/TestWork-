import React, { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPassword from "./ResetPassword";
import logo from "../assets/logo.png";
import fon from "../assets/fon.png";

function Login() {
  const [resetPass, setResetPass] = useState(false);
  const [inputResetValue, setInputResetValue] = useState("");

  const resetPassHandler = () => {
    setResetPass(!resetPass);
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img className="z-0" src={fon} alt="fon" />

        <div className="absolute top-[220px] left-[550px] w-[420px] h-[480px] rounded-xl bg-white shadow-2xl object-cover">
          <div className="flex flex-col justify-center gap-8 items-center">
            <div>
              <img src={logo} alt="logo" className="w-[263px] h-[172px] " />
            </div>
            {resetPass ? (
              <ResetPassword
                resetPassHandler={resetPassHandler}
                inputValue={inputResetValue}
                setInputValue={setInputResetValue}
              />
            ) : (
              <LoginForm
                resetPassHandler={resetPassHandler}
                inputValue={inputResetValue}
                setInputValue={setInputResetValue}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
