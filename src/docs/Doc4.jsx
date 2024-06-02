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

export default function Doc4() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc list={["텍스트 그리기"]} />

        <Body>
          <BigTitle>텍스트</BigTitle>
          <p>이 글에서는 pygame에서 텍스트를 다루는 방법을 배운다.</p>
          <br />

          <SmallTitle id="0">텍스트 그리기</SmallTitle>
          <p>
            텍스트도 이미지와 마찬가지로 Surface이다. 당연하게도{" "}
            <TextHighlight>blit</TextHighlight> 으로 그릴 수 있다. 텍스트를
            그릴려면 먼저 폰트를 로드해야 한다. 폰트는{" "}
            <TextHighlight>pygame.font.SysFont</TextHighlight> 혹은{" "}
            <TextHighlight>pygame.font.Font</TextHighlight> 로 로드할 수 있다.
          </p>
          <Definition
            title="pygame.font.SysFont(name, size, bold=False, italic=False) -> Font"
            red={true}
            importance={4}
          >
            시스템에 설치된 폰트를 로드한다.{" "}
            <TextHighlight>ex) consolas</TextHighlight> name은 폰트 이름, size는
            폰트 크기이다.
          </Definition>
          <Definition
            title="pygame.font.Font(filepath, size) -> Font"
            red={true}
            importance={4}
          >
            폰트 파일에서 폰트를 로드한다. filepath는 폰트가 저장된 경로, size는
            폰트 크기이다.
          </Definition>
          <Definition
            title="Font"
            properties={[
              [
                "bold",
                "bool",
                <div>
                  폰트가 <TextHighlight>가짜로</TextHighlight> 볼드인지를 get
                  하거나 set 할 수 있다. 가짜로 볼드인 이유는 하나의 폰트 파일은
                  볼드체를 포함할 수 없기 때문에 pygame에서 강제로 볼드체로
                  보이게 꾸미는 것이기 때문이다. 만약 볼드체를 사용하고 싶다면
                  볼드 폰트 파일을 사용하는 것이 좋다.
                </div>,
              ],
              [
                "italic",
                "bool",
                <div>
                  폰트가 <TextHighlight>가짜로</TextHighlight> 이탤릭인지를 get
                  하거나 set 할 수 있다.
                </div>,
              ],
              [
                "underline",
                "bool",
                "폰트가 밑줄이 있는지를 get 하거나 set 할 수 있다.",
              ],
            ]}
            methods={[
              [
                "render(text, antialias, color)",
                "Surface",
                "텍스트를 렌더링한 Surface 객체를 반환한다. antialias 인자가 True이면 글자의 모서리를 부드럽게 처리한다.",
              ],
            ]}
            importance={4}
          >
            위의 함수를 실행하면 반환되는 Font 객체이다.
          </Definition>
          <p>
            텍스트를 그리는 과정은 먼저 Font 객체를 로드하고 render 메소드를
            사용하여 글자가 렌더링된 Surface 객체를 받은 뒤, 다른 Surface에 blit
            하는 방식으로 하면 된다. 아래는 시스템 폰트인 consolas로 Hello,
            World! 를 출력하는 코드이다.
          </p>
          <Code highlight={[10, 21]}>{`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 400, 250
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.font = pg.font.SysFont("consolas", 30)

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            self.screen.blit(self.font.render("Hello, World!", True, (0,0,0)), (100, 100))

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
          <br />
          <Practice id="4">텍스트 다루기</Practice>
          <br />
          <br />
          <br />
        </Body>
      </div>
    </div>
  );
}
