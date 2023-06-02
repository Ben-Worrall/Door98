var Startmenu = document.getElementById('StartMenu')
var MenuPopup = document.getElementById('StartMenu-popup')

function MenuClick(){
   
    if(MenuPopup.style.display == "none"){
        MenuPopup.style.display = ""
    } else if(MenuPopup.style.display == ""){
        MenuPopup.style.display = "none"
    }
}