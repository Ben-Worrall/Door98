var exitBNT = document.getElementById('startmenu-shutdown-exit')
var shutdownApp = document.getElementById('startmenu-shutdown-app')
var StartmenuFirstApps = document.getElementById('StartMenu-popup-first-apps')
var selectionOPTS = document.querySelectorAll('.startmenu-shutdown-bottom-container')




let allEL = document.getElementsByTagName("*");


//the buttons on the app

//exit button
 function exit(){
    StartmenuFirstApps.style.display = "none"
    StartmenuFirstApps.innerHTML = ""
    

    for (var i=0; i < allEL.length; i++) {
         
        allEL[i].classList.remove("blur") 
            
    } 
    
}


//cancel button
function cancel(){
    StartmenuFirstApps.style.display = "none"
    StartmenuFirstApps.innerHTML = ""
    for (var i=0; i < allEL.length; i++) {
         
        allEL[i].classList.remove("blur") 
        
            
    } 
}





function ShutDown(){
    document.getElementById("ContentBody").classList.remove('blur')
    
}










let curSelARR = []

//ok button
function ok(){
   

   
   
let curSel =  document.querySelector('.startmenu-shutdown-bottom-container input:checked').parentNode.innerText
    
    //console.log(curSel)
    curSelARR[0] = curSel
    console.log(curSelARR[0])


    if(curSelARR[0] === "Stand by "){  //stand by

        





    }else if(curSelARR[0] === "Shut down "){ //shutdown

        
        //remove the blur
        for (var i=0; i < allEL.length; i++) {
            allEL[i].classList.remove("blur") 
        } 
        //change location to teh shutdown page 
        function LoadShutdown(){
            //for live server
            if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
                window.location = '/doors98Shutdown/doors98shutdown.html'
            }
        
            //for file
            else if(window.location.protocol == "file:"){
            window.location = '/doors98Shutdown/doors98shutdown.html'
            }
            //for github
            else if(document.location.protocol == "https:"){window.location = 'https://github.com/Ben-Worrall/Doors98/tree/26beab113a3978db74b33e7af6286038b43fed6a/Doors98Home'}
        }
        LoadShutdown()







    }else if(curSelARR[0] === "Restart "){  //restart

        console.log( "restart ")













    }else if(curSelARR[0] === "Restart in MS-DOS mode "){ //restart in ms mode

        console.log( " restart in ms mode")


    }



      


}



    

