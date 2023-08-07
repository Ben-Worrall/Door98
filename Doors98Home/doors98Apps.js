
var firstApp = document.getElementById('doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')




function internetExplorerLoad(e){
    document.getElementById('StartMenu-popup-second').style.display = "none"
//console.log(e.parentNode.childNodes[1].childNodes[1].src)
    firstApp.style.display=""
    fetch('doors98Apps/InternetExplorer/InternetExplorer.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
   
    let script= document.createElement("script");
script.src = "doors98Apps/InternetExplorer/InternetExplorer.js"
Body.appendChild( script )
MenuPopup.style.display = "none"



//append icon to taskbar



for(let i = 0; i < TaskbarIconRow.length; i++){
    
    if(TaskbarIconRow[i].innerHTML == ""){
        
        
        let img = document.createElement('img')
        img.classList.add('imgForIconInTaskBar')

        img.src = e.parentNode.childNodes[1].childNodes[1].src
        TaskbarIconRow[i].appendChild(img)


        return

        
        
    } 
    
}




}




