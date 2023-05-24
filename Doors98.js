//power button
var powerbnt = document.getElementById('powerbnt')
powerbnt.addEventListener("mousedown", ClickedDown)
powerbnt.addEventListener("mouseup", ClickedUp)


//get elements
var bios = document.getElementById('bios')

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


//display bios
bios.style.display = ""

//show list one at a time
setTimeout(bios1,500)
setTimeout(bios2,1500)
setTimeout(bios3,3000)
setTimeout(bios4,4000)



function bios1(){
document.getElementById('GatewayBiosPic').style.display=""
}
function bios2(){
    document.getElementById('bios2').style.display=""
    document.getElementById('bios2.2').style.display=""
    document.getElementById('biosF1').style.display=""

    document.getElementById('bios2').style.color="white"
    document.getElementById('bios2.2').style.color="white"
    document.getElementById('biosF1').style.color="white"
}
function bios3(){
    document.getElementById('bios3').style.display=""

    document.getElementById('bios3').style.color="white"
}
function bios4(){
    document.getElementById('bios4').style.color="white"

    document.getElementById('bios3').style.color="white"
}


 }