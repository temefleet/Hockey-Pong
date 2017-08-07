import { SVG_NS, KEYS } from '../settings.js';
import Board from './Board';
import PaddleGoalie from './PaddleGoalie';
import PaddleDefenders from './PaddleDefenders';
import PaddleForwards from './PaddleForwards';
import PaddleCentre from './PaddleCentre';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(element);
		
		this.paddleWidth = 8; 
		this.paddleHeight = 14;
		this.boardGap = 10;
		this.ballRadius = 5;
		this.colorTeam1 = '#F4793E';
		this.colorTeam2 = '#008852'
		
		this.board = new Board(this.width, this.height);
		
		//player 1 goalie
		this.player1Goalie = new PaddleGoalie(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			(this.height - this.paddleHeight)/2,
			KEYS.a,
			KEYS.z,
			this.colorTeam1
		);

		// player 1 defenders
		this.player1Defenders = new PaddleDefenders(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * (4/3), 
			this.width * (1/5), 
			this.height,
			this.height,
			KEYS.a,
			KEYS.z,
			this.colorTeam1
		);

		// player 1 Forwards
		this.player1Forwards = new PaddleForwards(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * (5/3), 
			this.width * (3/5), 
			this.height,
			this.height,
			KEYS.a,
			KEYS.z,
			this.colorTeam1
		);

		//player 1 centre
		this.player1Centre = new PaddleCentre(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * 2, 
			this.width * (7/10), 
			this.height,
			KEYS.a,
			KEYS.z,
			this.colorTeam1
		);

		//player 2 goalie
		this.player2Goalie = new PaddleGoalie(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.width-(this.boardGap+this.paddleWidth), 
			(this.height - this.paddleHeight)/2,
			KEYS.up,
			KEYS.down,
			this.colorTeam2
		);

		// player 2 defenders
		this.player2Defenders = new PaddleDefenders(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * (4/3), 
			this.width * (4/5), 
			this.height,
			this.height,
			KEYS.up,
			KEYS.down,
			this.colorTeam2
		);

		// player 2 Forwards
		this.player2Forwards = new PaddleForwards(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * (5/3), 
			this.width * (2/5), 
			this.height,
			this.height,
			KEYS.up,
			KEYS.down,
			this.colorTeam2
		);

		//player 2 centre
		this.player2Centre = new PaddleCentre(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight * 2, 
			this.width * (3/10), 
			this.height,
			KEYS.up,
			KEYS.down,
			this.colorTeam2
		);

		this.ball = new Ball(this.ballRadius, this.width, this.height);

		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.b:
					this.ball2 = new Ball(this.ballRadius, this.width, this.height);
					break;
			}
		});

		this.score1 = new Score(
			(this.width/2) - (this.width*(1/10)),
			this.height*.1,
			this.height * .1
		);

		this.score2 = new Score(
			(this.width/2) + (this.width*(1/16)),
			this.height*.1,
			this.height * .1
		);


		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
			}
		});
	}

	render() {
		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1Goalie.render(svg);
		this.player1Defenders.render(svg);
		this.player1Forwards.render(svg);
		this.player1Centre.render(svg);
		this.player2Goalie.render(svg);
		this.player2Defenders.render(svg);
		this.player2Forwards.render(svg);
		this.player2Centre.render(svg);
		this.ball.render(svg, this.player1Goalie, this.player2Goalie, 
			this.player1Defenders, this.player2Defenders,
			this.player1Forwards, this.player2Forwards,  
			this.player1Centre, this.player2Centre
		);
		this.score1.render(svg, this.player1Goalie.score);
		this.score2.render(svg, this.player2Goalie.score);
		if (this.ball2) {
			this.ball2.render(svg, this.player1Goalie, this.player2Goalie);
		}
	}

} // end Game class