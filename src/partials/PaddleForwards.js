import PaddleDefenders from './PaddleDefenders';

export default class PaddleForwards extends PaddleDefenders {

  constructor(boardHeight, width, height, x, y1, y2, up, down, color) {

    super(boardHeight, width);
    this.height = height;
    this.x = x;
    this.y1 = y1 * (3/10) - (this.height/2);
    this.y2 = y2 * (7/10) - (this.height/2);
    this.color = color;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  } // end constructor

  coordinates(x, y1, y2, width, height) {
    let leftXF = x;
    let rightXF = x + width;
    let topY1F = y1;
    let bottomY1F = y1 + height;
    let topY2F = y2;
    let bottomY2F = y2 + height;
    return [leftXF, rightXF, topY1F, bottomY1F, topY2F, bottomY2F];
  }

} // end Paddle class