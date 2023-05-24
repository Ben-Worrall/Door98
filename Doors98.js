//power button
var powerbnt = document.getElementById('powerbnt')
powerbnt.addEventListener("mousedown", ClickedDown)
powerbnt.addEventListener("mouseup", ClickedUp)


function ClickedDown(){
    powerbnt.style.boxShadow = '3vh 2vh 2vh #7a7462, 3vh 2vh 2vh #7a7462'
    powerbnt.style.height = '32.5vw'
    powerbnt.style.width = '32.5vw'
    document.getElementById('PowerBntICON').style.fontSize = "22.5vw"
     
     }
     function ClickedUp(){
        powerbnt.style.boxShadow = '2vh 1vh 1vh #7a7462, 1vh 1vh 1vh #7a7462'
        powerbnt.style.height = "35vw"
        powerbnt.style.width = "35vw"
        document.getElementById('PowerBntICON').style.fontSize = "25vw"


        setTimeout(LoadUpBios, 500) //loadup bios after hitting the power button
     }
 
 //after hitting the power button then show loadup
 function LoadUpBios(){
    //hide power button screen
document.getElementById("powerBntScreen").style.display = "none"
document.body.style.backgroundColor = "black"








 }