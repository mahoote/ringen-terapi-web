import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePageStyled } from "./pages/homePage/homePage.style";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePageStyled />} />
        <Route path={"/*"} element={<h1>Error page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
