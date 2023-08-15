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