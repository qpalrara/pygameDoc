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

export default function Doc3() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc list={["이미지 그리기", "이미지 변형하기"]} />

        <Body>
          <BigTitle>이미지</BigTitle>
          <p>이 글에서는 pygame에서 이미지를 다루는 방법을 설명한다.</p>
          <br />

          <SmallTitle id="0">이미지 그리기</SmallTitle>
          <p>
            pygame에는 이미지를 다루는 모듈인{" "}
            <TextHighlight>pygame.image</TextHighlight> 모듈이 있다. 그러나
            이미지 자체를 나타내는 클래스는 없다. 왜냐하면 이미지를 Surface
            객체로 다루기 때문이다. 이미지는{" "}
            <TextHighlight>pygame.image.load(filename)</TextHighlight> 으로
            로드할 수 있다. 이 함수의 반환값은 Surface 객체이다. 이미지를 그리는
            것은 기존의 Surface 객체와 마찬가지로 blit 함수로 그릴 수 있다.
          </p>
          <Code highlight={[10, 21]}>{`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 450
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.image = pg.image.load("./image.png").convert()

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            self.screen.blit(self.image, (0, 0))

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
          <Info title="이미지 픽셀 포맷 변경">
            pygame에서는 이미지의 픽셀 포맷을 현재 디스플레이의 픽셀 포맷으로
            변경하여 처리한다. Surface의{" "}
            <TextHighlight>convert()</TextHighlight> 메소드를 사용하면 미리 변환
            과정을 거쳐서 blit 함수의 성능을 향상시킬 수 있다. 이미지를
            변환하면서 투명도를 유지하고 싶다면{" "}
            <TextHighlight>convert_alpha()</TextHighlight> 를 사용하면 된다.
          </Info>
          <br />
          <SmallTitle id="1">이미지 변형하기</SmallTitle>
          <p>
            <TextHighlight>pygame.transform</TextHighlight> 모듈을 사용하면
            Surface를 변형할 수 있다. 아래는 pygame.transform 모듈의 함수들이다.
          </p>
          <Definition
            title="pygame.transform.scale(surface, size) -> Surface"
            red={true}
            importance={4}
          >
            새로운 해상도의 Surface를 반환한다.
          </Definition>
          <Definition
            title="pygame.transform.scale_by(surface, factor) -> Surface"
            red={true}
            importance={5}
          >
            Surface를 동일한 비율로 factor 만큼 확대한다. 보통 이미지의 비율을
            유지해야 하는 경우가 많기 때문에 scale보다는 scale_by를 사용한다.
          </Definition>
          <Definition
            title="pygame.transform.flip(surface, flip_x, flip_y) -> Surface"
            red={true}
            importance={3}
          >
            flip_x와 flip_y는 각각 x, y축으로 뒤집을지를 정하는 불리언이다.
          </Definition>
          <Definition
            title="pygame.transfer.rotate(surface, angle) -> Surface"
            red={true}
            importance={3}
          >
            angle(degree) 만큼 시계 반대 방향으로 회전한 Surface를 반환한다.
            <br />
            <br />
            <Info title="주의사항" red={true}>
              Surface는 항상 x, y축과 평행한 직사각형이기 때문에 90° 단위로
              회전하지 않으면 Surface에 패딩이 생겨서 커지게 된다. 또한
              Surface를 회전할수록 디지털 풍화가 일어나기 때문에 여러번 회전해야 하는
              경우 원본 이미지를 저장해두고 필요할 때마다 원본 이미지를 회전하는
              방식으로 구현해야 한다.
              <div className="flex justify-center">
                <img src="/pygameDoc/imgs/3_rotate.png" height={150} />
              </div>
            </Info>
          </Definition>
          <br/>
          <Practice id="3">이미지 다루기</Practice>
          <br/>
          <br/>
          <br/>
        </Body>
      </div>
    </div>
  );
}
