import React from "react";
import Quiz from "../components/Quiz";
import Code from "../components/Code";
import Reference from "../components/Reference";
import Header from "../components/Header";
import range from "../js/range";

export default function P3() {
  return (
    <div className="flex flex-col h-full text-font items-center">
      <Header />
      <div className="px-8 md:px-20 lg:px-40 xl:px-72 w-full overflow-y-auto">
        <Quiz
          title="1. 이미지 회전"
          description={
            <div>
              별을 돌려보자.{" "}
              <a
                href="/pygameDoc/imgs/prac3_1.png"
                download="/pygameDoc/imgs/prac3_1.png"
                className="text-blue-400 hover:text-blue-500"
              >
                이미지 다운로드
              </a>
              <div className="flex justify-center">
                <img src="/pygameDoc/imgs/prac3_1.gif" />
              </div>
            </div>
          }
        ><Code>{`import pygame as pg

        class App:
            def __init__(self):
                pg.init()
                self.RES = self.WIDTH, self.HEIGHT = 400, 400
                self.FPS = 60
                self.screen = pg.display.set_mode(self.RES)
                self.clock = pg.time.Clock()
                self.image = pg.image.load("image.png").convert()
                self.image = pg.transform.scale(self.image, (200, 200))
                self.image.set_colorkey((0,0,0))
                self.angle = 0
        
            def run(self):
                while True:
                    self.screen.fill((255,255,255))
        
                    events = pg.event.get()
                    for event in events:
                        if event.type == pg.QUIT:
                            exit()
        
                    self.angle += 1
                    image = pg.transform.rotate(self.image, self.angle)
                    self.screen.blit(image, image.get_rect(center=(200, 200)))
        
                    self.clock.tick(self.FPS)
                    pg.display.flip()
        
        if __name__ == "__main__":
            app = App()
            app.run()`}</Code></Quiz>
      </div>
    </div>
  );
}
