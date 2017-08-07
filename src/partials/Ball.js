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

  paddleCollision(player1, player2, player1D, player2D, player1F, player2F, player1C, player2C) {
    if (this.vx > 0) {

      // detect player 2 paddle collision
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      let paddleDefenders = player2D.coordinates(player2D.x, player2D.y1, player2D.y2, player2D.width, player2D.height);
      let [leftXD, rightXD, topY1D, bottomY1D, topY2D, bottomY2D] = paddleDefenders;

      let paddleCentre = player2C.coordinates(player2C.x, player2C.y, player2C.width, player2C.height);
      let [leftXC, rightXC, topYC, bottomYC] = paddleCentre;

      let paddleForwards = player2F.coordinates(player2F.x, player2F.y1, player2F.y2, player2F.width, player2F.height);
      let [leftXF, rightXF, topY1F, bottomY1F, topY2F, bottomY2F] = paddleForwards;


      if (
        (this.x + this.radius >= leftX // goalie detection
        && this.x - this.radius <= leftX
        && this.y >= topY
        && this.y <= bottomY)
        ||
        (this.x + this.radius >= leftXD // defender top detection
        && this.x - this.radius <= leftXD
        && this.y >= topY1D
        && this.y <= bottomY1D)
        ||
        (this.x + this.radius >= leftXD // defender bottom detection
        && this.x - this.radius <= leftXD
        && this.y >= topY2D
        && this.y <= bottomY2D)
        ||
        (this.x + this.radius >= leftXC // centre detection
        && this.x - this.radius <= leftXC
        && this.y >= topYC
        && this.y <= bottomYC)
        ||
        (this.x + this.radius >= leftXF // forward top detection
        && this.x - this.radius <= leftXF
        && this.y >= topY1F
        && this.y <= bottomY1F)
        ||
        (this.x + this.radius >= leftXF // forward bottom detection
        && this.x - this.radius <= leftXF
        && this.y >= topY2F
        && this.y <= bottomY2F)
      ) {
        this.vx = -this.vx;
        this.shot.play();
      }

    } else {
      // detect player 1 paddle collsion
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      let paddleDefenders = player1D.coordinates(player1D.x, player1D.y1, player1D.y2, player1D.width, player1D.height);
      let [leftXD, rightXD, topY1D, bottomY1D, topY2D, bottomY2D] = paddleDefenders;

      let paddleCentre = player1C.coordinates(player1C.x, player1C.y, player1C.width, player1C.height);
      let [leftXC, rightXC, topYC, bottomYC] = paddleCentre;

      let paddleForwards = player1F.coordinates(player1F.x, player1F.y1, player1F.y2, player1F.width, player1F.height);
      let [leftXF, rightXF, topY1F, bottomY1F, topY2F, bottomY2F] = paddleForwards;

      if (
        (this.x - this.radius <= rightX // goalie detection
        && this.x + this.radius >= rightX
        && this.y >= topY 
        && this.y <= bottomY)
        ||
        (this.x - this.radius <= rightXD // top defense detection
        && this.x + this.radius >= rightXD
        && this.y >= topY1D 
        && this.y <= bottomY1D)
        ||
        (this.x - this.radius <= rightXD // bottom defense detection
        && this.x + this.radius >= rightXD
        && this.y >= topY2D 
        && this.y <= bottomY2D)
        ||
        (this.x - this.radius <= rightXC // centre hit detection
        && this.x + this.radius >= rightXC
        && this.y >= topYC 
        && this.y <= bottomYC)
        ||
        (this.x - this.radius <= rightXF // top defense detection
        && this.x + this.radius >= rightXF
        && this.y >= topY1F 
        && this.y <= bottomY1F)
        ||
        (this.x - this.radius <= rightXF // bottom defense detection
        && this.x + this.radius >= rightXF
        && this.y >= topY2F 
        && this.y <= bottomY2F)
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

  render(svg, player1, player2, player1D, player2D, player1F, player2F, player1C, player2C) {
  
  // ball movement
  this.x += this.vx;
  this.y += this.vy;
  this.wallCollision(player1, player2);
  this.paddleCollision(player1, player2, player1D, player2D, player1F, player2F, player1C, player2C);
  
  // render ball
  let ball = document.createElementNS(SVG_NS, 'circle');
  ball.setAttributeNS(null, 'cx', this.x);
  ball.setAttributeNS(null, 'cy', this.y);
  ball.setAttributeNS(null, 'r', this.radius);
  svg.appendChild(ball);

  } // end render

} // end Ball class