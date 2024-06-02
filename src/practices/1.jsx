import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Header from "../components/Header";

export default function P1() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 사각형 그리기"
          description="400x400 창에 크기가 100x200인 빨간색 사각형을 그려보자."
          img={<img src="/pygameDoc/imgs/prac1_1.png" width={300} height={300} />}
          importance={2}
        >
          <Code fileName="main.py" highlight={[10, 21]}>
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 400, 400 
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.rect = pg.Rect(100, 100, 100, 200)

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            pg.draw.rect(self.screen, (255,0,0), self.rect)

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
        </Quiz>
        <Quiz
          title="2. 네모네모 멈뭄미"
          description="파미게밈믜 뭔과 선믈 미묨해서 네모네모 멈뭄미를 그려보자."
          img={<img src="/pygameDoc/imgs/prac1_2.png" width={500} height={300} />}
        >
          <Code
            fileName="main.py"
            highlight={[10, 11, 12, 13, 14, 25, 26, 27, 28, 29, 30]}
          >
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 400, 600
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.rects = [
            pg.Rect(100, 50, 200, 200),
            pg.Rect(150, 150, 100, 100),
            pg.Rect(130, 250, 140, 200),
        ]

    def run(self):
        while True:
            self.screen.fill((255, 255, 255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            for rect in self.rects:
                pg.draw.rect(self.screen, (0, 0, 0), rect, width=3)
            pg.draw.line(self.screen, (0, 0, 0), (200, 450), (200, 400), width=3)
            pg.draw.circle(self.screen, (0, 0, 0), (200, 210), 15)
            pg.draw.circle(self.screen, (0, 0, 0), (170, 130), 10)
            pg.draw.circle(self.screen, (0, 0, 0), (230, 130), 10)

            self.clock.tick(self.FPS)
            pg.display.flip()


if __name__ == "__main__":
    app = App()
    app.run()
`}
          </Code>
        </Quiz>
        <Quiz title="3. 튕기는 공" description="화면에서 중력을 받으면서 튕기는 공을 그려보자." img={<img src="/pygameDoc/imgs/prac1_3.gif" width={300} height={300}/>} importance={4}>
          <Code fileName="main.py" highlight={[10, 11, 12, 23, 24,25,26,27,28,29,30,31,32,33]}>
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 400, 400
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.x, self.y = 200, 100
        self.vx, self.vy = 400, 0
        self.ax, self.ay = 0, 1400

    def run(self):
        while True:
            self.screen.fill((255, 255, 255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            self.vx += self.ax / self.FPS
            self.vy += self.ay / self.FPS
            self.x += self.vx / self.FPS
            self.y += self.vy / self.FPS
            if self.y > self.HEIGHT:
                self.y = self.HEIGHT
                self.vy = -self.vy
            if self.x > 400 or self.x < 0:
                self.vx = -self.vx
            
            pg.draw.circle(self.screen, (0, 0, 0), (int(self.x), int(self.y)), 10)

            self.clock.tick(self.FPS)
            pg.display.flip()


if __name__ == "__main__":
    app = App()
    app.run()
`}
          </Code>
        </Quiz>
      </div>
    </div>
  );
}
