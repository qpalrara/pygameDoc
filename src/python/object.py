import pygame as pg
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
        x = sign(player.x - self.rect.x)*2
        y = sign(player.y - self.rect.y)*2
        self.rect.move_ip(x, y)

        pg.draw.rect(display, (0, 0, 255), self.rect)
