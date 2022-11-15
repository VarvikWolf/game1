class Sprite {
    constructor({position, 
      imageSrc,
       scale = 1,
       frameMax = 1, 
       offset= {x: 0, y:0 } }) 
    {
      this.position = position
      this.width = 50
      this.height = 150
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.frameMax = frameMax
      this.frameCurret = 0;
      this.frameElapsed = 0
      this.frameHold = 5
      this.offset = offset
  
    }
    drow() {
        c.drawImage(
            this.image,
        this.frameCurret * (this.image.width / this.frameMax),
        0,
        this.image.width / this.frameMax,
        this.image.height,
        this.position.x - this.offset.x, 
        this.position.y - this.offset.y,
        (this.image.width / this.frameMax) * this.scale, 
         this.image.height * this.scale)
    }

animatedframe() {
  this.frameElapsed++

       if (this.frameElapsed % this.frameHold === 0) {

     if   ( this.frameCurret < this.frameMax - 1) {
        this.frameCurret++
     } else {
        this.frameCurret = 0
     }
     }
}


   
    update() {
       this.drow()
       this.animatedframe()
    }
   }
   
   
   class fighter extends Sprite {
     constructor({position,
         velosity,
         color = 'red', 
     imageSrc, 
     scale = 1, 
     frameMax = 1,
     offset = {x: 0, y:0 },
     sprites,
     attackBox = {offset: {}, width: undefined , height: undefined }
    }) 
     {
        super({ 
            position,
            imageSrc,
            scale,
            frameMax,
           offset

        }) 
      
       this.velosity = velosity 
       this.width = 50
       this.height = 200
       this.lastkey
       this.attackBox = {
        position: {
            x: this.position.x  ,
            y:this.position.y
        } ,
        offset: attackBox.offset,
        width: attackBox.width ,
        height: attackBox.height
       }
       this.color = color
       this.isattacking
       this.health = 100
       this.power = 0
       this.frameCurret = 0;
       this.frameElapsed = 0
       this.frameHold = 5
       this.sprites = sprites
       this.dead = false

     for (const sprite in this.sprites) {
          sprites[sprite].image = new Image()
          sprites[sprite].image.src = sprites[sprite].imageSrc
     }


     }
     
    
     update() {
        this.drow()
        if (!this.dead)
        this.animatedframe()
        this.attackBox.position.x = this.position.x  + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        // c.fillRect(Enemy.attackBox.position.x, Enemy.attackBox.position.y, Enemy.attackBox.width, Enemy.attackBox.height)
    
        this.position.x += this.velosity.x
        this.position.y += this.velosity.y
    
        if (this.position.y + this.height + this.velosity.y >= canvas.height + 40) {
            this.velosity.y = 0;
            this.position.y =417
        }
        else this.velosity.y += gravity
     }
   powerC()
   {
     this.power -= 100
   }
      
      attack() {
        
        this.switchSprite('attack1')
      this.isattacking = true
      }

      TakeHit() { 
        this.health -=10
        if ( this.power < 100)
        this.power += 20
        if ( this.health <= 0) {
          this.switchSprite('Death')
        
        } else 
        this.switchSprite('TakeHit')
       
      }

    switchSprite(sprite) {
     if ( this.image === this.sprites.Death.image) {
      if (this.frameCurret === this.sprites.Death.frameMax - 1)
      this.dead = true
      return
     }


      if (this.image === this.sprites.attack1.image &&
         this.frameCurret < this.sprites.attack1.frameMax - 1 )
          return

          if (this.image === this.sprites.TakeHit.image && this.frameCurret <
            this.sprites.TakeHit.frameMax - 1)
            return
      switch (sprite) {
        
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.frameMax = this.sprites.idle.frameMax
          this.frameCurret = 0
          }
          break
        case 'run':
          if (this.image !== this.sprites.run.image && this.velosity.y === 0){
          this.image = this.sprites.run.image
          this.frameMax = this.sprites.run.frameMax
        this.frameCurret = 0
          }
            break
        case 'jump':
          if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
  this.frameMax = this.sprites.jump.frameMax
  this.frameCurret = 0
          }
          break
        case 'run1':
          if (this.image !== this.sprites.run1.image && this.velosity.y === 0) {
          this.image = this.sprites.run1.image
          this.frameMax = this.sprites.run1.frameMax
          this.frameCurret = 0
          }
          break
        case 'idle1':
          if (this.image !== this.sprites.idle1.image && this.health > 0) {
          this.image = this.sprites.idle1.image
          this.frameMax = this.sprites.idle1.frameMax
          this.frameCurret = 0
          }
          break
         case 'fall':
          if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.frameMax = this.sprites.fall.frameMax
          this.frameCurret = 0
          }
          break
          case 'fall1':
          if (this.image !== this.sprites.fall1.image) {
          this.image = this.sprites.fall1.image
          this.frameMax = this.sprites.fall1.frameMax
          this.frameCurret = 0
          }
          break
          case 'jump1':
          if (this.image !== this.sprites.jump1.image) {
          this.image = this.sprites.jump1.image
          this.frameMax = this.sprites.jump1.frameMax
          this.frameCurret = 0
          }
          break
          case 'attack1':
          if (this.image !== this.sprites.attack1.image ) {
          this.image = this.sprites.attack1.image
          this.frameMax = this.sprites.attack1.frameMax
          this.frameCurret = 0
          }
          break
          case 'TakeHit':
          if (this.image !== this.sprites.TakeHit.image) {
          this.image = this.sprites.TakeHit.image
          this.frameMax = this.sprites.TakeHit.frameMax
          this.frameCurret = 0
          }
          break
          case 'Death':
          if (this.image !== this.sprites.Death.image ) {
          this.image = this.sprites.Death.image
          this.frameMax = this.sprites.Death.frameMax
          this.frameCurret = 0
          }
          break
      }

    }
    }