import React from "react";
import * as G from "../styles/components/ButtonMcss.jsx";

function ButtonL({ category }) {
  const getButtonText = () => {
    if (category === "group") {
      return "그룹 만들기";
    } else if (category === "memory") {
      return "추억 올리기";
    } else {
      return "버튼";
    }
  };

  const handleClick = () => {
    if (category === "group") {
      groupClick();
    } else if (category === "memory") {
      memoryClick();
    }
  };

  const groupClick = () => {
    console.log("그룹 만들기 모달 추가 예정");
  };

  const memoryClick = () => {
    console.log("추억 올리기 모달 추가 예정");
  };

  return (
    <>
      <G.Btn onClick={handleClick}>{getButtonText()}</G.Btn>
    </>
  );
}

export default SizeMBtn;
