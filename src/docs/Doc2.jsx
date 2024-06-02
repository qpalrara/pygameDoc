import React from "react";
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

export default function Doc2() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc
          list={[
            "종료 이벤트",
            "마우스 입력 이벤트",
            "키 입력 이벤트",
            "사용자 지정 이벤트",
          ]}
        />

        <Body>
          <BigTitle>이벤트</BigTitle>
          <p>이 글에서는 pygame의 이벤트 처리 방식을 설명한다.</p>
          <br />

          <SmallTitle id="0">종료 이벤트</SmallTitle>
          <p>
            앞서서 종료 이벤트를 처리하는 방법을 배웠다.{" "}
            <Reference location="/1#1">
              pygame개론 - pygame의 기본 구조
            </Reference>{" "}
            참고.
            <br />
            이처럼 pygame은 이벤트가 발생하면 event queue에 저장하는 방식으로
            이벤트를 처리한다. 이 때{" "}
            <TextHighlight>pg.event.get()</TextHighlight> 함수를 실행하면 event
            queue에 있는 모든 이벤트를 가져온다. (결과적으로 event queue는
            비워진다.) <TextHighlight>pg.QUIT</TextHighlight> 은 이러한 이벤트
            타입의 일종으로 창을 닫을 때 발생한다. 즉, 창을 정상적으로 닫기
            위해서 항상 실행해야 하는 것이다.
          </p>
          <Info title="event와 event type">
            아래의 코드를 실행해보자. 256이 실행되는 것을 확인할 수 있다.
            pg.QUIT은 pg.event.Event 객체의 속성인 event type으로 int형
            상수이다.
            <br />
            <br />
            <Code fileName="main.py">{`import pygame as pg 
print(pg.QUIT)`}</Code>
          </Info>
          <br />
          <SmallTitle id="1">마우스 입력 이벤트</SmallTitle>
          <p>
            마우스와 관련된 이벤트 타입으로는{" "}
            <TextHighlight>pg.MOUSEBUTTONDOWN</TextHighlight>{" "}
            <TextHighlight>pg.MOUSEBUTTONUP</TextHighlight>{" "}
            <TextHighlight>pg.MOUSEMOTION</TextHighlight> 이 있으며 각각
            마우스를 눌렀을 때, 마우스를 땠을 때, 마우스를 움직였을 때 발생한다.
            이러한 type을 갖는 이벤트는 pos 속성을 갖으며 마우스의 위치를
            나타낸다.
          </p>
          <Info title="이벤트 객체의 속성" red={true}>
            이벤트 객체는 이벤트 타입에 따라 각각 특별한 속성을 갖는다. 따라서
            이벤트의 타입이 마우스 입력 이벤트가 아닐 때 pos 속성에 접근하면
            안된다.
          </Info>
          <Info title="마우스 좌표">
            event.pos 이외에 마우스 좌표를 얻는 방법으로{" "}
            <TextHighlight>pg.mouse.get_pos()</TextHighlight> 가 있다.
            event.pos는 event type이 마우스 관련 이벤트일 때만 사용할 수
            있으므로 일반적으로{" "}
            <TextHighlight>pg.mouse.get_pos()</TextHighlight> 를 사용한다.
          </Info>
          <br />
          <SmallTitle id="2">키 입력 이벤트</SmallTitle>
          <p>
            키 입력과 관련된 이벤트 타입으로는
            <TextHighlight>pg.KEYDOWN</TextHighlight>{" "}
            <TextHighlight>pg.KEYUP</TextHighlight> 이 있으며 각각 키보드를
            눌렀을 때, 땠을 때 발생한다. 이러한 type을 갖는 이벤트는 key와
            unicode 속성을 갖으며 key는 누른 키의 코드(상수)를, unicode는 누른
            키의 문자를 나타낸다. key는 pg.K_로 시작하는 상수로 표현되며 아래는
            그 예시이다.
          </p>
          <Table
            head={["event type", "description"]}
            body={[
              ["pg.K_a", "a"],
              ["pg.K_0", "0"],
              ["pg.K_BACKSPACE", "backspace"],
              ["pg.K_ESCAPE", "esc"],
              ["pg.K_SPACE", "스페이스바"],
              ["pg.K_RETURN", "엔터키"],
              ["pg.K_LEFT", "왼쪽 화살표"],
              ["pg.K_RIGHT", "오른쪽 화살표"],
              ["pg.K_UP", "위쪽 화살표"],
              ["pg.K_DOWN", "아래쪽 화살표"],
            ]}
          />
          <p>
            unicode는{" "}
            <Reference location="../practice/2">실습 2 이벤트 다루기</Reference>{" "}
            에서 추가로 설명한다.
          </p>
          <br />
          <SmallTitle id="3">사용자 지정 이벤트</SmallTitle>
          <p>
            <TextHighlight>pg.event.Event(type: int)</TextHighlight> 로 사용자
            지정 이벤트를 만들 수 있다. 이 때 type은 pygame에서 미리 정한 이벤트
            타입과 겹치면 안되는데 pygame의 마지막 이벤트 타입을 나타내는 상수인{" "}
            <TextHighlight>pg.USEREVENT</TextHighlight> 를 이용하면 된다.
          </p>
          <Code highlight={[10, 20, 21, 22, 23]}>{`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 600
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.new_event = pg.event.Event(pg.USEREVENT + 1)

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()
                if event.type == pg.USEREVENT + 1:
                    print("New event")

            pg.event.post(self.new_event)

            self.clock.tick(self.FPS)

            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
          <p>
            <br />위 코드는 매 프레임마다 사용자 정의 이벤트를 호출하여 New
            event를 출력하는 코드이다. 23번째 줄의{" "}
            <TextHighlight>pg.event.post(Event)</TextHighlight> 를 사용하여
            이벤트를 event queue에 추가할 수 있다. 이렇게 추가된 이벤트는 다음
            event loop에서 처리된다.
          </p>
          <br />
          <Practice id="2">이벤트 다루기</Practice>
          <br />
          <br />
          <br />
        </Body>
      </div>
    </div>
  );
}
