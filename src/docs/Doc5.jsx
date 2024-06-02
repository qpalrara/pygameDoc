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

export default function Doc5() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc list={["스프라이트 클래스", "그룹 클래스"]} />

        <Body>
          <BigTitle>스프라이트</BigTitle>
          <p>이 글에서는 pygame의 스프라이트 모듈을 다룬다.</p>
          <br />

          <SmallTitle id="0">스프라이트 클래스</SmallTitle>
          <p>
            플레이어나 적 같은 객체를 구현하기 위해서 스프라이트 클래스를 사용할
            수 있다. 스프라이트는 pygame.sprite.Sprite 클래스를 상속받아서 만들
            수 있다. 아래는 간단한 스프라이트의 예시이다.
          </p>
          <Code fileName="player.py">
            {`class Player(pg.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.rect = self.image.get_rect(center=(x, y))

    def update(self, display):
        pg.draw.rect(display, (255, 0, 0), self.rect)`}
          </Code>
          <br />
          <Definition
            title="pg.sprite.Sprite"
            methods={[
              [
                "update(*args, **kwargs)",
                "None",
                "기본적으로 존재하는 메소드지만 아무 기능도 포함하고 있지 않다. override하여 사용하며 그룹에서 스프라이트를 업데이트할 때 사용한다.",
              ],
              [
                "kill()",
                "None",
                "이 스프라이트가 포함된 모든 그룹에서 제거한다. 이는 스프라이트를 완전히 제거하는 것이 아니며 이 메소드를 호출한 뒤에도 다시 사용할 수 있다.",
              ],
              [
                "groups",
                "list",
                "이 스프라이트가 포함된 그룹 리스트를 반환한다.",
              ],
            ]}
            importance={5}
          >
            스프라이트 클래스는 그 자체로는 아무런 의미가 없다. 이 클래스를
            상속받아서 사용해야 한다.
          </Definition>
          <br />
          <Info title="스프라이트 클래스를 사용하는 이유?">
            스프라이트 클래스를 사용하는 이유는 객체간의 충돌을 간단하게
            처리하기 위해서이다. 특히, 타일맵을 사용하여 충돌을 처리할 때
            유용하다. 아래의 함수를 통해 충돌을 쉽게 다룰 수 있다. 충돌을 처리할
            필요가 없거나 Rect를 통해 충돌을 처리했다면 굳이 스프라이트 클래스를
            사용하지 않아도 된다.
          </Info>
          <br />
          <Definition
            title="pg.sprite.spritecollide(sprite, group, dokill)"
            red={true}
            importance={5}
          >
            group안에 존재하는 스프라이트 중에서 충돌한 것을 리스트로 반환한다.
            dokill이 True이면 충돌한 스프라이트를 그룹에서 제거한다.
          </Definition>
          <br />
          <br />
          <SmallTitle id="1">그룹 클래스</SmallTitle>
          <p>
            여러개의 스프라이트를 다루기 위해서 그룹 클래스를 사용한다. 아래는
            그룹을 사용하는 예시이다.
          </p>
          <Code fileName="object.py" highlight={[15, 19]}>
            {`import pygame as pg
import random

class Player(pg.sprite.Sprite):
    def __init__(self, x, y, w, h):
        super().__init__()
        self.rect = pg.Rect(x, y, w, h)
        self.hp = 100

    def update(self, display):
        pg.draw.rect(display, (255, 0, 0), self.rect)


class Enemy(pg.sprite.Sprite):
    group = pg.sprite.Group()

    def __init__(self, x, y, w, h):
        super().__init__()
        self.group.add(self)
        self.rect = pg.Rect(x, y, w, h)

    def update(self, display):
        x = random.randint(-20, 20)
        y = random.randint(-20, 20)
        self.rect.move_ip(x, y)

        pg.draw.rect(display, (0, 0, 255), self.rect)`}
          </Code>
          <br />
          <Info red={true} title="클래스 변수">
            그룹을 변수로 저장해서 사용해도 되지만 클래스 변수로 사용하는 것이
            더 간편하다.
          </Info>
          <br />
          <Code>
            {`import pygame as pg
from object import Player, Enemy

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 400, 400
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.player = Player(200, 200, 50, 50)
        Enemy(100, 100, 50, 50)
        Enemy(200, 200, 50, 50)
        Enemy(300, 300, 50, 50)

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            self.player.update(self.screen)
            Enemy.group.update(self.screen)
            if pg.sprite.spritecollide(self.player, Enemy.group, True):
                self.player.hp -= 10

            self.clock.tick(self.FPS)
            pg.display.flip()


if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
          <Definition
            title="pg.sprite.Group"
            methods={[
              [
                "sprites()",
                "list",
                "그룹이 포함하고 있는 모든 스프라이트를 리스트로 반환한다.",
              ],
              ["add(*sprites)", "None", "이 그룹에 스프라이트를 추가한다."],
              [
                "remove(*sprites)",
                "None",
                "이 그룹에서 스프라이트를 제거한다.",
              ],
              [
                "has(*sprite)",
                "bool",
                <div>
                  이 그룹에 스프라이트가 있는지 확인한다.{" "}
                  <TextHighlight>in</TextHighlight>연산자를 사용해도 된다.{" "}
                  <TextHighlight>ex) if sprite in group:</TextHighlight>
                </div>,
              ],
              [
                "update(*args, **kwargs)",
                "None",
                "포함된 모든 스프라이트의 update 메소드를 호출한다.",
              ],
              [
                "empty()",
                "None",
                "이 그룹에 포함된 모든 스프라이트를 제거한다.",
              ],
            ]}
            importance={5}
          >
            그룹 클래스는 여러 스프라이트를 포함하는 컨테이너이다. update
            메소드를 통해 그룹에 포함된 모든 스프라이트를 업데이트할 수 있다.
          </Definition>
          <br />
          <Practice id="5">스프라이트 다루기</Practice>
          <br />
          <br />
          <br />
        </Body>
      </div>
    </div>
  );
}
