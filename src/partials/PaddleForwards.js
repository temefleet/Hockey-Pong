import { SVG_NS } from '../settings';

export default class PaddleForwards {

  constructor(boardHeight, width, height, x, y1, y2, up, down, color) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
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
    let leftXF = x;
    let rightXF = x + width;
    let topY1F = y1;
    let bottomY1F = y1 + height;
    let topY2F = y2;
    let bottomY2F = y2 + height;
    return [leftXF, rightXF, topY1F, bottomY1F, topY2F, bottomY2F];
  }

  up() {
    this.y1 = Math.max(0, this.y1 - this.speed);
    this.y2 = Math.max(this.boardHeight * (3/5), this.y2 - this.speed);
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
    // render paddle forward top
    let paddleForwardTop = document.createElementNS(SVG_NS, 'rect');
		paddleForwardTop.setAttributeNS(null, 'width', this.width);
    paddleForwardTop.setAttributeNS(null, 'height', this.height);
    paddleForwardTop.setAttributeNS(null, 'x', this.x);
    paddleForwardTop.setAttributeNS(null, 'y', this.y1);
    paddleForwardTop.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleForwardTop);

    // paddle forward bottom
    let paddleForwardBottom = document.createElementNS(SVG_NS, 'rect');
		paddleForwardBottom.setAttributeNS(null, 'width', this.width);
    paddleForwardBottom.setAttributeNS(null, 'height', this.height);
    paddleForwardBottom.setAttributeNS(null, 'x', this.x);
    paddleForwardBottom.setAttributeNS(null, 'y', this.y2);
    paddleForwardBottom.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleForwardBottom);

  } // end render

} // end Paddle class