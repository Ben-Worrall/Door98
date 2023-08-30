var firstApp = document.createElement('div')
    firstApp.classList.add('doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')









//drag all the apps around


// Make the DIV element draggable:
function CheckForApps(){
    let curAppsAll = document.querySelectorAll('.dragableForApps')
    for(let i =0; i< curAppsAll.length; i++){
        dragElement(curAppsAll[i])
    }


setInterval(CheckForApps, 1);
}; CheckForApps();
;




var onMDownElTop = 0
var onMDownElLeft = 0
var onMDownPosX = 0
var onMDownPosY = 0
function dragElement(elmnt) {
    elmnt = elmnt || window.event;
    
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
    document.onmousemove = elementDrag;
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
    





    //move element left or right using a bit of maths
    if(window.innerWidth > e.clientX && e.clientX > 2 ){

        elmnt.parentNode.parentNode.style.left = (e.clientX - (elmnt.parentNode.parentNode.getBoundingClientRect().width / 2))  + "px"


    } else{
        return
    }
    

if(window.innerHeight > e.clientY && e.clientY > 2){
    
    
    elmnt.parentNode.parentNode.style.left = ((50 / 100) * elmnt.parentNode.parentNode.style.width) + "px"
    console.log(elmnt.parentNode.parentNode.getBoundingClientRect().left)
    
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
  }
}











//internet explorer

function internetExplorerLoad(e){
    document.getElementById('StartMenu-popup-second').style.display = "none"
//console.log(e.parentNode.childNodes[1].childNodes[1].src)
    firstApp.style.display=""
    fetch('doors98Apps/InternetExplorer/InternetExplorer.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
    document.getElementById('doorsappsholder').appendChild(firstApp)
    firstApp.classList.add('InternetExplorer')


    let script= document.createElement("script");
script.src = "doors98Apps/InternetExplorer/InternetExplorer.js"
Body.appendChild( script )
MenuPopup.style.display = "none"



//append icon to taskbar



for(let i = 0; i < TaskbarIconRow.length; i++){
    
    
        
    //console.log(TaskbarIconRow[i].childNodes[1].alt)
    if(TaskbarIconRow[i].childNodes[1].alt === "InternetExplorer"){
        return
    }else if(TaskbarIconRow[i].childNodes[1].alt === ""){
     //console.log(e.parentNode.childNodes[1].childNodes[1].src)
     TaskbarIconRow[i].childNodes[1].src = e.parentNode.childNodes[1].childNodes[1].src
     TaskbarIconRow[i].childNodes[1].alt = "InternetExplorer"
     TaskbarIconRow[i].childNodes[1].classList.add('imgForIconInTaskBar')
     TaskbarIconRow[i].childNodes[1].onclick = function(e) { IconClicked(e) }
        return
    } else {
        return
    }
    
        

    
}










}




