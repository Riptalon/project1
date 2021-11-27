var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 12;
var appleI = document.getElementById("imagine");
var count = 0;



  //snake alb
var snake = {
  x: 740,
  y: 400,
  dx: grid,  //snake velocity
  dy: 90,    
  cells: [],
  maxCells: 1
};
  //snake rosu
var snake2 = {
  x: 730,
  y: 300,
  dx: -grid,
  dy: -90,
  cells: [],
  maxCells: 1

};
  //test snake rau
var snake3 = {
   x: 450,
  y: 350,
  dx: -grid,
  dy: -90,
  cells: [],
  maxCells: 10
};

  //load image mar
const img = new Image();
img.onload = start;
img.src = 'apple.png';


  //marul
var apple = {
  x: 730,
  y: 350
};
  // wall = future stuff..
var wall = {
  x:500,
  y:200,
  height: 50,
  width: 20

};


  //random numbers for respawns
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function start(){  //load images
  if(--imgCount>0){return;}
  pattern1=context.createPattern(img1,'repeat');
  loop();
}

  // joaca
function loop() {
  requestAnimationFrame(loop);

  if (++count < 1) {
    return; 
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);



  // miscare snake alb
  snake.x += snake.dx*0.5;
  snake.y += snake.dy*0.5;
  //blocam snake in cadru
  if (snake.x < 0) {
    snake.dx = grid;
  }
  else if (snake.x >= canvas.width-3) {
    snake.dx = -grid;
  }
  
  if (snake.y < 0) {
    snake.dy = grid;
  }
  else if (snake.y >= canvas.height-3) {
    snake.dy = -grid;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // yellow snake speed
  snake2.x += snake2.dx*0.5;
  snake2.y += snake2.dy*0.5;

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
  // keep track of where snake has been. front of the array is always the head
  snake2.cells.unshift({x: snake2.x, y: snake2.y});

  if (snake2.cells.length > snake2.maxCells) {
    snake2.cells.pop();
  }




  

  //desenam marul
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  context.drawImage(img, apple.x-40, apple.y-45,);



  //desenam snake yellow + functia mancare+score
  
  
  context.fillStyle='yellow'
  snake2.cells.forEach(function(cell, index) {
  context.fillRect(cell.x, cell.y, grid-5, grid-5);
    //eating apple snake yellow
    var diffx = Math.abs(cell.x-apple.x)
    var diffy = Math.abs(cell.y-apple.y)
    if (diffx<22 && diffy<22) {
      snake2.maxCells++;
      apple.x = getRandomInt(0, 80) * grid;
      apple.y = getRandomInt(0, 40) * grid;
      document.getElementsByClassName('myScore2')[0].innerHTML = snake2.cells.length
      console.log(document.getElementsByClassName('myScore2')[0]) 
    }
  });


  //snake alb + funcita mancare + score
  context.fillStyle = 'white';
  snake.cells.forEach(function(cell, index) {
  context.fillRect(cell.x, cell.y, grid-5, grid-5)

    var diffx = Math.abs(cell.x-apple.x)
    var diffy = Math.abs(cell.y-apple.y)
    if (diffx<22 && diffy<22) {
      snake.maxCells++;
      apple.x = getRandomInt(0, 80) * grid;
      apple.y = getRandomInt(0, 40) * grid;
      document.getElementsByClassName('myScore')[0].innerHTML = snake.cells.length
      console.log(document.getElementsByClassName('myScore')[0]) 
    }
  });


  //controls snake alb
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



  //controls snake yellow
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