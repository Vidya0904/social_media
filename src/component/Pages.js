import React from "react";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";

function Pages() {
  return (
    <div className="columns-3 flex max-h-max px-4 md:flex md:items-center md:justify-between">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default Pages;
