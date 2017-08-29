!function(t){function e(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" ",b:"b"}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),h=i(0),l=i(6),u=r(l),a=i(10),o=r(a),d=i(8),c=r(d),f=i(9),b=r(f),p=i(7),y=r(p),S=i(5),N=r(S),g=i(11),v=r(g),w=function(){function t(e,i,r){var n=this;s(this,t),this.width=i,this.height=r,this.gameElement=document.getElementById(e),this.paddleWidth=8,this.paddleHeight=14,this.boardGap=10,this.ballRadius=5,this.colorTeam1="#000080",this.colorTeam2="#8b0000",this.board=new u.default(this.width,this.height),this.player1Goalie=new o.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,h.KEYS.a,h.KEYS.z,this.colorTeam1),this.player1Defenders=new c.default(this.height,this.paddleWidth,this.paddleHeight*(4/3),.2*this.width,this.height,this.height,h.KEYS.a,h.KEYS.z,this.colorTeam1),this.player1Forwards=new b.default(this.height,this.paddleWidth,this.paddleHeight*(5/3),.6*this.width,this.height,this.height,h.KEYS.a,h.KEYS.z,this.colorTeam1),this.player1Centre=new y.default(this.height,this.paddleWidth,2*this.paddleHeight,.7*this.width,this.height,h.KEYS.a,h.KEYS.z,this.colorTeam1),this.player2Goalie=new o.default(this.height,this.paddleWidth,this.paddleHeight,this.width-(this.boardGap+this.paddleWidth),(this.height-this.paddleHeight)/2,h.KEYS.up,h.KEYS.down,this.colorTeam2),this.player2Defenders=new c.default(this.height,this.paddleWidth,this.paddleHeight*(4/3),.8*this.width,this.height,this.height,h.KEYS.up,h.KEYS.down,this.colorTeam2),this.player2Forwards=new b.default(this.height,this.paddleWidth,this.paddleHeight*(5/3),.4*this.width,this.height,this.height,h.KEYS.up,h.KEYS.down,this.colorTeam2),this.player2Centre=new y.default(this.height,this.paddleWidth,2*this.paddleHeight,.3*this.width,this.height,h.KEYS.up,h.KEYS.down,this.colorTeam2),this.ball=new N.default(this.ballRadius,this.width,this.height),document.addEventListener("keydown",function(t){switch(t.key){case h.KEYS.b:n.ball2=new N.default(n.ballRadius,n.width,n.height)}}),this.score1=new v.default(this.width/2-.1*this.width,.1*this.height,.1*this.height),this.score2=new v.default(this.width/2+this.width*(1/16),.1*this.height,.1*this.height),document.addEventListener("keydown",function(t){switch(t.key){case h.KEYS.spaceBar:n.pause=!n.pause}})}return n(t,[{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(h.SVG_NS,"svg");t.setAttributeNS(null,"version","1.1"),t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),this.board.render(t),this.player1Goalie.render(t),this.player1Defenders.render(t),this.player1Forwards.render(t),this.player1Centre.render(t),this.player2Goalie.render(t),this.player2Defenders.render(t),this.player2Forwards.render(t),this.player2Centre.render(t),this.ball.render(t,this.player1Goalie,this.player2Goalie,this.player1Defenders,this.player2Defenders,this.player1Forwards,this.player2Forwards,this.player1Centre,this.player2Centre),this.score1.render(t,this.player1Goalie.score),this.score2.render(t,this.player2Goalie.score),this.ball2&&this.ball2.render(t,this.player1Goalie,this.player2Goalie,this.player1Defenders,this.player2Defenders,this.player1Forwards,this.player2Forwards,this.player1Centre,this.player2Centre)}}}]),t}();e.default=w},function(t,e,i){var r=i(12);"string"==typeof r&&(r=[[t.i,r,""]]);i(17)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,i){"use strict";i(3);var r=i(2),s=function(t){return t&&t.__esModule?t:{default:t}}(r),n=new s.default("game",512,256);!function t(){n.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var i=[],r=!0,s=!1,n=void 0;try{for(var h,l=t[Symbol.iterator]();!(r=(h=l.next()).done)&&(i.push(h.value),!e||i.length!==e);r=!0);}catch(t){s=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(s)throw n}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),h=i(0),l=function(){function t(e,i,s){r(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=s,this.direction=Math.random()<.5?-1:1,this.shot=new Audio("public/sounds/slapshot.wav"),this.reset()}return n(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(t,e){var i=this.x<=2,r=this.x>=this.boardWidth-2,s=this.y-this.radius<=2,n=this.y+this.radius>=this.boardHeight-2;i?this.y>this.boardHeight*(1/3)&&this.y<this.boardHeight*(2/3)?(this.direction=-1,this.goal(e)):this.vx=-this.vx:r?this.y>this.boardHeight*(1/3)&&this.y<this.boardHeight*(2/3)?(this.direction=1,this.goal(t)):this.vx=-this.vx:(s||n)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e,i,r,n,h,l,u){if(this.vx>0){var a=e.coordinates(e.x,e.y,e.width,e.height),o=s(a,4),d=o[0],c=(o[1],o[2]),f=o[3],b=r.coordinates(r.x,r.y1,r.y2,r.width,r.height),p=s(b,6),y=p[0],S=(p[1],p[2]),N=p[3],g=p[4],v=p[5],w=u.coordinates(u.x,u.y,u.width,u.height),m=s(w,4),A=m[0],x=(m[1],m[2]),k=m[3],E=h.coordinates(h.x,h.y1,h.y2,h.width,h.height),C=s(E,6),_=C[0],G=(C[1],C[2]),M=C[3],H=C[4],V=C[5];(this.x+this.radius>=d&&this.x-this.radius<=d&&this.y>=c&&this.y<=f||this.x+this.radius>=y&&this.x-this.radius<=y&&this.y>=S&&this.y<=N||this.x+this.radius>=y&&this.x-this.radius<=y&&this.y>=g&&this.y<=v||this.x+this.radius>=A&&this.x-this.radius<=A&&this.y>=x&&this.y<=k||this.x+this.radius>=_&&this.x-this.radius<=_&&this.y>=G&&this.y<=M||this.x+this.radius>=_&&this.x-this.radius<=_&&this.y>=H&&this.y<=V)&&(this.vx=-this.vx,this.shot.play())}else{var j=t.coordinates(t.x,t.y,t.width,t.height),O=s(j,4),T=(O[0],O[1]),L=O[2],K=O[3],P=i.coordinates(i.x,i.y1,i.y2,i.width,i.height),Y=s(P,6),R=(Y[0],Y[1]),U=Y[2],W=Y[3],B=Y[4],z=Y[5],D=l.coordinates(l.x,l.y,l.width,l.height),q=s(D,4),F=(q[0],q[1]),I=q[2],J=q[3],Q=n.coordinates(n.x,n.y1,n.y2,n.width,n.height),X=s(Q,6),Z=(X[0],X[1]),$=X[2],tt=X[3],et=X[4],it=X[5];(this.x-this.radius<=T&&this.x+this.radius>=T&&this.y>=L&&this.y<=K||this.x-this.radius<=R&&this.x+this.radius>=R&&this.y>=U&&this.y<=W||this.x-this.radius<=R&&this.x+this.radius>=R&&this.y>=B&&this.y<=z||this.x-this.radius<=F&&this.x+this.radius>=F&&this.y>=I&&this.y<=J||this.x-this.radius<=Z&&this.x+this.radius>=Z&&this.y>=$&&this.y<=tt||this.x-this.radius<=Z&&this.x+this.radius>=Z&&this.y>=et&&this.y<=it)&&(this.vx=-this.vx,this.shot.play())}}},{key:"goal",value:function(t){t.score++,this.reset()}},{key:"render",value:function(t,e,i,r,s,n,l,u,a){this.x+=this.vx,this.y+=this.vy,this.wallCollision(e,i),this.paddleCollision(e,i,r,s,n,l,u,a);var o=document.createElementNS(h.SVG_NS,"circle");o.setAttributeNS(null,"cx",this.x),o.setAttributeNS(null,"cy",this.y),o.setAttributeNS(null,"r",this.radius),t.appendChild(o)}}]),t}();e.default=l},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i){r(this,t),this.width=e,this.height=i}return s(t,[{key:"render",value:function(t){var e=document.createElementNS(n.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",0),e.setAttributeNS(null,"y",0),e.setAttributeNS(null,"fill","#f6fbfc"),t.appendChild(e);var i=document.createElementNS(n.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","#ff6666"),i.setAttributeNS(null,"stroke-width","4"),i.setAttributeNS(null,"stroke-dasharray","2 4"),t.appendChild(i);var r=document.createElementNS(n.SVG_NS,"line");r.setAttributeNS(null,"x1",this.width*(1/3)),r.setAttributeNS(null,"y1",0),r.setAttributeNS(null,"x2",this.width*(1/3)),r.setAttributeNS(null,"y2",this.height),r.setAttributeNS(null,"stroke","blue"),r.setAttributeNS(null,"stroke-width","2"),r.setAttributeNS(null,"stroke-dasharray","2 4"),t.appendChild(r);var s=document.createElementNS(n.SVG_NS,"line");s.setAttributeNS(null,"x1",this.width*(2/3)),s.setAttributeNS(null,"y1",0),s.setAttributeNS(null,"x2",this.width*(2/3)),s.setAttributeNS(null,"y2",this.height),s.setAttributeNS(null,"stroke","blue"),s.setAttributeNS(null,"stroke-width","2"),s.setAttributeNS(null,"stroke-dasharray","2 4"),t.appendChild(s);var h=document.createElementNS(n.SVG_NS,"circle");h.setAttributeNS(null,"cx",this.width/2),h.setAttributeNS(null,"cy",this.height/2),h.setAttributeNS(null,"r",this.width*(1/8)),h.setAttributeNS(null,"stroke","#ff6666"),h.setAttributeNS(null,"stroke-width","2"),h.setAttributeNS(null,"stroke-dasharray","2 4"),h.setAttributeNS(null,"fill","none"),t.appendChild(h);var l=document.createElementNS(n.SVG_NS,"circle");l.setAttributeNS(null,"cx",this.width/2),l.setAttributeNS(null,"cy",this.height/2),l.setAttributeNS(null,"r",6),l.setAttributeNS(null,"fill","#ff6666"),t.appendChild(l);var u=document.createElementNS(n.SVG_NS,"circle");u.setAttributeNS(null,"cx",this.width*(1/6)),u.setAttributeNS(null,"cy",.25*this.height),u.setAttributeNS(null,"r",this.width*(1/12)),u.setAttributeNS(null,"stroke","#ff6666"),u.setAttributeNS(null,"stroke-width","2"),u.setAttributeNS(null,"stroke-dasharray","2 4"),u.setAttributeNS(null,"fill","none"),t.appendChild(u);var a=document.createElementNS(n.SVG_NS,"circle");a.setAttributeNS(null,"cx",this.width*(1/6)),a.setAttributeNS(null,"cy",.25*this.height),a.setAttributeNS(null,"r",this.width*(1/120)),a.setAttributeNS(null,"fill","#ff6666"),t.appendChild(a);var o=document.createElementNS(n.SVG_NS,"circle");o.setAttributeNS(null,"cx",this.width*(5/6)),o.setAttributeNS(null,"cy",.25*this.height),o.setAttributeNS(null,"r",this.width*(1/12)),o.setAttributeNS(null,"stroke","#ff6666"),o.setAttributeNS(null,"stroke-width","2"),o.setAttributeNS(null,"stroke-dasharray","2 4"),o.setAttributeNS(null,"fill","none"),t.appendChild(o);var d=document.createElementNS(n.SVG_NS,"circle");d.setAttributeNS(null,"cx",this.width*(5/6)),d.setAttributeNS(null,"cy",.25*this.height),d.setAttributeNS(null,"r",this.width*(1/120)),d.setAttributeNS(null,"fill","#ff6666"),t.appendChild(d);var c=document.createElementNS(n.SVG_NS,"circle");c.setAttributeNS(null,"cx",this.width*(1/6)),c.setAttributeNS(null,"cy",.75*this.height),c.setAttributeNS(null,"r",this.width*(1/12)),c.setAttributeNS(null,"stroke","#ff6666"),c.setAttributeNS(null,"stroke-width","2"),c.setAttributeNS(null,"stroke-dasharray","2 4"),c.setAttributeNS(null,"fill","none"),t.appendChild(c);var f=document.createElementNS(n.SVG_NS,"circle");f.setAttributeNS(null,"cx",this.width*(1/6)),f.setAttributeNS(null,"cy",.75*this.height),f.setAttributeNS(null,"r",this.width*(1/120)),f.setAttributeNS(null,"fill","#ff6666"),t.appendChild(f);var b=document.createElementNS(n.SVG_NS,"circle");b.setAttributeNS(null,"cx",this.width*(5/6)),b.setAttributeNS(null,"cy",.75*this.height),b.setAttributeNS(null,"r",this.width*(1/12)),b.setAttributeNS(null,"stroke","#ff6666"),b.setAttributeNS(null,"stroke-width","2"),b.setAttributeNS(null,"stroke-dasharray","2 4"),b.setAttributeNS(null,"fill","none"),t.appendChild(b);var p=document.createElementNS(n.SVG_NS,"circle");p.setAttributeNS(null,"cx",this.width*(5/6)),p.setAttributeNS(null,"cy",.75*this.height),p.setAttributeNS(null,"r",this.width*(1/120)),p.setAttributeNS(null,"fill","#ff6666"),t.appendChild(p);var y=document.createElementNS(n.SVG_NS,"circle");y.setAttributeNS(null,"cx",0),y.setAttributeNS(null,"cy",this.height/2),y.setAttributeNS(null,"r",this.height*(1/6)),y.setAttributeNS(null,"stroke","#ff6666"),y.setAttributeNS(null,"stroke-width","2"),y.setAttributeNS(null,"stroke-dasharray","2"),y.setAttributeNS(null,"fill","#e6f3f7"),t.appendChild(y);var S=document.createElementNS(n.SVG_NS,"circle");S.setAttributeNS(null,"cx",this.width),S.setAttributeNS(null,"cy",this.height/2),S.setAttributeNS(null,"r",this.height*(1/6)),S.setAttributeNS(null,"stroke","#ff6666"),S.setAttributeNS(null,"stroke-width","2"),S.setAttributeNS(null,"stroke-dasharray","2"),S.setAttributeNS(null,"fill","#e6f3f7"),t.appendChild(S);var N=document.createElementNS(n.SVG_NS,"line");N.setAttributeNS(null,"x1",0),N.setAttributeNS(null,"y1",0),N.setAttributeNS(null,"x2",this.width),N.setAttributeNS(null,"y2",0),N.setAttributeNS(null,"stroke","grey"),N.setAttributeNS(null,"stroke-width","4"),t.appendChild(N);var g=document.createElementNS(n.SVG_NS,"line");g.setAttributeNS(null,"x1",0),g.setAttributeNS(null,"y1",this.height),g.setAttributeNS(null,"x2",this.width),g.setAttributeNS(null,"y2",this.height),g.setAttributeNS(null,"stroke","grey"),g.setAttributeNS(null,"stroke-width","4"),t.appendChild(g);var v=document.createElementNS(n.SVG_NS,"line");v.setAttributeNS(null,"x1",0),v.setAttributeNS(null,"y1",0),v.setAttributeNS(null,"x2",0),v.setAttributeNS(null,"y2",this.height*(1/3)),v.setAttributeNS(null,"stroke","grey"),v.setAttributeNS(null,"stroke-width","4"),t.appendChild(v);var w=document.createElementNS(n.SVG_NS,"line");w.setAttributeNS(null,"x1",0),w.setAttributeNS(null,"y1",this.height*(2/3)),w.setAttributeNS(null,"x2",0),w.setAttributeNS(null,"y2",this.height),w.setAttributeNS(null,"stroke","grey"),w.setAttributeNS(null,"stroke-width","4"),t.appendChild(w);var m=document.createElementNS(n.SVG_NS,"line");m.setAttributeNS(null,"x1",this.width),m.setAttributeNS(null,"y1",0),m.setAttributeNS(null,"x2",this.width),m.setAttributeNS(null,"y2",this.height*(1/3)),m.setAttributeNS(null,"stroke","grey"),m.setAttributeNS(null,"stroke-width","4"),t.appendChild(m);var A=document.createElementNS(n.SVG_NS,"line");A.setAttributeNS(null,"x1",this.width),A.setAttributeNS(null,"y1",this.height*(2/3)),A.setAttributeNS(null,"x2",this.width),A.setAttributeNS(null,"y2",this.height),A.setAttributeNS(null,"stroke","grey"),A.setAttributeNS(null,"stroke-width","4"),t.appendChild(A)}}]),t}();e.default=h},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i,s,n,h,l,u,a){var o=this;r(this,t),this.boardHeight=e,this.width=i,this.height=s,this.x=n,this.y=(h-this.height)/2,this.speed=10,this.score=0,this.color=a,document.addEventListener("keydown",function(t){switch(t.key){case l:o.up();break;case u:o.down()}})}return s(t,[{key:"coordinates",value:function(t,e,i,r){return[t,t+i,e,e+r]}},{key:"up",value:function(){this.y=Math.max(.2*this.boardHeight,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(.8*this.boardHeight-this.height,this.y+this.speed)}},{key:"render",value:function(t){var e=document.createElementNS(n.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"fill",this.color),t.appendChild(e)}}]),t}();e.default=h},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i,s,n,h,l,u,a,o){var d=this;r(this,t),this.boardHeight=e,this.width=i,this.height=s*(4/3),this.x=n,this.y1=.3*h-this.height/2,this.y2=.7*l-this.height/2,this.speed=10,this.score=0,this.color=o,document.addEventListener("keydown",function(t){switch(t.key){case u:d.up();break;case a:d.down()}})}return s(t,[{key:"coordinates",value:function(t,e,i,r,s){return[t,t+r,e,e+s,i,i+s]}},{key:"up",value:function(){this.y1=Math.max(0,this.y1-this.speed),this.y2=Math.max(.4*this.boardHeight,this.y2-this.speed)}},{key:"down",value:function(){this.y1=Math.min(.6*this.boardHeight-this.height,this.y1+this.speed),this.y2=Math.min(this.boardHeight-this.height,this.y2+this.speed)}},{key:"render",value:function(t){var e=document.createElementNS(n.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y1),e.setAttributeNS(null,"fill",this.color),t.appendChild(e);var i=document.createElementNS(n.SVG_NS,"rect");i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y2),i.setAttributeNS(null,"fill",this.color),t.appendChild(i)}}]),t}();e.default=h},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i,s,n,h,l,u,a,o){var d=this;r(this,t),this.boardHeight=e,this.width=i,this.height=s,this.x=n,this.y1=.3*h-this.height/2,this.y2=.7*l-this.height/2,this.speed=10,this.score=0,this.color=o,document.addEventListener("keydown",function(t){switch(t.key){case u:d.up();break;case a:d.down()}})}return s(t,[{key:"coordinates",value:function(t,e,i,r,s){return[t,t+r,e,e+s,i,i+s]}},{key:"up",value:function(){this.y1=Math.max(0,this.y1-this.speed),this.y2=Math.max(.4*this.boardHeight,this.y2-this.speed)}},{key:"down",value:function(){this.y1=Math.min(.6*this.boardHeight-this.height,this.y1+this.speed),this.y2=Math.min(this.boardHeight-this.height,this.y2+this.speed)}},{key:"render",value:function(t){var e=document.createElementNS(n.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y1),e.setAttributeNS(null,"fill",this.color),t.appendChild(e);var i=document.createElementNS(n.SVG_NS,"rect");i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y2),i.setAttributeNS(null,"fill",this.color),t.appendChild(i)}}]),t}();e.default=h},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i,s,n,h,l,u,a){var o=this;r(this,t),this.boardHeight=e,this.width=i,this.height=s,this.x=n,this.y=h,this.speed=10,this.score=0,this.color=a,document.addEventListener("keydown",function(t){switch(t.key){case l:o.up();break;case u:o.down()}})}return s(t,[{key:"coordinates",value:function(t,e,i,r){return[t,t+i,e,e+r]}},{key:"up",value:function(){this.y=Math.max(.2*this.boardHeight,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(.8*this.boardHeight-this.height,this.y+this.speed)}},{key:"render",value:function(t){var e=document.createElementNS(n.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"fill",this.color),t.appendChild(e)}}]),t}();e.default=h},function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),n=i(0),h=function(){function t(e,i,s){r(this,t),this.x=e,this.y=i,this.size=s}return s(t,[{key:"render",value:function(t,e){var i=document.createElementNS(n.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-size",this.size),i.textContent=e,t.appendChild(i)}}]),t}();e.default=h},function(t,e,i){e=t.exports=i(13)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(16)+') format("woff"),url('+i(15)+') format("truetype"),url('+i(14)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;height:100vh;justify-content:center;width:100%}body,text{font-family:Silkscreen Web,monotype}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(r[n]=!0)}for(s=0;s<e.length;s++){var h=e[s];"number"==typeof h[0]&&r[h[0]]||(i&&!h[2]?h[2]=i:i&&(h[2]="("+h[2]+") and ("+i+")"),t.push(h))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var r=t[i],s=c[r.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](r.parts[n]);for(;n<r.parts.length;n++)s.parts.push(u(r.parts[n],e))}else{for(var h=[],n=0;n<r.parts.length;n++)h.push(u(r.parts[n],e));c[r.id]={id:r.id,refs:1,parts:h}}}}function r(t){for(var e=[],i={},r=0;r<t.length;r++){var s=t[r],n=s[0],h=s[1],l=s[2],u=s[3],a={css:h,media:l,sourceMap:u};i[n]?i[n].parts.push(a):e.push(i[n]={id:n,parts:[a]})}return e}function s(t,e){var i=p(),r=N[N.length-1];if("top"===t.insertAt)r?r.nextSibling?i.insertBefore(e,r.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),N.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function n(t){t.parentNode.removeChild(t);var e=N.indexOf(t);e>=0&&N.splice(e,1)}function h(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",s(t,e),e}function u(t,e){var i,r,s;if(e.singleton){var u=S++;i=y||(y=h(e)),r=a.bind(null,i,u,!1),s=a.bind(null,i,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(e),r=d.bind(null,i),s=function(){n(i),i.href&&URL.revokeObjectURL(i.href)}):(i=h(e),r=o.bind(null,i),s=function(){n(i)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}function a(t,e,i,r){var s=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var n=document.createTextNode(s),h=t.childNodes;h[e]&&t.removeChild(h[e]),h.length?t.insertBefore(n,h[e]):t.appendChild(n)}}function o(t,e){var i=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,r=e.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),n=t.href;t.href=URL.createObjectURL(s),n&&URL.revokeObjectURL(n)}var c={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},b=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,S=0,N=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=b()),void 0===e.insertAt&&(e.insertAt="bottom");var s=r(t);return i(s,e),function(t){for(var n=[],h=0;h<s.length;h++){var l=s[h],u=c[l.id];u.refs--,n.push(u)}if(t){i(r(t),e)}for(var h=0;h<n.length;h++){var u=n[h];if(0===u.refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete c[u.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);