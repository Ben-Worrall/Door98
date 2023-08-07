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
}