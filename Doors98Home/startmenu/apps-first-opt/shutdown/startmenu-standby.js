//when user is in standby and he clicks then go back from standby

setInterval(function(){
    //if user clicks then go back to screen
    if(document.getElementById('content').style.display == 'none'){

        //show homescreen that was open
        document.getElementById('html').addEventListener("mousedown",function() {

        let content = document.getElementById('content')
        content.style.display = ""
        document.getElementById('html').style.cursor = 'auto'
                    


        //hide the shutdown app that was open
        let allEL = document.getElementsByTagName("*");
        let StartmenuFirstApps = document.getElementById('StartMenu-popup-first-apps')



        StartmenuFirstApps.style.display = "none"
        StartmenuFirstApps.innerHTML = ""
        for (var i=0; i < allEL.length; i++) {
             
            allEL[i].classList.remove("blur") 
            
                
        } 
    
                
    })
    }



    
    
    



}, 100)