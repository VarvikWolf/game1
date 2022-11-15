window.addEventListener('mousemove', function(e)  {
lineX =e.layerX 
lineY = e.layerY
if (e.layerX > 613 && e.layerX < 1350 && e.layerY > 809 && e.layerY < 948) {
    document.getElementById('submit3').style.backgroundColor = 'green'
}
else 
document.getElementById('submit3').style.backgroundColor = 'white'
})


window.addEventListener('click', function(e) {
    
    if (e.layerX > 613 && e.layerX < 1350 && e.layerY > 809 && e.layerY < 948) {
        document.getElementById('submit3').style.display = 'none'
openworld = true
    }
})
