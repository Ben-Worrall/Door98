
//get elements
var bios = document.getElementById('bios')
var biosOPTS = document.getElementById('biosOPTS')




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


//display bios
bios.style.display = ""

//show list one at a time
setTimeout(bios1,500)
setTimeout(bios2,1500)
setTimeout(bios3,3000)
setTimeout(bios4,4000)
setTimeout(bios5,4900)
setTimeout(bios6,5900)
//then make bios dissapear
setTimeout(BiosDissappear,9000)


//if the user clicks on f2 to get to bios
document.onkeydown = function Open(event){

    if(window.event && window.event.keyCode == 113)
    {
        clearTimeout(BiosDissappear)
        //display bios+options
        biosOPT()
    }
    else if(event.which == 113)
    {
        clearTimeout(BiosDissappear)
        //display bios+options
        biosOPT()
    
    }
    
    
    }





function bios1(){
document.getElementById('GatewayBiosPic').style.display=""
}
function bios2(){
    document.getElementById('bios2').style.display=""
    document.getElementById('bios2.2').style.display=""
    document.getElementById('biosF2').style.display=""

    document.getElementById('bios2').style.color="white"
    document.getElementById('bios2.2').style.color="white"
    document.getElementById('biosF2').style.color="white"
}
function bios3(){
    document.getElementById('bios3').style.display=""

    document.getElementById('bios3').style.color="white"
}
function bios4(){
    document.getElementById('bios4').style.color="white"

    document.getElementById('bios4').style.color="white"
}
function bios5(){
    document.getElementById('bios5').style.color="white"

    document.getElementById('bios5').style.color="white"
}

function bios6(){
    document.getElementById('bios6').style.color="white"

    document.getElementById('bios6').style.color="white"
}






 }


//load bios + options if user clicks f2 within in time period
function biosOPT(){
    //hide the bios loadup
    bios.style.display = "none"

    //display bios Options
    

}




//make bios dissappear if user DOESNT click on f2
 function BiosDissappear(){
setTimeout(bios6,700)
setTimeout(bios5,1700)
setTimeout(bios4,1700)
setTimeout(bios3,2700)
setTimeout(bios2,2700)
setTimeout(bios1,3000)
//launch startup for doors
setTimeout(DoorsStartup,3800)



function bios1(){
    document.getElementById('GatewayBiosPic').style.display="none"
    }
    function bios2(){
        document.getElementById('bios2').style.display=""
        document.getElementById('bios2.2').style.display=""
        document.getElementById('biosF2').style.display=""
    
        document.getElementById('bios2').style.color="black"
        document.getElementById('bios2.2').style.color="black"
        document.getElementById('biosF2').style.color="black"
    }
    function bios3(){
        document.getElementById('bios3').style.display=""
    
        document.getElementById('bios3').style.color="black"
    }
    function bios4(){
        document.getElementById('bios4').style.color="black"
    
        document.getElementById('bios4').style.color="black"
    }
    function bios5(){
        document.getElementById('bios5').style.color="black"
    
        document.getElementById('bios5').style.color="black"
    }
    
    function bios6(){
        document.getElementById('bios6').style.color="black"
    
        document.getElementById('bios6').style.color="black"
    }
 }

 //start doors startup process
 function DoorsStartup(){
alert('starting up')
 }



//make bios dissappear if user DOES click on f2 (if he exits the biosOPTS)
function exitBiosOpt(){
    //hide biosOpt
setTimeout(Biosexit,1)
//start the doors startup
setTimeout(DoorsStartup,2000)


function DoorsStartup(){
    alert('starting up')
     }
function Biosexit(){
    biosOPTS.style.display='none'
}

}