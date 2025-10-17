import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import loginUsingGoogle from "../api/auth";

const LoginPage = () => {
  const [code, setCode] = useState("");
  const responseGoogle = async (authResult) => {
    try {
      const response = await loginUsingGoogle(authResult.code);
      console.log(response);
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="flex items-center justify-center min-h-screen w-full ">
      <button
        onClick={() => loginWithGoogle()}
        className="flex items-center px-6 py-3 bg-white text-gray-700 rounded shadow hover:bg-gray-50 border border-gray-300 transition"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
          <g>
            <path
              fill="#4285F4"
              d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.86-6.86C36.08 2.2 30.41 0 24 0 14.82 0 6.73 5.8 2.69 14.09l7.99 6.2C12.62 13.13 17.87 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.14 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.91-2.16 5.38-4.61 7.04l7.1 5.52C43.98 37.44 46.14 31.54 46.14 24.55z"
            />
            <path
              fill="#FBBC05"
              d="M10.68 28.29A14.5 14.5 0 019.5 24c0-1.49.24-2.93.66-4.29l-7.99-6.2A23.98 23.98 0 000 24c0 3.97.96 7.73 2.67 11.03l8.01-6.74z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.41 0 11.78-2.12 15.7-5.77l-7.1-5.52c-2.01 1.35-4.59 2.15-8.6 2.15-6.13 0-11.38-3.63-13.31-8.79l-8.01 6.74C6.73 42.2 14.82 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
