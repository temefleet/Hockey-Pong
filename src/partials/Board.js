import { SVG_NS } from '../settings';

export default class Board {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg) {
    // render board
    let rect = document.createElementNS(SVG_NS, 'rect');
		rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', 0);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'fill', 'whitesmoke');
    svg.appendChild(rect);
    

    // render half court line
    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'x1', this.width / 2);
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'x2', this.width / 2);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', 'red');
    line.setAttributeNS(null, 'stroke-width', '4');
    line.setAttributeNS(null, 'stroke-dasharray', '2 4');
    svg.appendChild(line);

    // blue line left
    let blueline1 = document.createElementNS(SVG_NS, 'line');
    blueline1.setAttributeNS(null, 'x1', this.width *(1/3));
    blueline1.setAttributeNS(null, 'y1', 0);
    blueline1.setAttributeNS(null, 'x2', this.width *(1/3));
    blueline1.setAttributeNS(null, 'y2', this.height);
    blueline1.setAttributeNS(null, 'stroke', 'blue');
    blueline1.setAttributeNS(null, 'stroke-width', '2');
    blueline1.setAttributeNS(null, 'stroke-dasharray', '2 4');
    svg.appendChild(blueline1);


    // blue line right
    let blueline2 = document.createElementNS(SVG_NS, 'line');
    blueline2.setAttributeNS(null, 'x1', this.width *(2/3));
    blueline2.setAttributeNS(null, 'y1', 0);
    blueline2.setAttributeNS(null, 'x2', this.width *(2/3));
    blueline2.setAttributeNS(null, 'y2', this.height);
    blueline2.setAttributeNS(null, 'stroke', 'blue');
    blueline2.setAttributeNS(null, 'stroke-width', '2');
    blueline2.setAttributeNS(null, 'stroke-dasharray', '2 4');
    svg.appendChild(blueline2);

    // faceoff circle
    let faceoffCircle = document.createElementNS(SVG_NS, 'circle');
    faceoffCircle.setAttributeNS(null, 'cx', this.width /2);
    faceoffCircle.setAttributeNS(null, 'cy', this.height /2);
    faceoffCircle.setAttributeNS(null, 'r', this.width *(1/8));
    faceoffCircle.setAttributeNS(null, 'stroke', 'red');
    faceoffCircle.setAttributeNS(null, 'stroke-width', '2');
    faceoffCircle.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffCircle.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffCircle);
  } // end render()
}