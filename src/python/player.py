import pygame as pg


class Player:
    def __init__(self, x, y, w, h):
        self.vy, self.ay = 0, 1
        self.rect = pg.Rect(x, y, w, h)

    def update(self, display, tiles):
        # 중력
        if collision := self.getCollision(tiles):
            self.vy = 0
            self.rect.bottom = collision[0].rect.top
        else:
            self.vy += self.ay
            self.rect.y += self.vy

        # 이동
        if pg.key.get_pressed()[pg.K_a]:
            self.rect.x -= 5
            if collision := self.getCollision(tiles):
                self.rect.left = collision[0].rect.right
        elif pg.key.get_pressed()[pg.K_d]:
            self.rect.x += 5
            if collision := self.getCollision(tiles):
                self.rect.right = collision[0].rect.left
        elif pg.key.get_pressed()[pg.K_SPACE]:
            self.vy = -15


        pg.draw.rect(display, (255, 0, 0), self.rect)

    def getCollision(self, tiles):
        collision = []
        for tile in tiles:
            if self.rect.colliderect(tile.rect):
                collision.append(tile)
        return collision
    
