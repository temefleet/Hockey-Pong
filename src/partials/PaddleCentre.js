import { SVG_NS } from '../settings';

export default class PaddleCentre {

  constructor(boardHeight, width, height, x, y, up, down, color) {

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = (y - this.height)/2;
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
    let leftXC = x;
    let rightXC = x + width;
    let topYC = y;
    let bottomYC = y + height;
    return [leftXC, rightXC, topYC, bottomYC];
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
    let paddleCentre = document.createElementNS(SVG_NS, 'rect');
		paddleCentre.setAttributeNS(null, 'width', this.width);
    paddleCentre.setAttributeNS(null, 'height', this.height);
    paddleCentre.setAttributeNS(null, 'x', this.x);
    paddleCentre.setAttributeNS(null, 'y', this.y);
    paddleCentre.setAttributeNS(null, 'fill', this.color);
    svg.appendChild(paddleCentre);

  } // end render

} // end Paddle class