var icons = document.getElementsByClassName('iconBody')
var boxes =  document.querySelectorAll('.gridHomeScreen')
var boxesTASK =  document.querySelectorAll('.dropintaskbar')

var div = document.createElement('div')


//drag and drop icons somewhere

var el

function allowDrop(ev) {
    ev.preventDefault();
    
  }
  
  function drag(ev) {
    
    el = ev.target
    for(let i = 0; i < icons.length; i++){
        if ( ev.target !== icons[i]) {
            icons[i].style.backgroundColor = ""
        icons[i].style.outline = ""
        } 
    }

    contextMenu.classList.remove("visible");
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    

    
    
    //if theres another element already in the box u want to move icon to
    if(ev.target.childNodes.length !== 0){
        console.log('full')
        console.log(ev.target.childNodes)

    } else { //if box isnt occupied

        //append element
    ev.target.appendChild(el);
    el.style.backgroundColor = "rgba(132, 134, 134, 0.7)"
    el.style.outline = "0.1vh solid rgb(169, 170, 170)"


    //clear thr boxes that dont have icons in them
    
        

            for(let i = 0; i < boxes.length; i++){

            if(!boxes[i].innerHTML == ""){
                //console.log(boxes[i])
                if(boxes[i].firstElementChild == null){
                
                    boxes[i].removeChild(boxes[i].childNodes[0])
                    boxes[i].removeChild(boxes[i].childNodes[0])

                    console.log(boxes[i].childNodes[0])
                    console.log(boxes[i].childNodes)
                }
                
                
            } 
        }
        
            
            
        



    }

    }

    
    










//if user rightclicks on an icon


//Events for desktop and touch
let events = ["contextmenu"];
//initial declaration
var timeout;
//for double tap
var lastTap = 0;
//refer menu div
let contextMenu = document.getElementById("contextMenuIconHome");
//same function for both events
events.forEach((eventType) => {

    for(let i = 0; i < icons.length; i++){
        icons[i].addEventListener(
            eventType,
            (e) => {
                icons[i].style.backgroundColor = "rgba(132, 134, 134, 0.7)"
                icons[i].style.outline = "0.1vh solid rgb(169, 170, 170)"
              e.preventDefault();
              //x and y position of mouse or touch
              let mouseX = e.clientX || e.touches[0].clientX;
              let mouseY = e.clientY || e.touches[0].clientY;
              //height and width of menu
              let menuHeight = contextMenu.getBoundingClientRect().height;
              let menuWidth = contextMenu.getBoundingClientRect().width;
              //width and height of screen
              let width = window.innerWidth;
              let height = window.innerHeight;
              //If user clicks/touches near right corner
              if (width - mouseX <= 200) {
                contextMenu.style.borderRadius = "5px 0 5px 5px";
                contextMenu.style.left = width - menuWidth + "px";
                contextMenu.style.top = mouseY + "px";
                //right bottom
                if (height - mouseY <= 200) {
                  contextMenu.style.top = mouseY - menuHeight + "px";
                  contextMenu.style.borderRadius = "5px 5px 0 5px";
                }
              }
              //left
              else {
                contextMenu.style.borderRadius = "0 5px 5px 5px";
                contextMenu.style.left = mouseX + "px";
                contextMenu.style.top = mouseY + "px";
                //left bottom
                if (height - mouseY <= 200) {
                  contextMenu.style.top = mouseY - menuHeight + "px";
                  contextMenu.style.borderRadius = "5px 5px 5px 0";
                }
              }
              //display the menu
              contextMenu.style.visibility = "visible";
            },
            { passive: false }
          );
    }
  
});

















//if u click once on an icon
for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener('click', ()=>{
        icons[i].style.backgroundColor = "rgba(132, 134, 134, 0.7)"
        icons[i].style.outline = "0.1vh solid rgb(169, 170, 170)"
        icons[i].style.overflow = "visible"
        icons[i].style.height = "max-content"
    })
    
}

//if u double click on an icon then load that app

for(let i = 0; i < icons.length; i++){
  icons[i].addEventListener('dblclick', ()=>{
      
  })
  
}
















//if user clicks off of an icon then close rightclick menu and or hide the background again

document.onclick = function (event) {

   for(let i = 0; i < icons.length; i++){

    if(event.target !== icons[i] ){
       
        icons[i].style.backgroundColor = ""
        icons[i].style.outline = ""
        icons[i].style.overflow = "hidden"
        icons[i].style.height = "100%"
        contextMenu.style.visibility = "hidden"
        

    } 
     
    
    
    
}
        



}
    


