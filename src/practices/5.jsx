import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Reference from "../components/Reference";
import Header from "../components/Header";
import range from "../js/range";

export default function P5() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 플레이어와 적"
          description="방향키로 움직일 수 있는 플레이어와 플레이어를 향해 움직이는 적 클래스를 구현해보자."
          importance={4}
        >
          <Code fileName="object.py">
            {`import pygame as pg
import random


class Player(pg.sprite.Sprite):
    def __init__(self, x, y, w, h):
        super().__init__()
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.rect = pg.Rect(x, y, w, h)
        self.hp = 100

    def update(self, display):
        if pg.key.get_pressed()[pg.K_LEFT]:
            self.x -= 5
        elif pg.key.get_pressed()[pg.K_RIGHT]:
            self.x += 5
        elif pg.key.get_pressed()[pg.K_UP]:
            self.y -= 5
        elif pg.key.get_pressed()[pg.K_DOWN]:
            self.y += 5

        self.rect = pg.Rect(self.x, self.y, self.w, self.h)
        pg.draw.rect(display, (255, 0, 0), self.rect)


class Enemy(pg.sprite.Sprite):
    group = pg.sprite.Group()

    def __init__(self, x, y, w, h):
        super().__init__()
        self.group.add(self)
        self.rect = pg.Rect(x, y, w, h)

    def update(self, display, player):
        sign = lambda num: (num > 0) - (num < 0)
        x = sign(player.x - self.rect.x) * 2
        y = sign(player.y - self.rect.y) * 2
        self.rect.move_ip(x, y)

        pg.draw.rect(display, (0, 0, 255), self.rect)`}
          </Code><br/>
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
            Enemy.group.update(self.screen, self.player)
            if pg.sprite.spritecollide(self.player, Enemy.group, True):
                self.player.hp -= 10

            self.clock.tick(self.FPS)
            pg.display.flip()


if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
        </Quiz>
      </div>
    </div>
  );
}
