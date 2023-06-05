var Startmenu = document.getElementById('StartMenu')
var MenuPopup = document.getElementById('StartMenu-popup')

var DoorsUpdate = document.getElementById('StartMenu-DoorsUpdate')
var Programs = document.getElementById('StartMenu-Programs')
var Favorites = document.getElementById('StartMenu-Favorites')
var Documents = document.getElementById('StartMenu-Documents')
var Settings = document.getElementById('StartMenu-Settings')
var Find = document.getElementById('StartMenu-Find')
var Help = document.getElementById('"StartMenu-Help')
var Run = document.getElementById('StartMenu-Run')
var LogOff = document.getElementById('StartMenu-LogOff')
var ShutDown = document.getElementById('StartMenu-ShutDown')
var secondPopup = document.getElementById('StartMenu-popup-second')



document.getElementById('StartMenu').addEventListener('click', ()=>{
   
    if(MenuPopup.style.display == "none"){
        MenuPopup.style.display = ""
    }else {
        
        MenuPopup.style.display = "none"
        secondPopup.style.display = "none"
    }
    
})

//when user hovers over programs,settings,favorites,documents,find. then show more options
Programs.onmouseover = function(){
    let Program = Programs.getBoundingClientRect();
    secondPopup.style.display=""
    fetch('startmenu/startmenu-second-options/html/Programs.html')
    .then(res=>res.text())
    .then(data=>{
        secondPopup.innerHTML = data
    })
    secondPopup.style.position = "absolute"
    secondPopup.style.top = Program.top + "px"
    secondPopup.style.marginLeft = "16.5vw"
    

};


Favorites.onmouseover = function(){

    let Favorite = Favorites.getBoundingClientRect();
    secondPopup.style.display=""
    fetch('startmenu/startmenu-second-options/html/Favorites.html')
    .then(res=>res.text())
    .then(data=>{
        secondPopup.innerHTML = data
    })
    secondPopup.style.position = "absolute"
    secondPopup.style.top = Favorite.top + "px"
    secondPopup.style.marginLeft = "16.5vw"
    

};


Documents.onmouseover = function(){

    let Document = Documents.getBoundingClientRect();
    secondPopup.style.display=""
    fetch('startmenu/startmenu-second-options/html/Documents.html')
    .then(res=>res.text())
    .then(data=>{
        secondPopup.innerHTML = data
    })
    secondPopup.style.position = "absolute"
    secondPopup.style.top = Document.top + "px"
    secondPopup.style.marginLeft = "16.5vw"
    

};


Settings.onmouseover = function(){
    let Setting = Settings.getBoundingClientRect();
    secondPopup.style.display=""
    fetch('startmenu/startmenu-second-options/html/Settings.html')
    .then(res=>res.text())
    .then(data=>{
        secondPopup.innerHTML = data
    })
    secondPopup.style.position = "absolute"
    secondPopup.style.top = Setting.top + "px"
    secondPopup.style.marginLeft = "16.5vw"

    

};


Find.onmouseover = function(){


    let Fin = Find.getBoundingClientRect();
    secondPopup.style.display=""
    fetch('startmenu/startmenu-second-options/html/Find.html')
    .then(res=>res.text())
    .then(data=>{
        secondPopup.innerHTML = data
    })
    secondPopup.style.position = "absolute"
    secondPopup.style.top = Fin.top + "px"
    secondPopup.style.marginLeft = "16.5vw"
    

};

//if u click off of the startmenu then close startmenu

document.getElementById('content').addEventListener("mouseup", function(event) {
    
    if (!MenuPopup.contains(event.target) && !Startmenu.contains(event.target)) {
        MenuPopup.style.display = "none"
        secondPopup.style.display = "none"
    }
    
});





