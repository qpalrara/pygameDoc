import React from "react";
import Practice from "../components/Practice";
import Header from "../components/Header"

export default function Practices() {
  return (
  <>
  <Header/>
  <div className="flex flex-col items-center justify-center text-font">
      <br/><Practice id="1">그림 그리기</Practice><br/>
      <Practice id="2">이벤트 다루기</Practice><br/>
      <Practice id="3">이미지 다루기</Practice><br/>
      <Practice id="4">텍스트 다루기</Practice>
    </div>
  </>
  )
}