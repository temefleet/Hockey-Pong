import { SVG_NS } from '../settings';

// Ball.js
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  }

  reset() {
    
    this.x = this.boardWidth /2;
    this.y = this.boardHeight /2;
    
    this.vy = 0;

    while(this.vy === 0) {
      this.vy = (Math.random() * 10 - 5); 
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 2;
    const hitBottom = this.y + this.radius >= this.boardHeight-2;

    if (hitLeft || hitRight) {
      // flip vx
      this.vx = -this.vx;
    } else if (hitTop || hitBottom) {
      // flip vy
      this.vy = -this.vy;
    }
  }

  render(svg, player1, player2) {
    // ball movement
    this.x += this.vx;
    this.y += this.vy;
    this.wallCollision();
    // render paddle
    let ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'r', this.radius);
    svg.appendChild(ball);
  } // end render

}