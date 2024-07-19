import { signOut } from "next-auth/react";
import React from "react";

const GoogleLogutBtn = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <button
      className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-9 z-30 md:text-base text-black text-xs  w-fit mx-auto"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default GoogleLogutBtn;
