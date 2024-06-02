import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Toc from "../components/Toc";
import BigTitle from "../components/BigTitle";
import SmallTitle from "../components/SmallTitle";
import TextHighlight from "../components/TextHighlight";
import Info from "../components/Info";
import Definition from "../components/Definition";
import Body from "../components/Body";
import Code from "../components/Code";
import Practice from "../components/Practice";
import Reference from "../components/Reference";
import Table from "../components/Table";

export default function Doc6() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc list={["Rect 충돌", "스프라이트 충돌", "Ray casting"]} />

        <Body>
          <BigTitle>충돌</BigTitle>
          <p>이 글에서는 충돌을 처리하는 3가지 방법을 배운다.</p>
          <br />

          <SmallTitle id="0">Rect 충돌</SmallTitle>
          <p>
            플랫포머 게임을 만들려고 하면 바닥 타일이나 오브젝트 간의 충돌을
            구현해야 한다. 가장 간단한 방법은 Rect 객체의 충돌을 확인하는
            것이다. Rect 객체의 <TextHighlight>colliderect()</TextHighlight>{" "}
            메서드를 사용하면 Rect 객체 간의 충돌을 확인할 수 있다.{" "}
            <Reference location="../1#3">
              pygame 개론 - 자주 쓰는 클래스
            </Reference>
            아래는 충돌을 구현한 예시 코드이다.
          </p>
          <Code>
            {``}
          </Code>
          <SmallTitle id="1">스프라이트 충돌</SmallTitle>
          <SmallTitle id="2">Ray casting</SmallTitle>
        </Body>
      </div>
    </div>
  );
}
