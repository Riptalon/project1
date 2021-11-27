var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 12;
var appleI = document.getElementById("imagine");
var count = 0;
var pattern1;
//snake alb
var snake = {
  x: 40,
  y: 20,
  dx: grid,
  dy: 90,
  cells: [],
  maxCells: 7
};
//snake rosu
var snake2 = {
  x: 30,
  y: 40,
  dx: -grid,
  dy: -90,
  cells: [],
  maxCells: 5

}
//test snake rau

var snake3 = {

  x: 450,
  y: 350,
  dx: -grid,
  dy: -90,
  cells: [],
  maxCells: 10


};

const img = new Image();
img.onload = start;
img.src = 'apple.png';



var apple = {
  x: 730,
  y: 350
};
var wall = {
  x:500,
  y:200,
  height: 50,
  width: 20

};

var marul =

{
  x:100,
  y:100,

};



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var imgCount=2;
function start(){
  if(--imgCount>0){return;}
  pattern1=context.createPattern(img1,'repeat');
  loop();
}


function loop() {
  requestAnimationFrame(loop);

  if (++count < 1) {
    
    
    return;
    
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
// white snake speed
  snake.x += snake.dx*0.2;
  snake.y += snake.dy*0.2;

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
//snake rau speed
snake3.x += snake3.dx*0.005;
snake3.y += snake3.dy*0.005;

if (snake3.x < 0) {
  snake3.dx = grid;
}
else if (snake3.x >= canvas.width) {
  snake3.dx = -grid;
}

if (snake3.y < 0) {
  snake3.dy = grid;
}
else if (snake3.y >= canvas.height) {
  snake3.dy = -grid;
}

snake3.cells.unshift({x: snake3.x, y: snake3.y});

if (snake3.cells.length > snake3.maxCells) {
  snake3.cells.pop();
}

// red snake speed
  snake2.x += snake2.dx*0.2;
  snake2.y += snake2.dy*0.2;

  if (snake2.x < 0) {
    snake2.dx = grid;
  }
  else if (snake2.x >= canvas.width) {
    snake2.dx = -grid;
  }
  
  if (snake2.y < 0) {
    snake2.dy = grid;
  }
  else if (snake2.y >= canvas.height) {
    snake2.dy = -grid;
  }

  snake2.cells.unshift({x: snake2.x, y: snake2.y});

  if (snake2.cells.length > snake2.maxCells) {
    snake2.cells.pop();
  }




  

//draw wall and apple
  context.fillStyle = "yellow";
  context.fillRect(wall.x, wall.y, wall.width, wall.height);
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  context.drawImage(img, apple.x-40, apple.y-45,);

var countSnake1 = 0;
var countSnake2 = 0;
  snake2.cells.forEach(function(cell, index) {
  if (countSnake2===0) {
    context.fillStyle='black'

  }

    context.fillRect(cell.x, cell.y, grid-8, grid-8);  
context.fillStyle="red";
countSnake2++
    var startWallx = wall.x;
    var endWallx = wall.width+wall.x
    var startWally = wall.y
    var endWally = wall.height+wall.y

//test apple eating


    if (startWallx<snake2.x && snake2.x<endWallx && endWally>snake2.y && snake2.y>startWally) {
      snake2.dx=-snake2.dx
      snake2.dy=-snake2.dy
      snake2.maxCells++;
      wall.x = getRandomInt(0, 10) * grid;
      wall.y = getRandomInt(0, 10) * grid;
      wall.width = getRandomInt(80, 150) ;
      wall.height = getRandomInt(100, 300) ;

      document.getElementsByClassName('myScore2')[0].innerHTML = snake2.cells.length
      
      console.log(document.getElementsByClassName('myScore')[0])
    }
  });



  snake2.cells.forEach(function(cell, index) {
  
    if (countSnake2===0) {
      context.fillStyle='black'
  
    }
  
      context.fillRect(cell.x, cell.y, grid-8, grid-8);  
  context.fillStyle="red";
  countSnake2++
    var diffx = Math.abs(cell.x-apple.x)
    var diffy = Math.abs(cell.y-apple.y)
    if (diffx<22 && diffy<22) {
      snake2.maxCells++;
      //window.open('http://cdn23.us1.fansshare.com/photos/birdman/birdman-and-lil-wayne-the-game-rapper-wallpaper-normal-wallpaper-199689642.jpg');
      apple.x = getRandomInt(0, 80) * grid;
      apple.y = getRandomInt(0, 40) * grid;
      document.getElementsByClassName('myScore2')[0].innerHTML = snake.cells.length
      console.log(document.getElementsByClassName('myScore2')[0]) 
    }
  });


//test desen snake 



  context.fillStyle = 'white';
  snake.cells.forEach(function(cell, index) {
  
    if (countSnake1==0) {
      context.fillStyle='cyan'
  
    }
  
      context.fillRect(cell.x, cell.y, grid-8, grid-8);  
  context.fillStyle="white";
  countSnake1++

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
  
    if (countSnake1===0) {
      context.fillStyle='orange'
  
    }
  
      context.fillRect(cell.x, cell.y, grid-8, grid-8);  
  context.fillStyle="white";
  countSnake1++
    var diffx = Math.abs(cell.x-apple.x)
    var diffy = Math.abs(cell.y-apple.y)
    if (diffx<22 && diffy<22) {
      snake.maxCells++;
      //window.open('http://cdn23.us1.fansshare.com/photos/birdman/birdman-and-lil-wayne-the-game-rapper-wallpaper-normal-wallpaper-199689642.jpg');
      apple.x = getRandomInt(0, 80) * grid;
      apple.y = getRandomInt(0, 40) * grid;
      document.getElementsByClassName('myScore')[0].innerHTML = snake.cells.length
      console.log(document.getElementsByClassName('myScore')[0]) 
    }
  });



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




document.addEventListener('keydown', function(e) {
  if (e.which === 81 ) { if(snake2.dx=0){
        snake2.dx=-grid;
      
  }
  else
    snake2.dx = -grid;
    snake2.dy = 0
  }
  else if (e.which === 90 ) {
    snake2.dy = -grid;
    snake2.dx = 0;
  }
  else if (e.which === 68 ) {
    snake2.dx = grid;
    snake2.dy = 0;
  }
  else if (e.which === 83 ) {
    snake2.dy = grid;
    snake2.dx = 0;
  }
});

}
requestAnimationFrame(loop);