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
function curSelDetermine(){
    if(curSelARR[0] = `"Stand by "`){
        console.log('test1')
    }else {
        console.log('no')
    }
}
//ok button
function ok(){
   

   
   
let curSel =  document.querySelector('.startmenu-shutdown-bottom-container input:checked').previousSibling 
    
    //console.log(curSel)
    curSelARR[0] = curSel
    console.log(curSelARR[0])
    curSelDetermine()



      


}



    

