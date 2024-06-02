import "./css/App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Reference from "./components/Reference";
import Doc1 from "./docs/Doc1";
import Doc2 from "./docs/Doc2";
import Doc3 from "./docs/Doc3";
import Doc4 from "./docs/Doc4";
import Doc5 from "./docs/Doc5";
import Doc6 from "./docs/Doc6";
import pop from "./js/pop.js";
import P1 from "./practices/1";
import P2 from "./practices/2";
import P3 from "./practices/3"
import P4 from "./practices/4";
import P5 from "./practices/5";
import P6 from "./practices/6";
import Practices from "./practices/practices";

function Bar1() {
  return (
    <div className="w-16 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
  );
}
function Bar2() {
  return (
    <div className="w-16 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
  );
}
function Circle(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center">
      {props.type !== "first" ? (
        <Bar2></Bar2>
      ) : (
        <div className="w-16 h-2"></div>
      )}
      <Link
        className={`flex items-center justify-center bg-gradient-to-br ${
          props.gradient
        } rounded-full h-24 w-24 bounceIn text-white font-bold text-4xl ${
          isHovered ? "bounceIn" : "bounceOut"
        }`}
        to={`/${props.id}`}
        id={`index_${props.id}`}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onClick={(events) => pop(events)}
        data-type="circle"
      >
        {props.id}
      </Link>
      {props.type !== "last" && <Bar1></Bar1>}
    </div>
  );
}
function Title(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h5
      className={`title-font text-xl pb-2 ${
        isHovered ? "smallBounceIn" : "smallBounceOut"
      }`}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Link
        to={`/${props.id + 1}`}
        className={
          ![0, 1, 2, 3, 4, 5].includes(props.id) ? "text-red-500 line-through" : ""
        }
      >
        {props.title}
      </Link>
    </h5>
  );
}
function Subject(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <p
      className={`${isHovered ? "smallBounceIn" : "smallBounceOut"}`}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <HashLink to={`/${props.id + 1}#${props.subId}`}>
        {props.subject}
      </HashLink>
    </p>
  );
}
function Description(props) {
  const description = [
    <Title
      title={props.description.title}
      id={props.id}
      key={props.id}
    ></Title>,
  ];
  for (let i = 0; i <= props.description.subject.length; i++) {
    description.push(
      <Subject
        subject={props.description.subject[i]}
        id={props.id}
        subId={i}
        key={`${props.id}#${i}`}
      ></Subject>
    );
  }
  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        {description}
      </div>
    </div>
  );
}

function Logic(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex items-start justify-center py-4 ${
        isHovered ? "smallBounceIn" : "smallBounceOut"
      }`}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <p>{props.content}</p>
    </div>
  );
}

function Menu() {
  const [on, setOn] = useState(false);
  return (
    <>
      <div
        className="fixed border-2 border-slate-300 top-4 left-4 w-10 h-10 rounded-xl text-center font-bold hover:bg-slate-200 cursor-pointer"
        onClick={() => setOn(true)}
      >
        ☰
      </div>
      <div
        className={`fixed top-1/3 left-1/3 w-1/3 h-1/3 flex justify-center items-center rainbow z-10 rounded-xl ${
          on ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute border-2 border-slate-300 w-10 h-10 rounded-xl right-4 top-4 z-12 text-center font-bold hover:bg-slate-200 cursor-pointer"
          onClick={() => setOn(false)}
        >
          X
        </div>

        <div
          className={`w-full h-[92%] mx-2 bg-slate-50 z-11 rounded-xl ${
            on ? "block" : "hidden"
          }`}
        >
          <div className="mt-6 ml-8 title-font text-lg z-11">
            제작자: qpalrara
            <br />
            <br />
            github:{" "}
            <Reference location="https://github.com/qpalrara" blank={true}>
              https://github.com/qpalrara
            </Reference>
            <br />
            <br />
            버전: 0.0.0
            <br />
            <br />
            <Reference location="/practices">실습 모아보기</Reference>
          </div>
        </div>
      </div>
    </>
  );
}

function Main() {
  const gradientList = [
    "from-red-500 to-orange-400",
    "from-orange-500 to-yellow-300",
    "from-yellow-400 to-yellow-200",
    "from-green-500 to-lime-300",
    "from-emerald-500 to-teal-300",
    "from-cyan-500 to-sky-300",
    "from-blue-500 to-blue-300",
    "from-indigo-500 to-indigo-300",
    "from-fuchsia-500 to-fuchsia-300",
  ];

  const circleList = [];
  circleList.push(
    <Circle gradient={gradientList[0]} id={1} type="first" key={1}></Circle>
  );
  for (let i = 2; i < 9; i++) {
    circleList.push(
      <Circle gradient={gradientList[i - 1]} id={i} type="" key={i}></Circle>
    );
  }
  circleList.push(
    <Circle gradient={gradientList[8]} id={9} type="last" key={9}></Circle>
  );

  const descriptions = [
    {
      title: "pygame 개론",
      subject: [
        "pygame 이란?",
        "pygame의 기본 구조",
        "객체지향 프로그래밍",
        "자주 쓰는 클래스",
        "자주 쓰는 함수",
      ],
    },
    {
      title: "이벤트",
      subject: [
        "종료 이벤트",
        "마우스 입력 이벤트",
        "키 입력 이벤트",
        "사용자 지정 이벤트",
      ],
    },
    {
      title: "이미지",
      subject: ["이미지 그리기", "이미지 변형하기"],
    },
    {
      title: "텍스트",
      subject: ["텍스트 그리기"],
    },
    {
      title: "스프라이트",
      subject: ["스프라이트 클래스", "그룹 클래스"],
    },
    {
      title: "충돌",
      subject: ["Rect 충돌", "스프라이트 충돌", "Ray casting"],
    },
    { title: "파티클", subject: ["파티클 구현"] },
    { title: "음악", subject: ["배경음악", "효과음"] },
    { title: "로직 구현", subject: [] },
  ];

  const descriptionList = [];
  for (let i = 0; i < descriptions.length; i++) {
    descriptionList.push(
      <Description description={descriptions[i]} id={i} key={i}></Description>
    );
  }

  const logics = [
    "스크롤",
    "메뉴 및 스테이지 관리",
    "멀티 플레이",
    "애니메이션",
    "3D",
    "파일 처리",
    "pymunk (물리 엔진)",
    "타일맵",
    "화면 흔들림",
  ];

  const logicList = [];
  for (let i of logics) {
    logicList.push(<Logic content={i} key={i}></Logic>);
  }

  return (
    <div className="flex justify-start items-start h-full overflow-x-scroll text-font">
      <Menu />
      <div
        className="grid grid-cols-9 grid-rows-2 p-12 pt-60 min-w-max"
        id="screen"
      >
        {circleList}
        {descriptionList}
      </div>
      <div className="pt-60 pr-12 text-font" id="logic">
        <div className="grid grid-cols-4 grid-rows-2 min-w-max">
          {logicList}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App h-full">
      <BrowserRouter basename="/pygameDoc">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/1" element={<Doc1 />}></Route>
          <Route path="/2" element={<Doc2 />}></Route>
          <Route path="/3" element={<Doc3 />}></Route>
          <Route path="/4" element={<Doc4 />}></Route>
          <Route path="/5" element={<Doc5 />}></Route>
          <Route path="/6" element={<Doc6 />}></Route>

          <Route path="/practice/1" element={<P1 />}></Route>
          <Route path="/practice/2" element={<P2 />}></Route>
          <Route path="/practice/3" element={<P3 />}></Route>
          <Route path="/practice/4" element={<P4 />}></Route>
          <Route path="/practice/5" element={<P5 />}></Route>
          <Route path="/practice/6" element={<P6 />}></Route>

          <Route path="/practices" element={<Practices/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
