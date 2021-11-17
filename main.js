var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 12;
var count = 0;

var snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 1
};
var apple = {
  x: 320,
  y: 320
};
var wall = {
  x:50,
  y:50,
  height: 320,
  width: 20

};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);

  if (++count < 1) {
    
    
    return;
    
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  snake.x += snake.dx*0.8;
  snake.y += snake.dy*0.8;

  if (snake.x < 0) {
    snake.dx = grid;
  }
  else if (snake.x >= canvas.width) {
    snake.dx = -grid;
  }
  
  if (snake.y < 0) {
    snake.dy = grid;
  }
  else if (snake.y >= canvas.height) {
    snake.dy = -grid;
  }

  snake.cells.unshift({x: snake.x, y: snake.y});

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  context.fillStyle = 'blue';
  context.fillRect(wall.x, wall.y, wall.width, wall.height);
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  snake.cells.forEach(function(cell, index) {
  
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  

    var startWallx = wall.x;
    var endWallx = wall.width+wall.x
    var startWally = wall.y
    var endWally = wall.height+wall.y

    if (startWallx<snake.x && snake.x<endWallx && endWally>snake.y && snake.y>startWally) {
      snake.dx=-snake.dx
      snake.dy=-snake.dy
      snake.maxCells++;
      wall.x = getRandomInt(0, 80) * grid;
      wall.y = getRandomInt(0, 40) * grid;
      wall.width = getRandomInt(80, 150) ;
      wall.height = getRandomInt(100, 300) ;

      document.getElementsByClassName('myScore')[0].innerHTML = snake.cells.length
      console.log(document.getElementsByClassName('myScore')[0])
    }
  });



  snake.cells.forEach(function(cell, index) {
  
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  

    var diffx = Math.abs(cell.x-apple.x)
    var diffy = Math.abs(cell.y-apple.y)
    if (diffx<10 && diffy<10) {
      snake.maxCells++;
      window.open('http://cdn23.us1.fansshare.com/photos/birdman/birdman-and-lil-wayne-the-game-rapper-wallpaper-normal-wallpaper-199689642.jpg');
      apple.x = getRandomInt(0, 80) * grid;
      apple.y = getRandomInt(0, 40) * grid; 
    }
  });
}

document.getElementsByClassName('myScore')[0].innerHTML = snake.cells.length

console.log(document.getElementsByClassName('myScore')[0])
document.addEventListener('keydown', function(e) {
  if (e.which === 37 ) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.which === 38 ) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.which === 39 ) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.which === 40 ) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);