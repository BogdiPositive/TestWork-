import React from "react";

const Home = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
  return (
    <div className="flex justify-between mx-6">
      <div >
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </div>
      <div>
        <button onClick={handleLogout} className="w-[70px] h-[26px] border-2 rounded-full bg-[#F2B705]">
            Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
