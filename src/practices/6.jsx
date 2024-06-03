import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Reference from "../components/Reference";
import Header from "../components/Header";
import range from "../js/range";

export default function P6() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 플레이어와 적"
          description="방향키로 움직일 수 있는 플레이어와 플레이어를 향해 움직이는 적 클래스를 구현해보자."
          importance={4}
        ></Quiz>
      </div>
    </div>
  );
}
