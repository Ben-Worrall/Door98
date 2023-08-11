

//load up app when user clicks on icon in taskbar
function IconClicked(e){
    //console.log(e.target)

   
    for(let j = 0; j < appList.length; j++){
        if(appList[j].classList.contains(e.target.alt)){
            

            //if app open and click on icon, then hide the app 
           if(appList[j].style.display == ""){ 
                appList[j].style.display = "none"
           } //if app closed and click on icon, then show the app
           else if(appList[j].style.display == "none"){
                appList[j].style.display = ""
           }
            return
        }
    }


    
}
var allPossibleIcons = document.querySelectorAll('.dropintaskbar')

//background on hover if theres an img in the taskbar
function changebackgroundcolorforicon(){
    for(let i =0; i < allPossibleIcons.length; i++){
        if(allPossibleIcons[i].childNodes[1].alt != ""){
            allPossibleIcons[i].classList.add('HoverOverIcon')
            
        }
            //console.log(allPossibleIcons[i].childNodes[1])
        
    }

    setTimeout(changebackgroundcolorforicon, 1);
}; changebackgroundcolorforicon();