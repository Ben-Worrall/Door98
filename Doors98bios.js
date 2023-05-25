
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

    if(event.key === 'F2')
    {
        //display bios+options
        biosOPT()
    }
    else if(event.key === 'F2')
    {
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
    clearTimeout(DoorsStartup)
    //hide the bios loadup
    bios.style.display = "none"

    //display bios Options
    biosOPTS.style.display = ""
    document.body.style.backgroundColor= "whitesmoke"



    //if user presses escape to exit biosOPT
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            exitBiosOpt()
        }
    });
    //if user presses f9 to save and exit biosOPT
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F9') {
            saveExitBiosOpt()
        }
    });

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


 



//if user exits biosOPT then continue oadup Doors98
function exitBiosOpt(){
   
            BiosExit()
             //start the doors startup
            setTimeout( DoorsStartupBiosOPT,2000)

            function BiosExit(){
                biosOPTS.style.display="none"
                document.body.style.backgroundColor = "black"
            }
        
};


//if user SAVES and exits biosOPT then continue oadup Doors98
function saveExitBiosOpt(){
    BiosSaveExit()
    alert('saved and will continue to doors')
    function BiosSaveExit(){
        biosOPTS.style.display="none"
        document.body.style.backgroundColor = "black"
    }
    
}





//start up doors98
function DoorsStartup(){
    //check if user is in teh biosopt else startup doors
 if(bios.style.display =="none" ){
    return
} else {
    console.log('startin up Doors98')
    

     //for live server
     if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
        window.location = 'doors98Startup/doors98Startup.html'
    }

    //for file
    else if(window.location.protocol === "file:"){
    window.location = 'doors98Startup/doors98Startup.html'
    }
    //for github
    else{window.location = 'doors98Startup/index.html'}
    
}

}



//start up doors98 from biosOPT
function DoorsStartupBiosOPT(){
    //check if user is in teh biosopt else startup doors
 
    console.log('startin up Doors98 from bios')
    





    //for live server
    if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
        window.location = 'doors98Startup/doors98Startup.html'
    }

    //for file
    else if(window.location.protocol == "file:"){
    window.location = 'doors98Startup/doors98Startup.html'
    }
    //for github
    else if(document.location.protocol == "https:"){window.location = 'https://ben-Worrall.github.io/Doors98/doors98Startup/index.html'}
    


}

