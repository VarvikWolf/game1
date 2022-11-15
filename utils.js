function rectangularCollision({play1, play2})
{
    return ((play1.attackBox.position.x + play1.attackBox.width >= play2.position.x &&
      play1.attackBox.position.x <= play2.position.x + play2.width &&
      play1.attackBox.position.y + play1.attackBox.height >= play2.position.y &&
      play1.attackBox.position.y <= play2.position.y + play2.height
      ) || (play2.attackBox.position.x + play2.attackBox.width >= play1.position.x + 28  &&
        play2.attackBox.position.x <= play1.position.x + play1.width &&
        play2.attackBox.position.y + play2.attackBox.height >= play1.position.y &&
        play2.attackBox.position.y <= play1.position.y + play1.height
        ) )
}

function deturminateWinner({Player, Enemy, timerid}) {
  clearTimeout(timerid)
  document.querySelector('#displaytext').style.display = 'flex'
  if(Player.health === Enemy.health) {
    document.querySelector('#displaytext').innerHTML = 'Tie'
    background1.update()
   
   } else if (Player.health > Enemy.health) {
    document.querySelector('#displaytext').innerHTML = 'Player 1 wins'
  
  
   } else if (Player.health < Enemy.health) {
    document.querySelector('#displaytext').innerHTML = 'Player 2 wins'
  
   }
  } 



let timer = 100
let timerid
function decreacsetimer() {

  if (timer > 0)
 { 
  timerid = setTimeout(decreacsetimer, 1000)
  timer--
  document.querySelector('#timer').innerHTML = timer
 }
 if (timer === 0) {
   
  deturminateWinner({Player, Enemy, timerid})
 }
}
