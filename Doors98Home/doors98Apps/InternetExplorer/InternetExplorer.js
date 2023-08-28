var minimize = document.getElementById('internetexplorer-topbar-right-minimize')
var fullscreen = document.getElementById('internetexplorer-topbar-right-fullscreen')
var exit = document.getElementById('internetexplorer-topbar-right-exit')
var appList = document.querySelectorAll('.doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')







minimize.onclick = function(){
    //minimize app (hide it)
    for(let j = 0; j < appList.length; j++){
        if(appList[j].classList.contains("InternetExplorer")){
            appList[j].style.display = "none"
            console.log(appList[j])
            return
        }
    }
    
}
exit.onclick = function(){

//remove icon in task bar
for(let i = 0; i < TaskbarIconRow.length; i++){
    if(TaskbarIconRow[i].childNodes[0] !== undefined){
        if(TaskbarIconRow[i].childNodes[1].src == document.getElementById('internetexplorer-icon-startmenu').src){
           TaskbarIconRow[i].childNodes[1].src = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
           TaskbarIconRow[i].childNodes[1].alt=""
           TaskbarIconRow[i].childNodes[1].classList.remove('imgForIconInTaskBar')
           TaskbarIconRow[i].classList.remove('HoverOverIcon')
           TaskbarIconRow[i].classList.remove('CurrentAppOpen')
        }
    }
}




    //remove app
//remove the div that app is in
for(let j = 0; j < appList.length; j++){
    if(appList[j].classList.contains("InternetExplorer")){
        appList[j].remove()
        return
    }
}

    
}


fullscreen.onclick = function(e){
    
    //console.log(e.target.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height)
    if(e.target.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().height){
        if(e.target.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().width === e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getBoundingClientRect().width){
            e.target.parentNode.parentNode.parentNode.parentNode.style.height = "60vh"
            e.target.parentNode.parentNode.parentNode.parentNode.style.left = "60vw"
            e.target.parentNode.parentNode.parentNode.parentNode.style.top = "50%"
            e.target.parentNode.parentNode.parentNode.parentNode.style.left = "50%"
            e.target.parentNode.parentNode.parentNode.parentNode.style.transform = "translate(-50%, -50%);"
            e.target.parentNode.parentNode.parentNode.parentNode.style.position = "absolute"
        }
    } 
}