var StartmenuFirstApps = document.getElementById('StartMenu-popup-first-apps')
let allEL = document.getElementsByTagName("*");


function exitFirstapp(){
    StartmenuFirstApps.style.display = "none"
    StartmenuFirstApps.innerHTML = ""
    

    for (var i=0; i < allEL.length; i++) {
         
        allEL[i].classList.remove("blur") 
            
    } 
    
}

