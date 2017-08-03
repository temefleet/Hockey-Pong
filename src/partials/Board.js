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

    // faceoff topleft
    let faceoffTopLeft = document.createElementNS(SVG_NS, 'circle');
    faceoffTopLeft.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffTopLeft.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopLeft.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffTopLeft.setAttributeNS(null, 'stroke', 'red');
    faceoffTopLeft.setAttributeNS(null, 'stroke-width', '2');
    faceoffTopLeft.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffTopLeft.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffTopLeft);

    // faceoff topright
    let faceoffTopRight = document.createElementNS(SVG_NS, 'circle');
    faceoffTopRight.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffTopRight.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopRight.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffTopRight.setAttributeNS(null, 'stroke', 'red');
    faceoffTopRight.setAttributeNS(null, 'stroke-width', '2');
    faceoffTopRight.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffTopRight.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffTopRight);

    // faceoff BottomLeft
    let faceoffBottomLeft = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomLeft.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffBottomLeft.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomLeft.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffBottomLeft.setAttributeNS(null, 'stroke', 'red');
    faceoffBottomLeft.setAttributeNS(null, 'stroke-width', '2');
    faceoffBottomLeft.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffBottomLeft.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffBottomLeft);

    // faceoff BottomRight
    let faceoffBottomRight = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomRight.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffBottomRight.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomRight.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffBottomRight.setAttributeNS(null, 'stroke', 'red');
    faceoffBottomRight.setAttributeNS(null, 'stroke-width', '2');
    faceoffBottomRight.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffBottomRight.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffBottomRight);

    // net crease
    let crease1 = document.createElementNS(SVG_NS, 'circle');
    crease1.setAttributeNS(null, 'cx', 0);
    crease1.setAttributeNS(null, 'cy', this.height /2);
    crease1.setAttributeNS(null, 'r', this.width *(1/14));
    crease1.setAttributeNS(null, 'stroke', 'red');
    crease1.setAttributeNS(null, 'stroke-width', '2');
    crease1.setAttributeNS(null, 'stroke-dasharray', '2');
    crease1.setAttributeNS(null, 'fill', 'skyblue');
    svg.appendChild(crease1);

    // faceoff BottomRight
    let crease2 = document.createElementNS(SVG_NS, 'circle');
    crease2.setAttributeNS(null, 'cx', this.width);
    crease2.setAttributeNS(null, 'cy', this.height /2);
    crease2.setAttributeNS(null, 'r', this.width *(1/14));
    crease2.setAttributeNS(null, 'stroke', 'red');
    crease2.setAttributeNS(null, 'stroke-width', '2');
    crease2.setAttributeNS(null, 'stroke-dasharray', '2');
    crease2.setAttributeNS(null, 'fill', 'skyblue');
    svg.appendChild(crease2);


  } // end render()
}