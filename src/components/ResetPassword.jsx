import React, { useState } from "react";
import InputMask from "react-input-mask";

const ResetPassword = ({ resetPassHandler, inputValue, setInputValue }) => {
  
  const [numberIsValid, setNumberIsValid] = useState(false);
  const handleGetPassword = () => {
    localStorage.setItem("login", inputValue);
    setNumberIsValid(true);
    console.log(numberIsValid);
 
  };
  const handleSubmitPassword = () => {
    resetPassHandler(inputValue);
    setNumberIsValid(false);
    
  }

  return (
    <div className="flex flex-col gap-8 relative">
      <h3 className="text-[20px] text-[#989898]">Востановление пароля</h3>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-2 items-start">
          <label
            htmlFor="login"
            className="text-semibold text-[#989898] text-sm"
          >
            Введите номер телефона
          </label>
          <InputMask
            className="w-[280px] h-[30px] border-2 border-[#E5E5E5] rounded-sm"
            mask="+7 999 999 99 99"
            maskChar=""
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end w-full">
          <p
            className="text-[#F6B52E] text-[16px] cursor-pointer"
            onClick={resetPassHandler}
          >
            Назад
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleGetPassword}
          className="w-[280px] h-[40px] border-[#F2B705] bg-[#F2B705] rounded-lg text-white text-xl"
        >
          Позвонить
        </button>
      </div>
      {numberIsValid && (
        <div className="absolute top-8 -left-5 w-[340px] h-[160px] z-20 bg-[#F2B705] rounded-lg shadow-xl flex flex-col gap-5 justify-center items-center">
          <h3 className="text-xl">
            Ваш временный пароль - <br />
            <span className="text-2xl">123456</span>
          </h3>
          <button onClick={handleSubmitPassword} className="bg-black w-32 text-white border-white border-2 rounded-full shadow-lg">Принять</button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
