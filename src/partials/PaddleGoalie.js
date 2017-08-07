import { SVG_NS } from '../settings';

export default class PaddleGoalie {

  constructor(boardHeight, width, height, x, y, up, down, color) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
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

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  up() {
    this.y = Math.max(this.boardHeight * (1/5), this.y - this.speed);
  } // end up

  down() {
    this.y = Math.min(
      this.boardHeight * (4/5) - this.height, 
      this.y + this.speed
    );
  } // end down

  render(svg) {
    // render paddle goalie
    let paddleGoalie = document.createElementNS(SVG_NS, 'rect');
		paddleGoalie.setAttributeNS(null, 'width', this.width);
    paddleGoalie.setAttributeNS(null, 'height', this.height);
    paddleGoalie.setAttributeNS(null, 'x', this.x);
    paddleGoalie.setAttributeNS(null, 'y', this.y);
    paddleGoalie.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleGoalie);

  } // end render

} // end Paddle class