import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Reference from "../components/Reference";
import Header from "../components/Header";
import range from "../js/range";

export default function P2() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 마우스 이벤트"
          description="화면을 클릭한 위치에 점점 커지는 원을 그려보자."
          importance={3}
          img={<img src="/pygameDoc/imgs/prac2_1.gif" height={150} />}
        >
          <Code highlight={range(31, 38)}>{`import pygame as pg

class Ball:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.radius = 0
    
    def draw(self, screen):
        # 값을 부드럽게 증가시킬 때 자주 사용되는 방법이다.
        self.radius += (100-self.radius)/10
        pg.draw.circle(screen, (0,0,0), (self.x, self.y), self.radius)

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 600
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.clicking = False

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()
                elif event.type == pg.MOUSEBUTTONDOWN:
                    self.ball = Ball(*event.pos)
                    self.clicking = True
                elif event.type == pg.MOUSEBUTTONUP:
                    self.clicking = False
                    
            if self.clicking:
                self.ball.draw(self.screen)

            self.clock.tick(self.FPS)

            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
          <br />
          mouse모듈의 get_pressed() 함수를 이용하여 아래 코드처럼 작성할 수도
          있다.
          <br />
          <br />
          <Code highlight={[33, 34]}>{`import pygame as pg

class Ball:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.radius = 0
    
    def draw(self, screen):
        # 값을 부드럽게 증가시킬 때 자주 사용되는 방법이다.
        self.radius += (100-self.radius)/10  
        pg.draw.circle(screen, (0,0,0), (self.x, self.y), self.radius)

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 600
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()
                elif event.type == pg.MOUSEBUTTONDOWN:
                    self.ball = Ball(*event.pos)
                    
            if pg.mouse.get_pressed()[0]:
                self.ball.draw(self.screen)

            self.clock.tick(self.FPS)

            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
        </Quiz>
        <Quiz
          title="2. 직사각형 움직이기"
          description="wasd를 누르는 동안 움직이는 직사각형을 만들어보자."
        >
          <Code
            highlight={[...range(21, 38), ...range(40, 47), 49]}
          >{`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 450
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.x, self.y = 100, 100
        self.w, self.a, self.s, self.d = False, False, False, False

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()
                elif event.type == pg.KEYDOWN:
                    if event.key == pg.K_w:
                        self.w = True
                    elif event.key == pg.K_a:
                        self.a = True
                    elif event.key == pg.K_s:
                        self.s = True
                    elif event.key == pg.K_d:
                        self.d = True
                elif event.type == pg.KEYUP:
                    if event.key == pg.K_w:
                        self.w = False
                    elif event.key == pg.K_a:
                        self.a = False
                    elif event.key == pg.K_s:
                        self.s = False
                    elif event.key == pg.K_d:
                        self.d = False

            if self.w:
                self.y -= 5
            if self.a:
                self.x -= 5
            if self.s:
                self.y += 5
            if self.d:
                self.x += 5

            pg.draw.rect(self.screen, (255,0,0), (self.x, self.y, 50, 100))

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
          <br />
          key 모듈의 get_pressed() 함수를 사용하면 현재 키를 누르고 있는
          상태인지를 쉽게 판단할 수 있다.
          <br />
          <br />
          <Code highlight={[...range(21, 30)]}>{`import pygame as pg

    class App:
        def __init__(self):
            pg.init()
            self.RES = self.WIDTH, self.HEIGHT = 800, 450
            self.FPS = 60
            self.screen = pg.display.set_mode(self.RES)
            self.clock = pg.time.Clock()
            self.x, self.y = 100, 100
    
        def run(self):
            while True:
                self.screen.fill((255,255,255))
    
                events = pg.event.get()
                for event in events:
                    if event.type == pg.QUIT:
                        exit()
    
                if pg.key.get_pressed()[pg.K_w]:
                    self.y -= 5
                if pg.key.get_pressed()[pg.K_a]:
                    self.x -= 5
                if pg.key.get_pressed()[pg.K_s]:
                    self.y += 5
                if pg.key.get_pressed()[pg.K_d]:
                    self.x += 5
    
                pg.draw.rect(self.screen, (255,0,0), (self.x, self.y, 50, 100))
    
                self.clock.tick(self.FPS)
                pg.display.flip()
    
    if __name__ == "__main__":
        app = App()
        app.run()`}</Code>
        </Quiz>
        <Quiz
          title="3. 텍스트 input box"
          description={
            <>
              텍스트를 입력, 삭제가 가능한 input box를 만들어 보자. 문자열은
              화면에 출력해도 되고 print문으로 출력해도 된다. 화면에 출력하는
              경우 아래의 코드를 활용할 수 있다. 아래의 코드는 consolas 폰트로
              (100, 100) 좌표에 hello를 출력하는 코드이다. 자세한 내용은
              <Reference location="../4#1">
                {" "}
                텍스트 - 텍스트 그리기
              </Reference>{" "}
              에서 다룬다.
              <br />
              <br />
              <Code>
                {`font = pg.font.SysFont("consolas", 30)
self.screen.blit(font.render("hello", True, (0,0,0)), (100, 100))`}
              </Code>
            </>
          }
          importance={4}
        >
          <Code highlight={[21, 22, 23, 24, 25, 26, 27]}>{`import pygame as pg

        class App:
            def __init__(self):
                pg.init()
                self.RES = self.WIDTH, self.HEIGHT = 800, 600
                self.FPS = 60
                self.screen = pg.display.set_mode(self.RES)
                self.clock = pg.time.Clock()
                self.font = pg.font.SysFont("consolas", 30)
                self.text = ""
        
            def run(self):
                while True:
                    self.screen.fill((255,255,255))
        
                    events = pg.event.get()
                    for event in events:
                        if event.type == pg.QUIT:
                            exit()
                        elif event.type == pg.KEYDOWN:
                            if event.key == pg.K_BACKSPACE:
                                self.text = self.text[:-1]
                            else:
                                self.text += event.unicode
                    
                    self.screen.blit(self.font.render(self.text, True, (0,0,0)), (100, 100))
        
                    self.clock.tick(self.FPS)
        
                    pg.display.flip()
        
        if __name__ == "__main__":
            app = App()
            app.run()`}</Code>
        </Quiz>
        <Quiz
          title="4. 슬라이더 클래스"
          description={
            <div>
              마우스로 움직이고 0~1 사이의 값을 얻을 수 있는 슬라이더 클래스를
              만들어보자. Hint. 아래의 메소드를 모두 구현해보자.
              <ul className="list-disc list-inside">
                <li>
                  __init__( self, x: int, y: int, slider_width: int,
                  slider_height: int, track_width: int, color: tuple[int, int,
                  int], initioal_value: float = 0.5, ):
                </li>
                <li>
                  update(self, events, screen) # 스크린에 슬라이더를 그리고
                  이벤트 처리
                </li>
                <li>get_value(self) # 0~1 사이의 슬라이더 값을 반환</li>
              </ul>
            </div>
          }
          importance={5}
        >
          <Code title="slider.py">
            {`import pygame as pg

class Slider:
    """
    update()로 업데이트\n
    get_value()로 슬라이더의 값 0~1 반환
    """
    def __init__(
        self,
        x: int,
        y: int,
        slider_width: int,
        slider_height: int,
        track_width: int,
        color: tuple[int, int, int],
        initioal_value: float = 0.5,
    ):
        self.start_x = x
        self.start_y = y
        self.x = x + track_width * initioal_value
        self.slider_width = slider_width
        self.slider_height = slider_height
        self.track_width = track_width
        self.color = color
        self.__clicking = False
        self.rect = pg.Rect(0, 0, self.slider_width, self.slider_height)

    def update(self, events, screen: pg.Surface):
        self.rect.center = (self.x, self.start_y)
        self.__draw(screen)
        self.__event_handler(events)
        if self.__clicking:
            self.x = max(pg.mouse.get_pos()[0], self.start_x)
            self.x = min(self.x, self.start_x + self.track_width)

    def get_value(self):
        return (self.x - self.start_x) / self.track_width

    def __draw(self, screen: pg.Surface):
        pg.draw.line(
            screen,
            (0, 0, 0),
            (self.start_x, self.start_y),
            (self.start_x + self.track_width, self.start_y),
            2,
        )
        pg.draw.rect(screen, self.color, self.rect)

    def __event_handler(self, events):
        for event in events:
            if event.type == pg.MOUSEBUTTONDOWN:
                if (self.rect.collidepoint(event.pos)):
                    self.__clicking = True
            if event.type == pg.MOUSEBUTTONUP:
                self.__clicking = False`}
          </Code>
          <br />
          <Code>{`import pygame as pg
        from slider import Slider
        
        class App:
            def __init__(self):
                pg.init()
                self.RES = self.WIDTH, self.HEIGHT = 800, 450
                self.FPS = 60
                self.screen = pg.display.set_mode(self.RES)
                self.clock = pg.time.Clock()
                self.slider = Slider(100, 100, 20, 20, 200, (255, 0, 0))
        
            def run(self):
                while True:
                    self.screen.fill((255,255,255))
        
                    events = pg.event.get()
                    for event in events:
                        if event.type == pg.QUIT:
                            exit()
                    
                    self.slider.update(events, self.screen)
                    print(self.slider.get_value())
        
                    self.clock.tick(self.FPS)
                    pg.display.flip()
        
        if __name__ == "__main__":
            app = App()
            app.run()`}</Code>
        </Quiz>
      </div>
    </div>
  );
}
