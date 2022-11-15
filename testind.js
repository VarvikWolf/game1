var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  canvas.width = 1950
  canvas.height = 1600

  let openworld = false
  let lineX
  let lineY
  let frame = 0
let attackspeed = 0;
const imageback = new Image()
const imagebull = new Image()
const imageenemyr = new Image()
const imageenemyl = new Image()
const imagegame = new Image()
const imageupgrade = new Image()


imageupgrade.src = './img/upgrade.png'
imagegame.src = './img/gameback.png'
imageenemyr.src = './img/orcright.png'
imageenemyl.src = './img/orcleft.png'
imagebull.src = './img/bullet.png'
imageback.src = './img/back.png'

  var vector = {top: false, bottom: false, left: false, right: false}
  var KEY_COD = {w: 87, d: 68,s: 83, a: 65};
   
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

const enemys = [new Enemy({
})]
//

//
function hand() 
  {
    for (let i = 0; i < enemys.length; i++)
    {

      if (enemys[i].health > 0){
       
      enemys[i].update()
      
        if (enemys[i].position.x > player.position.x){
      enemys[i].image = imageenemyl
      } else enemys[i].image = imageenemyr
      
    }
  }
    if (frame % 400 === 0 && player.lvl < 900)
    {
      
      enemys.push(new Enemy())
    }


  }
 
localStorage.clear('attackspeed')
function lvlup()
{
  if (player.lvl >= 900)
  {
  upgrage()

  if (attackspeed < 40){
    attackspeed += 10
  }
  localStorage.attackspeed = attackspeed

  } 


  function upgrage()
  {
    document.getElementById('submit4').style.display = 'block'
    c.drawImage(imageupgrade, 0, 0)
  }


}
const player = new Player({
  position: {
  x:300,
  y:400
  }
})
function defcol()
{
  for (let j = 0; j < enemys.length; j++)
  {
   if (collision(player.position.x, player.position.y,enemys[j]) && player.health > 0 && enemys[j].health > 0)
   {
    player.health -=0.1
    
   }
   }
  }
function collision(firstX, firstY, second)
{
  if ( !((firstX + 50 < second.position.x || firstY + 70 < second.position.y) || 
    (firstY > second.position.y + 50 || firstX > second.position.x + 50 )))
    {
      return true
    }
}

if (!localStorage.attackspeed) localStorage.attackspeed = 0

function alert()
{
  animateopen()
}
//


function animateopen()
{
  
  check = true
    requestAnimationFrame(animateopen)

    if ( openworld === false ) {
    
     far++
     
      c.drawImage(imageback, 0, 0)
      for (let i = 0; i < enemys.length; i++)
      {
        if (far % 100 === 0) {
       a = Math.random() * 100 + 0,
       b = Math.random()* 100 + 0
        }
        line[i].draw()
       {
        line.push(new Line())
        }
      
      }
      x = a;
       d = b;
      if (openworld === true) {
      
      }
    } else {
    c.drawImage(imagegame, 0, 0)
    animate()
    }
    } 
    //
let a = 100, b = 100;
let x = 0, d = 0;
let far = 0;
class Line
{
  constructor()
  {
    this.position ={
      x:100,
      y:200
    }
    this.next = {
      x:150,
      y:300
    }
  }
  draw()
  {
   
    c.moveTo(this.position.x + c,this.position.y + d);
    c.lineWidth = 10
    c.lineTo(a,b);
    console.log(x)
    c.stroke();
  }

}
//
const line = [new Line({
  
  
})]



  function animate () {
    
    frame++
    c.fillStyle = 'white'
    player.update()
   
    player.velosity.y = 0
    player.velosity.x = 0
  if (player.lvl < 900) {
    if (vector.top )  player.velosity.y = -6;
    if (vector.left ) player.velosity.x = 6;
    if (vector.bottom ) player.velosity.y = +6;
    if (vector.right ) player.velosity.x = -6;
  }
hand()
lvlup()
defcol()
player.target = null
const validEnemies = enemys.filter(enemy => {
  const xDifference = enemy.position.x - player.position.x
  const yDifference = enemy.position.y - player.position.y
  const distance = Math.hypot(xDifference, yDifference)
  return distance < enemy.radius + player.radius
})
player.target = validEnemies[0]
for ( let j = 0; j < enemys.length ; j++)
{
 
  let minX = Math.abs(enemys[0].position.x - player.position.x)
  let minY = Math.abs(enemys[0].position.y - player.position.y)
const distance = Math.hypot(minX, minY)
  let aX = Math.abs(enemys[j].position.x - player.position.x)
  let aY = Math.abs(enemys[j].position.y - player.position.y)
  const adist = Math.hypot(aX, aY)

if (adist < distance)
{
  aX = minX
  aY = minY
enemys[j].color = 'Blue'
 
  player.target = validEnemies[j]
}
else enemys[j].color = 'red'
}

for (let i = player.projectiles.length - 1; i >=0; i--)
{

  const projectile = player.projectiles[i]
  if (projectile.enemy.health >= 0){
  projectile.update()
  }
  const xDifference = projectile.enemy.position.x + 30 - projectile.position.x
  const yDifference = projectile.enemy.position.y + 30 - projectile.position.y
  const distance = Math.hypot(xDifference, yDifference)
  if ( distance < projectile.enemy.radius + projectile.radius )
  {
    
   projectile.enemy.health -= 50
  
   if (projectile.enemy.health <= 0)
   {
    
    const enemyIndex = enemys.findIndex((enemy) => {
      return projectile.enemy === enemy
    })
    if (enemyIndex > -1){
     enemys.splice(enemyIndex, 1)
     player.lvl += 300
     player.money += 10
     
    }
     
   }
   player.projectiles.splice(i,1)
  }

  }
}



animateopen()

  
 