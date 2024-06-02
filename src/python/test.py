import pygame as pg
from player import Player
from tile import Tile

class App:
    def __init__(self):
        pg.init()
        self.RES = self.WIDTH, self.HEIGHT = 800, 600
        self.FPS = 60
        self.screen = pg.display.set_mode(self.RES)
        self.clock = pg.time.Clock()
        self.player = Player(200, 200, 20, 50)
        self.tiles = [Tile(0, 400, 800, 200, (0, 255, 0)),
                       Tile(300, 350, 100, 50, (0, 0, 255)),
                       Tile(400, 300, 100, 100, (0, 0, 255))]

    def run(self):
        while True:
            self.screen.fill((255,255,255))

            events = pg.event.get()
            for event in events:
                if event.type == pg.QUIT:
                    exit()

            self.player.update(self.screen, self.tiles)
            for tile in self.tiles:
                tile.update(self.screen)

            self.clock.tick(self.FPS)
            pg.display.flip()


if __name__ == "__main__":
    app = App()
    app.run()