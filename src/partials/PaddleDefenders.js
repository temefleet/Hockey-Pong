import { SVG_NS } from '../settings';

export default class PaddleDefenders {

  constructor(boardHeight, width, height, x, y1, y2, up, down, color) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y1 = y1;
    this.y2 = y2;
    this.speed = 10;
    this.score = 0;
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
    let leftX = x;
    let rightX = x + width;
    let topY1 = y1;
    let bottomY1 = y1 + height;
    let topY2 = y2;
    let bottomY2 = y2 + height;
    return [leftX, rightX, topY1, bottomY1, topY2, bottomY2];
  }

  up() {
    this.y1 = Math.max(0, this.y1 - this.speed);
    this.y2 = Math.max(this.boardHeight * (1/5), this.y2 - this.speed);
  } // end up

  down() {
    this.y1 = Math.min(
      this.boardHeight*(4/5) - this.height, 
      this.y1 + this.speed
    );
    this.y2 = Math.min(
      this.boardHeight - this.height, 
      this.y2 + this.speed
    );
  } // end down

  render(svg) {
    // render paddle defender top
    let paddleDefenderTop = document.createElementNS(SVG_NS, 'rect');
		paddleDefenderTop.setAttributeNS(null, 'width', this.width);
    paddleDefenderTop.setAttributeNS(null, 'height', this.height);
    paddleDefenderTop.setAttributeNS(null, 'x', this.x);
    paddleDefenderTop.setAttributeNS(null, 'y', this.y1);
    paddleDefenderTop.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleDefenderTop);

    // paddle defender bottom
    let paddleDefenderBottom = document.createElementNS(SVG_NS, 'rect');
		paddleDefenderBottom.setAttributeNS(null, 'width', this.width);
    paddleDefenderBottom.setAttributeNS(null, 'height', this.height);
    paddleDefenderBottom.setAttributeNS(null, 'x', this.x);
    paddleDefenderBottom.setAttributeNS(null, 'y', this.y2);
    paddleDefenderBottom.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleDefenderBottom);

  } // end render

} // end Paddle class