import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const { user } = useSelector((state) => state.Auth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
