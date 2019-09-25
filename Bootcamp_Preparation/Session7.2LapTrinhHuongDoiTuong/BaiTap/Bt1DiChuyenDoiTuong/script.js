function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok right: ' + this.left + "," + this.top);
  }
  this.moveLeft = function(){
    this.left -= this.speed;
    console.log('ok left: ' + this.left + "," + this.top);
  }
  this.moveDown = function(){
    this.top += this.speed;
    console.log('ok down: ' + this.left + "," + this.top);
  }
  this.moveUp = function(){
    this.top -= this.speed;
    console.log('ok up: ' + this.left + "," + this.top);
  }
}

let  leftLocation = 20,
    topLocation = 30;
let hero = new Hero('pikachu.png', leftLocation, topLocation, 200, 40);

function start(){
  if ((hero.left < window.innerWidth - hero.size + leftLocation - hero.speed) && (hero.top <= topLocation + hero.speed)){
    hero.moveRight();
  }
  else if ((hero.left >= window.innerWidth - hero.size + leftLocation - hero.speed) 
    && (hero.top < window.innerHeight - hero.size + topLocation - hero.speed)){
    hero.moveDown();
  }
  else if ((hero.left > leftLocation + hero.speed) && (hero.top >= window.innerHeight - hero.size + topLocation - hero.speed)) {
    hero.moveLeft();
  }
  else if ((hero.left <= leftLocation + hero.speed) && (hero.top > topLocation + hero.speed)){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();