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

function dragElement(elmnt) {
  
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  

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
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.parentNode.parentNode.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.parentNode.parentNode.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.parentNode.parentNode.style.width = "60vw"
    elmnt.parentNode.parentNode.style.height = "60vh"

    console.log(elmnt.parentNode)
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




