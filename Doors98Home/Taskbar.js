





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


//background on hover if theres an img in the taskbar
function changebackgroundcolorforicon(){
    let allPossibleIcons1 = document.querySelectorAll('.dropintaskbar')

    for(let i =0; i < allPossibleIcons1.length; i++){
        if(allPossibleIcons1[i].childNodes[1].alt != ""){
            allPossibleIcons1[i].classList.add('HoverOverIcon')
            
        }
            //console.log(allPossibleIcons1[i].childNodes[1])
        
    }

    //setInterval(changebackgroundcolorforicon, 1);
}; changebackgroundcolorforicon();




function CurrentOpenAppIcon(){
    let allPossibleIcons2 = document.querySelectorAll('.dropintaskbar')
    let allPossibleApps = document.querySelectorAll('.doors98apps')
    for(let i = 0; i < allPossibleApps.length; i++){
        if(allPossibleApps[i].style.display == ""){
            for(let k =0; k < allPossibleIcons2.length; k++){
                if(allPossibleIcons2[k].childNodes[1].alt == allPossibleApps[i].getAttribute('class').split(' ')[1]){
                    allPossibleIcons2[k].classList.add('CurrentAppOpen')
                    
                }
                    //console.log(allPossibleIcons1[i].childNodes[1])
                
            }
            
        } else if(allPossibleApps[i].style.display == "none"){
            for(let j =0; j < allPossibleIcons2.length; j++){
                if(allPossibleIcons2[j].childNodes[1].alt == allPossibleApps[i].getAttribute('class').split(' ')[1]){
                    allPossibleIcons2[j].classList.remove('CurrentAppOpen')
                    
                }
                    //console.log(allPossibleIcons1[i].childNodes[1])
                
            }
        }
    }




    //setInterval(CurrentOpenAppIcon, 1);
}; CurrentOpenAppIcon();


