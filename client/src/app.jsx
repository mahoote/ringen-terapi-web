import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageStyled } from "./pages/homePage/homePage.style";
import { ErrorPage } from "./pages/errorPage/errorPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePageStyled />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
