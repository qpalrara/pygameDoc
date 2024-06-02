import pygame as pg

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
                self.__clicking = False
