import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageStyled } from "./pages/homePage/homePage.style";
import { ErrorPage } from "./pages/errorPage/errorPage";
import { ContactPage } from "./pages/contactPage/contactPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePageStyled />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
