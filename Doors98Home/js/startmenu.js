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




function MenuClick(){
   
    if(MenuPopup.style.display == "none"){
        MenuPopup.style.display = ""
    } else if(MenuPopup.style.display == ""){
        MenuPopup.style.display = "none"
    }
}

//when user hovers over programs,settings,favorites,documents,find. then show more options
Programs.onmouseover = function(){
alert('hovered')
};


Favorites.onmouseover = function(){

};


Documents.onmouseover = function(){

};


Settings.onmouseover = function(){

};


Find.onmouseover = function(){

};






