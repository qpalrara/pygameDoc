import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Reference from "../components/Reference";
import Header from "../components/Header";
import range from "../js/range";

export default function P4() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 마우스 위치에 텍스트"
          description="마우스 위치에 현재 마우스 좌표를 띄워보자."
          importance={2}
        >
          <Code highlight={[10, 21, 22]}>
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 450
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

            pos = pg.mouse.get_pos()
            self.screen.blit(self.font.render(str(pos), True, (0,0,0)), pos)

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
        </Quiz>
        <Quiz
          title="2. 중앙 정렬"
          description="1번 문제에서 마우스의 위치가 텍스트의 중앙이 되도록 수정하자."
        >
          <Code highlight={[10, 21, 22, 23]}>
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 450
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

            pos = pg.mouse.get_pos()
            text = self.font.render(str(pos), True, (0,0,0))
            self.screen.blit(text, text.get_rect(center=pos))

            self.clock.tick(self.FPS)
            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
        </Quiz>
        <Quiz
          title="3. 버튼 클래스"
          description={
            <div>
              버튼에 텍스트나 이미지를 그리고 클릭 했는지, 클릭 중인지를 알 수
              있는 Button 클래스를 만들어보자. Hint. 아래의 메소드를 모두
              구현해보자.
              <ul className="list-disc list-inside">
                <li>
                  __init__(self, x: int, y: int, width: int, height: int,
                  color: tuple[int, int, int], text: pg.Surface = None, image:
                  pg.Surface = None)
                </li>
                <li>
                  update(self, events, screen) # 스크린에 버튼을 그리고 이벤트
                  처리
                </li>
                <li>clicked(self) # 버튼을 눌렀는지 불리언으로 반환</li>
                <li>clicking(self) # 버튼을 누르고 있는지 불리언으로 반환</li>
              </ul>
            </div>
          }
          importance={5}
        >
          <Code fileName="button.py">{`import pygame as pg

class Button:
    """
    update()로 업데이트\n
    clicked()로 클릭을 했는지 확인\n
    clicking()으로 클릭 중인지 확인
    """

    def __init__(
        self,
        x: int,
        y: int,
        width: int,
        height: int,
        color: tuple[int, int, int],
        text: pg.Surface = None,
        image: pg.Surface = None,
        border: int = 0
    ):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.rect = pg.Rect(x, y, width, height)
        self.color = color
        self.border = border
        self.drawing = True
        self.__clicked = False
        self.__clicking = False
        self.text = text
        if text is not None:
            self.text_rect = self.text.get_rect()
            self.text_rect.center = self.rect.center
        self.image = image
        if image is not None:
            self.image = pg.transform.scale(image, (self.width, self.height))

    # 버튼을 그리고 입력 처리를 관리
    def update(self, events, screen:pg.Surface):
        self.__draw(screen)
        self.__event_handler(events)

    # Rect나 이미지를 그림
    def __draw(self, screen:pg.Surface):
        if self.drawing:
            if self.image is None:
                pg.draw.rect(screen, self.color, self.rect, self.border)
            else:
                screen.blit(self.image, self.rect)
            
            if self.text is not None:
                screen.blit(self.text, self.text_rect)

    # 이벤트 핸들러
    def __event_handler(self, events):
        for event in events:
            if event.type == pg.MOUSEBUTTONDOWN:
                if self.rect.collidepoint(event.pos):
                    self.__clicked = not self.__clicked
                    self.__clicking = True
            elif event.type == pg.MOUSEBUTTONUP:
                self.__clicking = False

    # 클릭 되었는지
    def clicked(self) -> bool:
        if self.__clicked:
            self.__clicked = False
            return True
        return False

    # 클릭 중인지
    def clicking(self) -> bool:
        return self.__clicking`}</Code>
          <br />
          <Code>{`import pygame as pg
from button import Button

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 450
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.button = Button(100, 100, 200, 100, (255, 0, 0))

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()
            
            self.button.update(events, self.screen)
            print(self.button.clicked(), self.button.clicking())

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
