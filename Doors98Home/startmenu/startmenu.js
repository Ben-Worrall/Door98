var Startmenu = document.getElementById('StartMenu')
var MenuPopup = document.getElementById('StartMenu-popup')

var DoorsUpdate = document.getElementById('start-menu-window-update-bnt')
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
var firstApp = document.getElementById('StartMenu-popup-first-apps')
var Body = document.getElementById('Body')

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
    console.log(secondPopup.style.top)
};

//hover over anything else then stop displaying the hovered over stuff
Body.onmouseover = function(e){
if(e.target != Find && e.target != Documents && e.target != Favorites && e.target != Programs && e.target != Settings){
    if(e.target.id != "start-menu-mid" && e.target.id != "StartMenu-popup" && e.target.classList != "main" && e.target.classList != "mainopts" && e.target.classList != "triangleAtag"){
        secondPopup.style.display="none"
       
    }
} 
}



//if u click off of the startmenu then close startmenu

document.getElementById('content').addEventListener("mouseup", function(event) {
    
    if (!MenuPopup.contains(event.target) && !Startmenu.contains(event.target) && !firstApp.contains(event.target)) {
        MenuPopup.style.display = "none"
        secondPopup.style.display = "none"
    }
    
});


//when user clicks on the first menu options

//update windows


DoorsUpdate.addEventListener('click', ()=>{

    firstApp.style.display=""
    fetch('startmenu/apps-first-opt/doorsupdate/startmenu-doorsupdate.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
   
    let script= document.createElement("script");
script.src = "./startmenu/apps-first-opt/doorsupdate/startmenu-doorsupdate.js"
Body.appendChild( script )
MenuPopup.style.display = "none"
firstApp.style.position = "absolute"
firstApp.style.top = "50%"
firstApp.style.right = "50%"
firstApp.style.transform = "translate(50%,-50%)"



})




//help






//run
Run.addEventListener('click', ()=>{
    

    firstApp.style.display=""
    fetch('startmenu/apps-first-opt/run/startmenu-run.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
   
    let script= document.createElement("script");
script.src = "./startmenu/apps-first-opt/run/startmenu-run.js"
Body.appendChild( script )
MenuPopup.style.display = "none"
firstApp.style.position = "absolute"
firstApp.style.right = "0"
firstApp.style.marginBottom = "0.3vw"
firstApp.style.transform = ""


})




//shutdown
ShutDown.addEventListener('click', ()=>{
    

    firstApp.style.display=""
    fetch('startmenu/apps-first-opt/shutdown/startmenu-shutdown.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
   
    let script= document.createElement("script");
script.src = "./startmenu/apps-first-opt/shutdown/startmenu-shutdown.js"
Body.appendChild( script )
MenuPopup.style.display = "none"
firstApp.style.position = "absolute"
firstApp.style.top = "50%"
firstApp.style.right = "50%"
firstApp.style.transform = "translate(50%,-50%)"

//blur everything else 
let allEL = document.getElementsByTagName("*");

for (var i=0; i < allEL.length; i++) {
     if(allEL[i] == Startmenu || allEL[i] == MenuPopup || allEL[i] == document.getElementById('gridHome') || allEL[i] == document.getElementById('TaskBar') || allEL[i] == document.getElementById('ContentBody')){
        allEL[i].classList.add("blur") 
       
        
     } 
}


})




