
var taskbariconELES = document.querySelectorAll('.dropintaskbar')
var homeICONS = document.querySelectorAll('.iconBody')



//if user clicks on:

//open

//new

//print

//quick view

//add to zip

//scan for viruses

//zip and email

//send to

//cut

//copy


//pin to taskbar
document.getElementById('ContextMenuIconHome-pintotaskbar').addEventListener('click', function (){
    //console.log('clicked')
    for(let i = 0; i < taskbariconELES.length; i++){
        
        if(document.querySelectorAll('.dropintaskbar')[i].innerHTML == ""){
            
            for(let k = 0; k < homeICONS.length; k++){
                if(homeICONS[k].style.backgroundColor == "rgba(132, 134, 134, 0.7)"){
                    
                    let img = document.createElement('img')
                    img.src = homeICONS[k].querySelector('img').src
                    img.classList.add('imgForIconInTaskBar')
                    img.alt = homeICONS[k].querySelector('img').alt
                    taskbariconELES[i].appendChild(img)

                    return
                    
                }
            

            
            }
        } 
    }

//clear the other boxes
    


})

//delete

//rename

//properties
