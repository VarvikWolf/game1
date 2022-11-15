// class 
class Sprite 
{
  constructor({position = {x:0, y:0}, imageSrc, frames = { max: 1}})
  {
    this.imageSrc = imageSrc
    this.position = position
    this.image = new Image()
    this.frames = {
      max:  frames.max,
      current: 0,
      elapsed: 0,
      hold: 4
    }
  }
  draw(){
    const cropWidth = this.image.width / this.frames.max
    const crop ={
      position: {
        x:cropWidth * this.frames.current,
        y:0
      },
      width: cropWidth,
      height: this.image.height
    }
  c.drawImage(this.image, crop.position.x, 
     crop.position.y, 
    crop.width, crop.height,
    this.position.x ,
    this.position.y,
    crop.width,
    crop.height)
    this.frames.elapsed++
    if (this.frames.elapsed % this.frames.hold === 0){
    this.frames.current++
    if (this.frames.current >= this.frames.max - 1)
    {
      this.frames.current = 0
    }
  }
}
}


class Projectile extends Sprite {
    constructor({position = {x:0, y:0}, enemy})
    {
   
      super({position, imageSrc :'./img/bullet.png'}
        )
    
      this.velosity = {
        x:0,
        y:0
      }
      this.enemy = enemy
      this.radius = 10
      this.image = imagebull
    }
    
      
    
    update()
  {  super.draw()
    
    
    const angle = Math.atan2(
      this.enemy.position.y + 30 - this.position.y,
      this.enemy.position.x + 30 - this.position.x
    )
   this.velosity.x = Math.cos(angle)*5
   this.velosity.y = Math.sin(angle)*5
  
   this.position.x += this.velosity.x
  this.position.y += this.velosity.y
    
  }
  }

  
class Player 
{
  constructor({position = { x:0, y: 0 }})
  {
    this.position = position
    this.velosity = {
      x:0,
      y:0
    },
    this.radius = 1000
    this.target
    this.money = 0;
 this.center = {
  x: 25,
  y:35
 }
    this.health = 100
    this.frame = 0
    this.lvl = 0
    this.projectiles = []
  }
  draw()
  {
    this.center.x = this.position.x - 25
    this.center.y = this.position.y - 20
    c.fillStyle = 'green'
    c.fillRect(this.position.x - 20, this.position.y, 50, 70)

    c.beginPath()
    c.arc(this.position.x + 15, this.position.y + 20, this.radius, 0 , 2 * Math.PI)
    c.fillStyle = 'rgba(0, 0, 255, 0.1)'
    c.fill()
    c.fillStyle = 'blue'
    c.fillRect(0, 0, this.lvl, 40)
    c.fillStyle = 'red'
    c.fillRect(this.position.x - 40, this.position.y + 100, 100, 12)
    c.fillStyle = 'green'
    c.fillRect(this.position.x - 40, this.position.y + 100, this.health, 12)
   
  }
  update()
  {
    this.draw()
    this.position.x += this.velosity.x
    this.position.y += this.velosity.y
    this.frame++
    if(this.frame % (40 - localStorage.attackspeed+1) === 0 && this.target && player.lvl < 900)
    {
      this.projectiles.push(new Projectile({
        position: 
        {
          x:this.position.x,
          y: this.position.y
        },
        enemy:this.target ,
        

      }))
    }
  }
}
let amage = new Image()
class Enemy extends Sprite {
    constructor()
    {
      super({
        imageSrc:amage,
        frames: {
          max: 7 

        }
    })
   this.position =
   {
    x:Math.random() * 1950 + 100,
    y: Math.random() 
   }
   this.velosity = 
    {
    x:40,
    y: 2
    }
   this.color  ='red'
   this.health = 100;
   this.radius = 0
   amage = this.image
  }
  drow()
  {
   
    c.fillStyle = this.color
    c.beginPath()
    super.draw()
    c.fill()
   
    c.fillRect(this.position.x , this.position.y + 90, 100, 10  )
    c.fillStyle = 'green'
    c.fillRect(this.position.x , this.position.y + 90, this.health, 10  )
  }
  update() {
    this.drow()    
    const angle = Math.atan2(
      player.center.y - this.position.y,
      player.center.x - this.position.x
    )
   
   this.velosity.x = Math.cos(angle)
   this.velosity.y = Math.sin(angle)
   if ( player.lvl < 900) {
   this.position.x += this.velosity.x
  this.position.y += this.velosity.y
   }  
    }
  }
