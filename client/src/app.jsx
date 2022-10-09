import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HomePageStyled } from "./pages/homePage/homePage.style";
import { ErrorPage } from "./pages/errorPage/errorPage";
import { ContactPage } from "./pages/contactPage/contactPage";
import { AboutPage } from "./pages/aboutPage/aboutPage";
import { TextStyled } from "./components/text/text.style";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;

function Test() {
  const sentence = "This is a test.\n\nHere is a new line.";

  return (
    <div>
      <TextStyled text={sentence} />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path={"/"} element={<HomePageStyled />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/test"} element={<Test />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
