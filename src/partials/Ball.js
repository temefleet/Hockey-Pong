import { SVG_NS } from '../settings';

// Ball.js
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }

  render(svg) {
    // render paddle
    let ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.boardWidth/2);
    ball.setAttributeNS(null, 'cy', this.boardHeight/2);
    ball.setAttributeNS(null, 'r', this.radius);
    svg.appendChild(ball);
  } // end render
}