


var firstApp = document.createElement('div')
    firstApp.classList.add('doors98apps')






//drag all the apps around


// Make the DIV element draggable:
document.addEventListener('mousemove', function(){ 

    let curAppsAll = document.querySelectorAll('.dragableForApps')
    for(let i =0; i< curAppsAll.length; i++){
        dragElement(curAppsAll[i])
        
    }
})

//setInterval(CheckForApps, 1);

;




var onMDownElTop = 0
var onMDownElLeft = 0
var onMDownPosX = 0
var onMDownPosY = 0
function dragElement(elmnt) {
    elmnt = elmnt || window.event;
    curAppSize = elmnt.getBoundingClientRect()
    
    // otherwise, move the DIV from anywhere inside the DIV:

   elmnt.onmousedown = function (e){
    //current/starting position
    onMDownPosX = e.clientX
    onMDownPosY = e.clientY
    onMDownElLeft = elmnt.parentNode.parentNode.getBoundingClientRect().left
    onMDownElTop = elmnt.parentNode.parentNode.getBoundingClientRect().top
    //console.log(onMDownPosX)
    //console.log(elmnt.parentNode.parentNode.getBoundingClientRect().left)
    dragMouseDown()
    
   }
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    

    //find the position where user can resize app, otherwise move and drag element
    if(e.clientY < Math.trunc(curAppSize.top)+5 || e.clientY > Math.trunc(curAppSize.top + curAppSize.height)-5){
        if(curAppSize.left < e.clientY < curAppSize.right){
            return
        }
    } else{
        document.onmousemove = elementDrag; // call a function whenever the cursor moves:
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    //elmnt.parentNode.parentNode.style.top = (elmnt.offsetTop - pos4) + "px"
    
    elmnt.parentNode.parentNode.style.width = "60vw"
    elmnt.parentNode.parentNode.style.height = "60vh"
    





    //move app left or right
    let curXPos = (e.clientX - (elmnt.parentNode.parentNode.getBoundingClientRect().width / 2))

//console.log(window.innerWidth)
    if(window.innerWidth >= e.clientX){
        if(e.clientX >= 0){
            elmnt.parentNode.parentNode.style.left = curXPos + "px"
        } 
        
    } 
        


    //moving app up or down
    

if(window.innerHeight > e.clientY && e.clientY > 2){
    
    
    elmnt.parentNode.parentNode.style.left = ((50 / 100) * elmnt.parentNode.parentNode.style.width) + "px"
    //console.log(elmnt.parentNode.parentNode.getBoundingClientRect().left)
    
    //move element up or down using a bit of maths

    if((e.clientY - onMDownPosX) < 0){
        
        let y = (e.clientY - onMDownPosY)* -1
        elmnt.parentNode.parentNode.style.top = (onMDownElTop - y) + "px"
        //console.log(elmnt.parentNode.parentNode.style.top)

    }else {
        
        let y = (e.clientY - onMDownPosY)
        elmnt.parentNode.parentNode.style.top = (onMDownElTop + y) + "px"
        //console.log(elmnt.parentNode.parentNode.style.top)
    }

  }else {
    console.log('not inside')
  }
  }


  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.onmousedown = null
    document.addEventListener('mousemove', function(){ 

        let curAppsAll = document.querySelectorAll('.dragableForApps')
        for(let i =0; i< curAppsAll.length; i++){
            dragElement(curAppsAll[i])
            
           
        }
    })
  }
}
