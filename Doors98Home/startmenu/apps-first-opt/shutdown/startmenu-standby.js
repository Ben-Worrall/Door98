//when user is in standby and he clicks then go back from standby
let allELs = document.getElementsByTagName("*");
let StartmenuFirstApp = document.getElementById('StartMenu-popup-first-apps')


setInterval(function(){
    //if user clicks then go back to screen
    if(document.getElementById('content').style.display == 'none'){

        //show homescreen that was open
        document.getElementById('html').addEventListener("mousedown",function() {
       if(document.getElementById('content').style.display == 'none'){



        let content = document.getElementById('content')
        content.style.display = ""
        document.getElementById('html').style.cursor = 'auto'
                    

        //hide the shutdown app that was open
        StartmenuFirstApp.style.display = "none"
        StartmenuFirstApp.innerHTML = ""
        for (var i=0; i < allELs.length; i++) {
             
            allELs[i].classList.remove("blur") 
            
                
        } 



       }
        
    
                
    })
    }

}, 1)