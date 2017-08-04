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
    rect.setAttributeNS(null, 'fill', '#f6fbfc');
    svg.appendChild(rect);
    

    // render half court line
    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'x1', this.width / 2);
    line.setAttributeNS(null, 'y1', 0);
    line.setAttributeNS(null, 'x2', this.width / 2);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', '#ff6666');
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
    faceoffCircle.setAttributeNS(null, 'stroke', '#ff6666');
    faceoffCircle.setAttributeNS(null, 'stroke-width', '2');
    faceoffCircle.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffCircle.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffCircle);

    // faceoff circle DOT
    let faceoffCircleDot = document.createElementNS(SVG_NS, 'circle');
    faceoffCircleDot.setAttributeNS(null, 'cx', this.width /2);
    faceoffCircleDot.setAttributeNS(null, 'cy', this.height /2);
    faceoffCircleDot.setAttributeNS(null, 'r', 6);
    faceoffCircleDot.setAttributeNS(null, 'fill', '#ff6666');
    svg.appendChild(faceoffCircleDot);

    // faceoff topleft
    let faceoffTopLeft = document.createElementNS(SVG_NS, 'circle');
    faceoffTopLeft.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffTopLeft.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopLeft.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffTopLeft.setAttributeNS(null, 'stroke', '#ff6666');
    faceoffTopLeft.setAttributeNS(null, 'stroke-width', '2');
    faceoffTopLeft.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffTopLeft.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffTopLeft);

    // faceoff topleft Dot
    let faceoffTopLeftDot = document.createElementNS(SVG_NS, 'circle');
    faceoffTopLeftDot.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffTopLeftDot.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopLeftDot.setAttributeNS(null, 'r', this.width *(1/120));
    faceoffTopLeftDot.setAttributeNS(null, 'fill', '#ff6666');
    svg.appendChild(faceoffTopLeftDot);

    // faceoff topright
    let faceoffTopRight = document.createElementNS(SVG_NS, 'circle');
    faceoffTopRight.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffTopRight.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopRight.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffTopRight.setAttributeNS(null, 'stroke', '#ff6666');
    faceoffTopRight.setAttributeNS(null, 'stroke-width', '2');
    faceoffTopRight.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffTopRight.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffTopRight);

    // faceoff top right Dot
    let faceoffTopRightDot = document.createElementNS(SVG_NS, 'circle');
    faceoffTopRightDot.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffTopRightDot.setAttributeNS(null, 'cy', this.height *(1/4));
    faceoffTopRightDot.setAttributeNS(null, 'r', this.width *(1/120));
    faceoffTopRightDot.setAttributeNS(null, 'fill', '#ff6666');
    svg.appendChild(faceoffTopRightDot);

    // faceoff BottomLeft
    let faceoffBottomLeft = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomLeft.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffBottomLeft.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomLeft.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffBottomLeft.setAttributeNS(null, 'stroke', '#ff6666');
    faceoffBottomLeft.setAttributeNS(null, 'stroke-width', '2');
    faceoffBottomLeft.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffBottomLeft.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffBottomLeft);

    // faceoff bottom left Dot
    let faceoffBottomLeftDot = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomLeftDot.setAttributeNS(null, 'cx', this.width *(1/6));
    faceoffBottomLeftDot.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomLeftDot.setAttributeNS(null, 'r', this.width *(1/120));
    faceoffBottomLeftDot.setAttributeNS(null, 'fill', '#ff6666');
    svg.appendChild(faceoffBottomLeftDot);

    // faceoff BottomRight
    let faceoffBottomRight = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomRight.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffBottomRight.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomRight.setAttributeNS(null, 'r', this.width *(1/12));
    faceoffBottomRight.setAttributeNS(null, 'stroke', '#ff6666');
    faceoffBottomRight.setAttributeNS(null, 'stroke-width', '2');
    faceoffBottomRight.setAttributeNS(null, 'stroke-dasharray', '2 4');
    faceoffBottomRight.setAttributeNS(null, 'fill', 'none');
    svg.appendChild(faceoffBottomRight);

    // faceoff bottom Right Dot
    let faceoffBottomRightDot = document.createElementNS(SVG_NS, 'circle');
    faceoffBottomRightDot.setAttributeNS(null, 'cx', this.width *(5/6));
    faceoffBottomRightDot.setAttributeNS(null, 'cy', this.height *(3/4));
    faceoffBottomRightDot.setAttributeNS(null, 'r', this.width *(1/120));
    faceoffBottomRightDot.setAttributeNS(null, 'fill', '#ff6666');
    svg.appendChild(faceoffBottomRightDot);

    // net crease
    let crease1 = document.createElementNS(SVG_NS, 'circle');
    crease1.setAttributeNS(null, 'cx', 0);
    crease1.setAttributeNS(null, 'cy', this.height /2);
    crease1.setAttributeNS(null, 'r', this.width *(1/14));
    crease1.setAttributeNS(null, 'stroke', '#ff6666');
    crease1.setAttributeNS(null, 'stroke-width', '2');
    crease1.setAttributeNS(null, 'stroke-dasharray', '2');
    crease1.setAttributeNS(null, 'fill', '#e6f3f7');
    svg.appendChild(crease1);

    // faceoff BottomRight
    let crease2 = document.createElementNS(SVG_NS, 'circle');
    crease2.setAttributeNS(null, 'cx', this.width);
    crease2.setAttributeNS(null, 'cy', this.height /2);
    crease2.setAttributeNS(null, 'r', this.width *(1/14));
    crease2.setAttributeNS(null, 'stroke', '#ff6666');
    crease2.setAttributeNS(null, 'stroke-width', '2');
    crease2.setAttributeNS(null, 'stroke-dasharray', '2');
    crease2.setAttributeNS(null, 'fill', '#e6f3f7');
    svg.appendChild(crease2);

    // render side Boards Top
    let sideBoardsTop = document.createElementNS(SVG_NS, 'line');
    sideBoardsTop.setAttributeNS(null, 'x1', 0);
    sideBoardsTop.setAttributeNS(null, 'y1', 0);
    sideBoardsTop.setAttributeNS(null, 'x2', this.width);
    sideBoardsTop.setAttributeNS(null, 'y2', 0);
    sideBoardsTop.setAttributeNS(null, 'stroke', 'grey');
    sideBoardsTop.setAttributeNS(null, 'stroke-width', '4');
    svg.appendChild(sideBoardsTop);

    // render side Boards Bottom
    let sideBoardsBottom = document.createElementNS(SVG_NS, 'line');
    sideBoardsBottom.setAttributeNS(null, 'x1', 0);
    sideBoardsBottom.setAttributeNS(null, 'y1', this.height);
    sideBoardsBottom.setAttributeNS(null, 'x2', this.width);
    sideBoardsBottom.setAttributeNS(null, 'y2', this.height);
    sideBoardsBottom.setAttributeNS(null, 'stroke', 'grey');
    sideBoardsBottom.setAttributeNS(null, 'stroke-width', '4');
    svg.appendChild(sideBoardsBottom);


  } // end render()
}