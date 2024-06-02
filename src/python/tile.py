import pygame as pg


class Tile:
    def __init__(self, x, y, w, h, color):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.color = color
        self.rect = pg.Rect(x, y, w, h)
    
    def update(self, display):
        pg.draw.rect(display, self.color, self.rect)