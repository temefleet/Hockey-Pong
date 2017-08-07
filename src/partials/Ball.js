import { SVG_NS } from '../settings';

// Ball.js
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = Math.random() < 0.5 ? -1 : 1;
    this.shot = new Audio('public/sounds/slapshot.wav');
    this.reset();
  }

  reset() {

    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;

    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision(player1, player2) {
    const hitLeft = this.x <= 2;
    const hitRight = this.x >= this.boardWidth - 2;
    const hitTop = this.y - this.radius <= 2;
    const hitBottom = this.y + this.radius >= this.boardHeight - 2;

    if (hitLeft) {
      if (this.y > this.boardHeight * (1/3) && this.y < this.boardHeight * (2/3)) {
        this.direction = -1;
        this.goal(player2);
      } else {
        this.vx = -this.vx;
      }
    } else if (hitRight) {
      if (this.y > this.boardHeight * (1/3) && this.y < this.boardHeight * (2/3)) {
        this.direction = 1;
        this.goal(player1);
      } else {
        this.vx = -this.vx;
      }
    } else if (hitTop || hitBottom) {
      // flip vy
      this.vy = -this.vy;
    }
  }

  paddleCollision(player1, player2) {
    if (this.vx > 0) {

      // detect player 2 paddle collision
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x + this.radius >= leftX
        && this.x - this.radius <= leftX
        && this.y >= topY
        && this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.shot.play();
      }

    } else {
      // detect player 1 paddle collsion
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      if (
        this.x - this.radius <= rightX
        && this.x + this.radius >= rightX
        && this.y >= topY 
        && this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.shot.play();
      }
    } 
  }

  goal(player) {
    player.score++;
    this.reset();
  }

  render(svg, player1, player2) {
  
  // ball movement
    this.x += this.vx;
    this.y += this.vy;
    this.wallCollision(player1, player2);
    this.paddleCollision(player1, player2);
  
  // render ball
    let ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'r', this.radius);
    svg.appendChild(ball);

  } // end render

} // end Ball class