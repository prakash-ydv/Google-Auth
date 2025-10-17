import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const AllRoutes = () => {
  const googleAuthWrapper = () => {
    const clientID = import.meta.env.VITE_CLIENT_ID;
    return (
      <GoogleOAuthProvider clientId={clientID}>
        <LoginPage />
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={googleAuthWrapper()} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
