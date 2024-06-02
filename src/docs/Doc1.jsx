import React, { useState } from "react";
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

export default function Doc1() {
  return (
    <div className="flex flex-col h-full text-font">
      <Header />
      <div className="w-full overflow-y-auto flex-grow">
        <Toc
          list={[
            "pygame이란?",
            "pygame의 기본 구조",
            "객체 지향 프로그래밍",
            "자주 쓰는 클래스",
            "자주 쓰는 함수",
          ]}
        />

        <Body>
          <BigTitle>Pygame 개론</BigTitle>
          <p>
            이 글에서는 python의 모듈인 pygame에 대한 전반적인 구조를 설명한다.
          </p>
          <br />

          <SmallTitle id="0">pygame이란?</SmallTitle>
          <p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pygame_logo.svg/2560px-Pygame_logo.svg.png"
              className="object-scale-down h-36 w-4/6"
            />
            <br />
            pygame은 비디오 게임 제작을 위해 설계된 모듈이다.
            <br />
            <br />
            pygame의 장점으로는
            <br />
          </p>
          <ol className="list-decimal space-y-1">
            <li>
              쉽다.
              <br />
              파이썬만 알고 있어도 쉽게 게임 개발이 가능하다. 심지어 함수도 많지
              않아서 빠르게 학습할 수 있다.
            </li>
            <li>
              프로그래밍 실력을 기를 수 있다. <br />
              pygame에서 제공하는 기능이 얼마 없다 보니 처음부터 구현해나가는
              재미가 있다.
            </li>
          </ol>
          <p>
            근데 pygame은 단점도 많다. <br />
          </p>
          <ol className="list-decimal list-outside space-y-1">
            <li>
              매우 느리다. <br />
              일부 함수가 C와 어셈블리 코드로 구현되었다고 하지만 그럼에도
              연산이 조금만 많아지면 프레임이 떨어지는 낮은 성능을 보여준다.
            </li>
            <li>
              대부분의 기능을 직접 구현해야 한다.
              <br />
              유니티 같은 게임엔진에서는 기본적으로 제공하는 타일맵이나
              스크롤조차도 pygame에서는 직접 구현해야 한다.
            </li>
            <li>
              게임 개발에 한계가 있다. <br />
              제공하는 기능이 적다 보니 3D 개발이나 멀티 플레이 구현 등이 거의
              불가능하다. 물론 외부 모듈을 사용하면 가능하기는 하지만 3D 개발의
              경우 유니티에서는 버튼 하나만 누르면 되지만 pygame에서는 수십 줄의
              코드를 작성해야 한다.
            </li>
            <li>
              호환성이 너무 안 좋다. <br />
              다른 pygame 관련 모듈을 써보면 웬만하면 작동하지 않는다.
            </li>
          </ol>
          <br />

          <SmallTitle id="1">pygame의 기본 구조</SmallTitle>
          <p>pygame의 가장 기본적인 구조는 다음과 같다.</p>
          <Code title="main.py">
            {`import pygame # pygame 모듈 임포트

# 상수 선언
WIDTH, HEIGHT = 800, 400
WHITE = (255, 255, 255)
BLACK = (  0,   0,   0)

pygame.init() # pygame 초기화

screen = pygame.display.set_mode((WIDTH, HEIGHT)) # 메인 디스플레이를 설정
clock = pygame.time.Clock() # 시간 설정

while True: # 메인 루프
    for event in pygame.event.get(): # 발생한 입력 event 목록의 event마다 검사
        if event.type == pygame.QUIT: # event의 type이 pygame.QUIT에 해당할 경우
            exit() # pygame을 종료
    screen.fill(WHITE) # 스크린을 흰색으로 채움
    
    pygame.display.update() # 화면 업데이트
    clock.tick(60) # fps 설정`}
          </Code>
          <ul className="list-disc">
            <li>
              1번째 줄에서는 pygame을 임포트 한다. import pygame as pg로 하기도
              한다.
            </li>
            <li>
              4~6번째 줄에서는 사용할 상수를 선언한다. 보통 3차원 튜플로 색깔을
              선언하고 사운드, 이미지 등을 로드하기도 한다.
              <Info title="Color Class">
                Pygame에서 Color 클래스를 제공하긴 하지만 RGB 값을 갖는 튜플을
                사용하는 것이 훨씬 간편하다.
              </Info>
            </li>
            <li>
              8번째 줄에서는 pygame을 초기화한다. pygame에서 제공하는 함수를
              사용하기 위해서이다.
            </li>
            <li>
              10번째 줄에서 디스플레이를 설정한다. 보통 크기와 flags를 설정한다.
              flags는 창의 속성을 설정하며 풀 스크린, 사용자 지정 창 등을
              제공한다.
            </li>
            <li>
              11번째 줄에서는 clock을 설정한다. fps를 다루기 위해 사용한다.
            </li>
            <li>13번째 줄부터는 메인 루프이며 1프레임마다 반복된다.</li>
            <li>
              14~16번째 줄은 이벤트를 처리하는 방법이다. pygame.QUIT은 창을 닫을
              때 발생하는 이벤트로 반드시 종료 이벤트를 정해 둬야 한다.(안그러면
              창이 안닫힌다.) 이외에도 마우스 클릭, 키보드 입력 등의 이벤트를
              처리할 수 있다.
            </li>
            <li>
              17번째 줄에서 메인 디스플레이를 흰색으로 칠한다. 이전 프레임에서
              그린 것들을 제거하는 과정이다.
              <Info title="주의!" red={true}>
                이 코드를 실행하지 않으면 이전에 그렸던 것들이 그대로 남게 된다.
                따라서 매 프레임마다 실행을 해주어야 한다.
              </Info>
            </li>
            <li>19번째 줄에서 디스플레이를 업데이트 한다.</li>
            <li>
              20번째 줄에서 fps를 설정한다. <br />이 코드를 실행해보면 window가
              뜨는 것을 확인할 수 있다.
            </li>
          </ul>
          <br />
          <SmallTitle id="2">객체 지향 프로그래밍</SmallTitle>
          <p>
            그러나 위에서 본 코드는 한가지 문제가 있다. 바로 객체 지향적이지
            않다. 객체 지향 프로그래밍을 위해서 아래의 코드를 사용한다.
          </p>
          <Code title="main.py">
            {`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 400
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

            self.clock.tick(self.FPS)

            pg.display.flip()

if __name__ == "__main__":
    app = App()
    app.run()`}
          </Code>
          <br />
          <SmallTitle id="3">자주 쓰는 클래스</SmallTitle>
          <Definition
            title="Rect(left, top, width, height)"
            properties={[
              ["top", "int", "직사각형의 top 좌표"],
              ["bottom", "int", "직사각형의 bottom 좌표"],
              ["left", "int", "직사각형의 left 좌표"],
              ["right", "int", "직사각형의 right 좌표"],
              ["center", "tuple", "(centerx, centery)를 반환"],
              ["centerx", "int", "중앙에 x좌표"],
              ["centery", "int", "중앙의 y좌표"],
              ["width", "int", "직사각형의 너비"],
              ["height", "int", "직사각형의 높이"],
            ]}
            methods={[
              [
                "move(x, y)",
                "Rect",
                "지정된 좌표만큼 이동한 새로운 Rect를 반환",
              ],
              ["move_ip(x, y)", "None", "지정된 좌표만큼 이동"],
              ["collidepoint(x, y)", "bool", "점이 직사각형 안에 있는지 확인"],
              ["colliderect(rect)", "bool", "두 직사각형이 겹치는지 확인"],
            ]}
            importance={5}
          >
            직사각형 좌표를 저장하는 객체이다. 아래 서술한 모든 property는
            변경이 가능하다.
          </Definition>
          <Definition
            title="Surface((width, height), flags=0)"
            methods={[
              [
                "blit(source, dest, special_flags=0)",
                "Rect",
                "Surface위에 Surface를 그리는데 사용한다. special_flags로 그리는 방식을 변경할 수 있다.",
              ],
              [
                "fill(color, special_flags=0)",
                "Rect",
                "color로 Surface를 단색으로 칠한다. 기본은 검정색이다.",
              ],
              [
                "set_alpha(value)",
                "None",
                "0~255사이의 alpha값을 받아 투명도를 설정한다.",
              ],
              [
                "set_colorkey(color)",
                "None",
                "color 색의 픽셀을 투명하게 바꾼다.",
              ],
              [
                "get_rect(**kwargs)",
                "Rect",
                "Surface의 크기와 같은 Rect 객체를 얻는다. 이때 Rect 객체의 topleft는 (0, 0)이다. 또한 Rect를 생성할 때 처럼 키워드 인자를 넘겨줄 수 있다. 예를 들어, surface.get_rect(center=(100, 100))은 (100, 100)을 중심으로 하는 Rect를 반환한다.",
              ],
            ]}
            importance={5}
          >
            앞의 코드에서 <TextHighlight>pg.display.set_mode()</TextHighlight>{" "}
            로 반환된 것이 Surface이다. Surface는 이미지를 보여주는 객체로
            그림을 그리거나 이미지를 띄우고 글자를 보여주는데 사용된다. flags에
            적당한 상수를 넘겨주어 크기 조절 등의 속성을 설정할 수 있다.
          </Definition>
          <Info title="dest" red={true}>
            blit의 인자 dest에 Rect 객체를 사용하면 Rect 객체의 topleft 좌표가
            사용된다. Rect의 크기는 blit에 영향을 주지 않는다.
          </Info>
          <Info title="단일 픽셀 색상 변경">
            <TextHighlight>Surface.set_at((x, y), color)</TextHighlight> 를
            사용하면 지정한 좌표의 단일 픽셀 색상을 변경할 수 있다. 팔레트
            스왑에 주로 사용되며 단일 픽셀의 색상을 얻는{" "}
            <TextHighlight>Surface.get_at((x, y))</TextHighlight> 함수도 있다.
            <br />
            <br />
            <div className="w-full flex justify-center">
              <img
                src="/pygameDoc/imgs/1_pallete_swapping.png"
                width={300}
                height={150}
              />
            </div>
          </Info>
          <Info title="special_flags">
            special_flags에는 다양한 플래그를 사용할 수 있다. flags에는 적당한
            int 값을 대입할 수 있는데 이 값들은 pygame 모듈의 상수로 정의되어
            있다. 예를 들어 BLEND_RGB_ADD를 사용하면 두 Surface의 RGB를 더한
            결과를 출력한다.
            <br />
            <div className="flex justify-center">
              <img src="/pygameDoc/imgs/1_RGB_ADD.gif" height={150} />
            </div>
            <br />
            <Code fileName="main.py" highlight={[49]}>{`import pygame as pg

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 350, 400
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.ball = Ball(200, 200, 5, 4, self.screen)
        self.ball2 = Ball(200, 200, -4, 5, self.screen)

    def run(self):
        while True:
            self.screen.fill((0,0,0))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            pg.draw.rect(self.screen, (255, 0, 0), (100, 0, 50, 400))
            pg.draw.rect(self.screen, (0, 0, 255), (200, 0, 50, 400))
            self.ball.update()
            self.ball2.update()
            

            self.clock.tick(self.FPS)
            pg.display.flip()

class Ball:
    def __init__(self, x, y, vx, vy, screen):
        self.x = x
        self.y = y
        self.vx = vx
        self.vy = vy
        self.screen = screen
        self.surf = pg.Surface((100, 100))
        pg.draw.circle(self.surf, (100, 100, 100), (50, 50), 50)
        self.surf.set_colorkey((0, 0, 0))

    def update(self):
        self.x += self.vx
        self.y += self.vy
        if self.x < 0 or self.x > 250:
            self.vx = -self.vx
        if self.y < 0 or self.y > 300:
            self.vy = -self.vy
        self.screen.blit(self.surf, (self.x, self.y), special_flags=pg.BLEND_RGB_ADD)
        

if __name__ == "__main__":
    app = App()
    app.run()`}</Code>
            <br />
          </Info>
          <br />
          <SmallTitle id="4">자주 쓰는 함수</SmallTitle>
          <Definition title="pygame.init()" importance={5} red={true}>
            pygame을 초기화한다. pygame을 사용하기 전에 반드시 호출해야 한다.
          </Definition>
          <Definition title="pygame.quit()" importance={1} red={true}>
            pygame을 종료한다. 근데 이거 써도 프로그램 종료 안됨. 그냥{" "}
            <TextHighlight>exit()</TextHighlight> 쓰면 된다.
          </Definition>
          <Definition
            title="pygame.draw.rect(surface, color, rect)"
            red={true}
            importance={5}
          >
            Surface에 지정한 색으로 Rect를 그린다. rect의 인자로는 Rect 객체를
            넘겨줄 수도 있지만 (x, y, width, height)를 넘겨줘도 된다. 참고로
            pygame의 좌표는 왼쪽 위가 (0, 0)이고 오른쪽 아래로 갈수록 x, y좌표가
            증가한다.
          </Definition>
          <Definition
            title="pygame.draw.line(surface, color, start_pos, end_pos)"
            red={true}
            importance={4}
          >
            Surface에 지정한 색으로 선을 그린다. start_pos와 end_pos는 (x, y),
            [x, y], pygame.Math.Vector2 가 가능하다.
          </Definition>
          <Definition
            title="pygame.draw.circle(surface, color, center, radius)"
            red={true}
            importance={5}
          >
            Surface에 지정한 색으로 원을 그린다.
          </Definition>
          <Definition
            title="pygame.draw.polygon(surface, color, points)"
            red={true}
            importance={3}
          >
            Surface에 지정한 색으로 다각형을 그린다. points에는 2차원 좌표를
            이터러블로 넘겨주면 된다.
          </Definition>
          <Definition
            title="pygame.draw.arc(surface, color, rect, start_angle, stop_angle)"
            red={true}
            importance={3}
          >
            Surface에 지정한 색으로 호를 그린다.
          </Definition>
          <br />
          <Practice id="1">그림 그리기</Practice>
          <br />
          <br />
          <br />
          <br />
        </Body>
      </div>
    </div>
  );
}
