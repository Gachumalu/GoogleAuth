"use client";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  const singInHandler = () => {
    signIn("google", { callbackUrl: "/dashboard" });
    console.log("gachu");
  };
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={singInHandler}
      >
        Login
      </button>
    </div>
  );
};

export default GoogleButton;
