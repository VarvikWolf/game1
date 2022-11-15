const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const hasagi = new Audio('./yasuo.mp3')
var k = 0
canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width, canvas.height)
const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/srr.png'
})
const background1 = new Sprite({
  position: {
   x: 420,
  y: 250
  },
  imageSrc: './gg.png',
  frameMax: 8,
  scale: 1,
})
const background2 = new Sprite({
  position: {
   x: 0,
  y: 0
  },
  imageSrc: './background2.png',
  scale: 1,
})
const Player1 = new fighter({
  position: {
   x:100,
   y:200
}, 
 velosity:
  {
  x:0,
  y:0
  },
  offset: {
   x:  0,
   y:  0
  },
  imageSrc: './mart/death.png',
  frameMax: 6,
  scale: 2.7,
  offset: {
   x: 200,
   y:190
  },
  sprites: {
  Death: {
    imageSrc: './mart/Death.png',
    frameMax: 6,
  },
}
})

  const Player = new fighter({
   position: {
    x:100,
    y:200
}, 
  velosity:
   {
   x:0,
   y:0
   },
   offset: {
    x:  0,
    y:  0
   },
   imageSrc: './mart/Idle.png',
   frameMax: 8,
   scale: 2.7,
   offset: {
    x: 200,
    y:190
   },
   imageSrc: './mart/idle1.png',
   frameMax: 8,
   scale: 2.7,
   offset: {
    x: 200,
    y:190
   },
   imageSrc: './mart/idle.png',
   frameMax: 8,
   scale: 2.7,
   offset: {
    x: 200,
    y:190
   },
   sprites: {
    idle: {
      imageSrc: './mart/idle.png',
      frameMax: 8,
    },
    idle1: {
      imageSrc: './mart/idle1.png',
      frameMax: 8,
    },  idle2: {
      imageSrc: './mart/idle.png',
      frameMax: 8,
    },
     run: {
      imageSrc: './mart/Run.png',
      frameMax: 8,
    },
    run1: {
      imageSrc: './mart/run1.png',
      frameMax: 8,
    },
    jump: {
      imageSrc: './mart/jump.png',
      frameMax: 2,
    },
    fall: {
      imageSrc: './mart/fall.png',
      frameMax: 2,
    },
    fall1: {
      imageSrc: './mart/fall1.png',
      frameMax: 2,
    },
    jump1: {
      imageSrc: './mart/jump1.png',
      frameMax: 2,
    }
    ,
    attack1: {
      imageSrc: './mart/attack1.png',
      frameMax: 6,
    },
    TakeHit: {
      imageSrc: './mart/TakeHit.png',
      frameMax: 4,
    },
    Death: {
      imageSrc: './mart/Death.png',
      frameMax: 6,
    },
   


   }, 
   attackBox: {
    offset: {
      x: 50,
      y: 50
    },
    width: 215,
    height: 50
  }

   
})

const Enemy = new fighter({
    position: {
     x:400,
     y:600,
 }, 
   velosity:
    {
    x:0,
    y:0
    },
    color: 'blue',
    offset: {
        x:  -50,
        y:  0
       },
  imageSrc: './mart2/idle.png',
   frameMax: 4,
   scale: 2.7,
   offset: {
    x: 200,
    y:205
   },
   sprites: { 
    idle: {
      imageSrc: './mart2/idle.png',
      frameMax: 4,
    },
    idle1: {
      imageSrc: './mart2/idle1.png',
      frameMax: 4,
    },
     run: {
      imageSrc: './mart2/Run.png',
      frameMax: 8,
    },
    run1: {
      imageSrc: './mart2/run1.png',
      frameMax: 8,
    },
    jump: {
      imageSrc: './mart2/jump.png',
      frameMax: 2,
    },
    fall: {
      imageSrc: './mart2/fall.png',
      frameMax: 2,
    },
    fall1: {
      imageSrc: './mart2/fall1.png',
      frameMax: 2,
    },
    jump1: {
      imageSrc: './mart2/jump1.png',
      frameMax: 2,
    }
    ,
    attack1: {
      imageSrc: './mart2/attack1.png',
      frameMax: 4,
    },
    TakeHit: {
      imageSrc: './mart2/TakeHit.png',
      frameMax: 3,
    }, 
    Death: {
      imageSrc: './mart2/Death.png',
      frameMax: 7,
    },
    
  
    
   }, 
   attackBox: {
    offset: {
      x:-100,
      y: 50  
    },
    width: 150,
    height: 50
  }
 })


console.log(Player)
const keys = {
    a: {
        pressed: false
    },
    r: {
      pressed: false
  },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed : false
    }
}

decreacsetimer() 
var cad = 0;
var port = 0;
var b = true
var chek = 1
function animate() {
    var pressed = false;
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
 c.fillRect(0, 0, canvas.width, canvas.height)
 if ( (Player.position.x + Player.width >= 950)  || cad === 1) {
  background2.update()
  cad = 1
  chek = 0
  b = false
 } else if (b === true) {
 background.update()
 }
 if ( Player.health === Enemy.health && timer === 0 ) 
 background1.update()
  Player.update()
  Enemy.update()
  Player.velosity.x = 0
  Enemy.velosity.x = 0

  //portal 
if ( chek === 0 && port === 0) {
port = 1
Player.position.x = 50
}
else 
console.log(chek)

 
  
  //PLAYER MOV

  if(keys.a.pressed && Player.lastkey === 'a' && Player.position.x > -80 && Player.health > 0)
  {
    Player.velosity.x= -5
    Player.switchSprite('run1')
  } else if (keys.d.pressed && Player.lastkey === 'd' && Player.position.x <= 970 && Player.health > 0)
  {
    Player.velosity.x = 5;
    Player.switchSprite('run')
  } else {
    if (Player.position.x < Enemy.position.x && Player.health > 0) {
      Player.switchSprite('idle')
    } else
    if (Player.health > 0) 
    Player.switchSprite('idle1')
    else 
    Player.switchSprite('Death')

  }
  if (Player.position.x < Enemy.position.x && Player.health > 0 ) {
 if(Player.velosity.y < 0 && Player.health > 0) 
 {
  Player.switchSprite('jump')
 }  else if (Player.velosity.y > 0 && Player.health > 0 ) 
 Player.switchSprite('fall')
  } else
  {
    if(Player.velosity.y < 0 && Player.health > 0) 
 {
  Player.switchSprite('jump1')
 }  else if (Player.velosity.y > 0 && Player.health > 0 ) 
 Player.switchSprite('fall1')
  }

  //ENEMY MOV
 
  if(keys.ArrowLeft.pressed && Enemy.lastkey === 'ArrowLeft' && Enemy.position.x > 0 && Enemy.health > 0) {
    Enemy.velosity.x= -5
    Enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && Enemy.lastkey === 'ArrowRight'&& Enemy.position.x <= 974 && Enemy.health >0)
  {
    Enemy.velosity.x = 5;
    Enemy.switchSprite('run1')
  } else {
    if (Player.position.x < Enemy.position.x && Enemy.health > 0 ) {
      Enemy.switchSprite('idle')
    } else if (Enemy.health > 0) 
    Enemy.switchSprite('idle1')
    else 
    Enemy.switchSprite('Death')
  }
  if (Player.position.x < Enemy.position.x && Enemy.health > 0) {
    if(Enemy.velosity.y < 0  && Enemy.health > 0) 
    {
     Enemy.switchSprite('jump')
    }  else if (Enemy.velosity.y > 0 && Enemy.health >0) 
    Enemy.switchSprite('fall')
     } else
     {
       if(Enemy.velosity.y < 0 && Enemy.health >0) 
    {
     Enemy.switchSprite('jump1')
    }  else if (Enemy.velosity.y > 0 && Enemy.health >0 ) 
    Enemy.switchSprite('fall1')
     }

  //collision
  if (
    rectangularCollision({
        play1: Player,
        play2: Enemy

    }) 
    &&
    Player.isattacking && Player.frameCurret === 4 ) 
    {
      
      Enemy.TakeHit()
        Player.isattacking = false
      
    document.querySelector('#enemyHealth').style.width = Enemy.health + '%'
      
  }
//misses
if (Player.isattacking && Player.frameCurret === 4) {
  Player.isattacking = false
}


  if (
    rectangularCollision({
        play1: Enemy,
        play2: Player

    }) 
    && 
    Enemy.isattacking && Enemy.frameCurret === 2) 
    {
     
      Player.TakeHit()
        Enemy.isattacking = false
     
        document.querySelector('#PlayerHealth').style.width = Player.health + '%'
        document.querySelector('#PlayerPower').style.width = Player.power + '%'
       
  }
  if (Enemy.isattacking && Enemy.frameCurret === 2) {
    Enemy.isattacking = false
  }
//ult
  if ( keys.r.pressed && Player.lastkey === "r" && Player.power === 100) {
    console.log('go')
    Player.powerC()
    Player.health += 40
    document.querySelector('#PlayerHealth').style.width = Player.health + '%'
    document.querySelector('#PlayerPower').style.width = Player.power + '%'
    
  } 

  
// end game health
if (Enemy.health <= 0 || Player.health <=0) {
deturminateWinner({Player, Enemy, timerid})
} 
}



animate()

window.addEventListener('keydown', (event) => {
 if (!Player.Dead) {
    switch(event.key) 
    {
        case 'd':
            keys.d.pressed = true
            Player.lastkey = 'd'
            break
            case 'a':
                if ( Player.position.x > 0) {
           keys.a.pressed = true
           Player.lastkey = 'a'
                }
            break
            case 'w':
               if ( Player.velosity.y === 0 && Player.health > 0)
               {
                Player.velosity.y = -20
               }
            break
            case ' ':
              if (Player.position.x < Enemy.position.x + Enemy.width && timer != 0 && Player.health > 0 ) {
               
            Player.attack()
              }
            break
            case 'r':
              if (Player.power === 100 && k === 0 )
              {
                console.log(k)
              keys.r.pressed = true
              Player.lastkey = 'r'
              k+=1
              }
            break
     }
                 
    } 
    if (!Enemy.dead) {
    switch(event.key)
    {
      case 'ArrowRight':
            keys.ArrowRight.pressed = true
            Enemy.lastkey = 'ArrowRight'
            break
            case 'ArrowLeft':
           keys.ArrowLeft.pressed = true
           Enemy.lastkey = 'ArrowLeft'
            break
            case 'ArrowUp':
                if ( Enemy.velosity.y === 0 )
                {
                 Enemy.velosity.y = -20
                }
             break
            case 'Control':
              if (Player.position.x < Enemy.position.x + Enemy.width && timer != 0) {
               
                Enemy.attack()
                  }
              
                break
    }
    }  

})
window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'd':
            keys.d.pressed = false
            break
            case 'r':
            keys.r.pressed = false
            break
            case 'a':
           keys.a.pressed = false
            break
            case 'w':
            keys.w.pressed = false
            break
            case 'ArrowRight':
                keys.ArrowRight.pressed = false
                break
                case 'ArrowLeft':
               keys.ArrowLeft.pressed = false
                break
    }
 

})