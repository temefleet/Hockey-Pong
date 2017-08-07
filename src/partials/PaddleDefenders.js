import { SVG_NS } from '../settings';

export default class PaddleDefenders {

  constructor(boardHeight, width, height, x, y1, y2, up, down, color) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height * (4/3);
    this.x = x;
    this.y1 = y1 * (3/10) - (this.height/2);
    this.y2 = y2 * (7/10) - (this.height/2);
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
    let leftXD = x;
    let rightXD = x + width;
    let topY1D = y1;
    let bottomY1D = y1 + height;
    let topY2D = y2;
    let bottomY2D = y2 + height;
    return [leftXD, rightXD, topY1D, bottomY1D, topY2D, bottomY2D];
  }

  up() {
    this.y1 = Math.max(0, this.y1 - this.speed);
    this.y2 = Math.max(this.boardHeight * (2/5), this.y2 - this.speed);
  } // end up

  down() {
    this.y1 = Math.min(
      this.boardHeight*(3/5) - this.height, 
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