import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Protected } from "../Component/Protected";
import { Login } from "../Pages/Login";
import { Singup } from "../Pages/Singup";
import { Fov } from "../Pages/Fov";
import { Home } from "../Pages/Home";

export const Router = () => {
  const [isSignedIn, setIsSignedIn] = useState(
    sessionStorage.getItem("token") || false
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/checkout" element={
        <Protected isSignedIn={isSignedIn}>
        <Fov />
      </Protected>
        } />
      </Routes>
    </>
  );
};