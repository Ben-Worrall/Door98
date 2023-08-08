var minimize = document.getElementById('internetexplorer-topbar-right-minimize')
var fullscreen = document.getElementById('internetexplorer-topbar-right-fullscreen')
var exit = document.getElementById('internetexplorer-topbar-right-exit')
var app = document.getElementById('doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')

minimize.onclick = function(){
    app.style.display = "none"
}
exit.onclick = function(){
    app.style.display = "none"
    for(let i = 0; i < TaskbarIconRow.length; i++){
        if(TaskbarIconRow[i].childNodes[0] !== undefined){
            if(TaskbarIconRow[i].childNodes[1].src == document.getElementById('internetexplorer-icon-startmenu').src){
               TaskbarIconRow[i].childNodes[1].src = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
               TaskbarIconRow[i].childNodes[1].alt=""
            }
        }
    }
}