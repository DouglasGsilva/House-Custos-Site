import React from "react";
import * as C from "./style.js";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <C.logo onClick={handleClick}>
        <FaArrowAltCircleUp />
      </C.logo>
    </>
  );
};
