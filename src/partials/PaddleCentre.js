
import PaddleGoalie from './PaddleGoalie';

export default class PaddleCentre extends PaddleGoalie {

  constructor(boardHeight, width, height, x, y, up, down, color) {

    super(boardHeight, width, height, x);
    this.y = (y - this.height)/2;
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

  coordinates(x, y, width, height) {
    let leftXC = x;
    let rightXC = x + width;
    let topYC = y;
    let bottomYC = y + height;
    return [leftXC, rightXC, topYC, bottomYC];
  }
} // end Paddle class