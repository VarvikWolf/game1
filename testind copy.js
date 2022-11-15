var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var arcX  = 300;
  var arcY = 100;
  let a = 0
  let possx
let possy


let frames = 0
  var lineX = 0;
  let can = 2 
  const image = new Image()
  const imageback = new Image ()
  var lineY = 0;
  var speed = 2;
  var vector = {top: false, bottom: false, left: false, right: false}
  var KEY_COD = {w: 87, d: 68,s: 83, a: 65};

  var bullets = [];  // массив снарядов
   
  function keyDownHandler (e) {
    if (KEY_COD.w == e.keyCode) vector.top = true;
    if (KEY_COD.d == e.keyCode) vector.left = true;
    if (KEY_COD.s == e.keyCode) vector.bottom = true;
    if (KEY_COD.a == e.keyCode) vector.right = true;
  };


  
  function keyUpHandler (e) {
    if (KEY_COD.w == e.keyCode) vector.top = false;
    if (KEY_COD.d == e.keyCode) vector.left = false;
    if (KEY_COD.s == e.keyCode) vector.bottom = false;
    if (KEY_COD.a == e.keyCode) vector.right = false;
  }

  document.addEventListener('keydown', keyDownHandler)
  document.addEventListener('keyup', keyUpHandler)
  
  canvas.addEventListener('mousemove', (event) => {
     lineX = event.layerX;
     lineY = event.layerY;
   
  })

function buld() {
  if (can % 100 === 0) {
     let x = lineX - arcX;
     let y = lineY - arcY;
     let max =  Math.max(Math.abs(x), Math.abs(y)) 
   
     // по клику добавляем информацию о  снаряде в массив  
     bullets.push({
       to: [x*3/max,y*3/max], // нормализованный вектор движения
       pos: [arcX + 15,arcY + 10], // положение 
      
     });
     
    }

}


class Project {
  constructor({position = {x:0, y:0}})
  {
    this.position = {
      x:0, 
      y:0
    }
    this.veolosity = {
      x:0,
      y:0

    }
  }
    draw()
    {
      ctx.beginPath()
      ctx.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI)
      ctx.fillStyle = 'orange'
      ctx.fill()
    }
    update()
    {
      this.draw()
      
  
      
  
      
    }
  
}
////...............................................................
//Player

class Player {
  constructor({position = { x:0, y:0}}) {
    this.position = position
    this.health = 80
    this.width = 70
    this.projectiles = [new Project({
      position:
      {
        x:this.position.x,
        y: this.position.y
      }
    })]
    }

  

  update()
{
  ctx.drawImage(image, arcX, arcY);
  ctx.fillStyle = 'green'
  
  
}
}
const player = new Player ({
  position: {
    x: arcX,
    y: arcY
  }
})
//.............................................................................................
  // enemy test
  class Enemy {
    constructor()
    {
   this.position = {
    x: Math.random() * 1000 + 100,
    y: Math.random() * 600 + 100,
   }
   this.velosity = 
    {
    x: 0.5,
    y:0.5
    }
   this.color  ='red'
   this.health = 100;
  }
  drow()
  {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, 100, 0, 2 * Math.PI )
    ctx.fillRect(this.position.x, this.position.y + 120, 100, 10)
    ctx.fill()
    ctx.fillStyle = 'green'
    ctx.fillRect(this.position.x, this.position.y + 120, this.health, 10)
  }
  update() {
    this.drow()    
    const angle = Math.atan2(
      arcY - this.position.y,
      arcX - this.position.x
    )
   this.velosity.x = Math.cos(angle)
   this.velosity.y = Math.sin(angle)

   //this.position.x += this.velosity.x
   //this.position.y += this.velosity.y

   
}
 //.............................................................................. 
}
function defcol()
{
  for (let j = 0; j < enemys.length; j++)
  {
   if (collision(arcX, arcY,enemys[j]) && player.health > 0 && enemys[j].health > 0)
   {
    player.health -=0.1
    
   }
   }
  }

   function defcol2()
   {
   for (let i = 0; i < enemys.length; i++)
   {
if (collision2(possx, possy, enemys[i]) && enemys[i].health > 0)
{
  enemys[i].health -= 10
  console.log(enemys[i].health)
}
else enemys[i].health -= 0 
  
  }
}




image.src  = 'player.png'

function collision2(firstX, firstY, second)
{
  if ( !((firstX  < second.position.x || firstY < second.position.y) || 
    (firstY > second.position.y + 100 || firstX > second.position.x + 100 )))
    {
      return true
    }
}

function collision(firstX, firstY, second)
{
  if ( !((firstX + 70 < second.position.x || firstY + 80 < second.position.y) || 
    (firstY > second.position.y + 100 || firstX > second.position.x + 100 )))
    {
      return true
    }
}

let isattack = false


  function draw () {
    frames++
    if (vector.top && arcY >= 50 + speed)  arcY -= speed;
    if (vector.left && arcX < 5000) arcX += speed;
    if (vector.bottom && arcY < 5000) arcY += speed;
    if (vector.right && arcX >= 50 + speed) arcX -= speed;
//

//


    ctx.clearRect(0, 0, canvas.width, canvas.height);
   can++
   ctx.fillStyle = 'green'
   ctx.beginPath();
  
   ctx.stroke();
   
  player.update()
  player.projectiles.forEach( projectile => {
    projectile.update()
  }
  )
    ctx.beginPath();
   
    ctx.lineTo(lineX,lineY);
    ctx.stroke();
    buld()
    hand()
    defcol()
   //defcol2()
   if ( isattack )
   {
    console.log('go')
   }
    ctx.fillRect(arcX - 20, arcY + 75, 80,  10)
    ctx.fillStyle = 'green'
    ctx.fillRect(arcX - 20, arcY + 75, player.health,  10)
   

    bullets.forEach(b => {
        //сдвигаем снаряд на значение вектора 
       
       
        b.pos[0] += b.to[0];  
        b.pos[1] += b.to[1]; 
        possx = b.pos[0]
        possy = b.pos[1]
  
        // рисуем его
        
        ctx.beginPath();
        
        ctx.arc(...b.pos, 5, 0, 2 * Math.PI);
        ctx.stroke();
        
    })
  

   
    // удаляем снаряды покинувшие канву
    for (let i = 0; i < enemys.length; i++) {

      if(enemys[i].health > 0)
{
    bullets = bullets.filter(b =>{
      
        return (b.pos[0] > 0 && b.pos[0] < canvas.width + 400 &&
               b.pos[0] > 0 && b.pos[0] < canvas.height + 400) &&
               (b.pos[0] > 0 && (b.pos[0] < enemys[i].position.x || b.pos[1] < enemys[i].position.y)
                || (b.pos[1] > enemys[i].position.y + 100 || b.pos[0] > enemys[i].position.x  + 100)
              
               )
            

    })
  
  } 
  }

   
    // для отладки - подсчет снарядов
    count.textContent = bullets.length
  }

  function col2()
  {

    for (let i = 0; i < enemys.length; i++)
{
    if (( possx > enemys[i].position.x && possx < enemys[i].position.x + 100 )
    && (possy > enemys[i].position.y && possy < enemys[i].position.y + 100 )){
    enemys[i].health -= 10
    console.log(enemys[i].health)
    }
  }

  }

  const enemys = [  new Enemy({
  })]
  setInterval(draw, 10)

  function hand() 
  {
    for (let i = 0; i < enemys.length; i++)
    {
      if (enemys[i].health > 0)
      enemys[i].update()
    }
    if (frames % 500 === 0)
    {
      enemys.push(new Enemy())
    }
  }