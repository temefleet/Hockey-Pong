import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          console.log('up!');
          break;
        case down:
          console.log('down!');
          break;
      }
    });
  } // end constructor

  up() {

  } // end up

  down() {

  } // end down

  render(svg) {
    // render paddle
    let paddle = document.createElementNS(SVG_NS, 'rect');
		paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'height', this.height);
    paddle.setAttributeNS(null, 'x', this.x);
    paddle.setAttributeNS(null, 'y', this.y);
    paddle.setAttributeNS(null, 'fill', 'grey');
    svg.appendChild(paddle);
  } // end render

} // end class