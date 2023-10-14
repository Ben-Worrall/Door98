var firstApp = document.createElement('div')
    firstApp.classList.add('doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')








//apps











//internet explorer

function internetExplorerLoad(e){
    console.log(e)
    document.getElementById('StartMenu-popup-second').style.display = "none"
//console.log(e.parentNode.childNodes[1].childNodes[1].src)
    firstApp.style.display=""
    fetch('doors98Apps/InternetExplorer/InternetExplorer.html')
    .then(res=>res.text())
    .then(data=>{
        firstApp.innerHTML = data
    })
    
    document.getElementById('doorsappsholder').appendChild(firstApp)
    firstApp.classList.add('InternetExplorer')


    let script= document.createElement("script");
script.src = "doors98Apps/InternetExplorer/InternetExplorer.js"
Body.appendChild( script )
MenuPopup.style.display = "none"



for(let i = 0; i < TaskbarIconRow.length; i++){
    
    
        
    //console.log(TaskbarIconRow[i].childNodes[1].alt)
    if(TaskbarIconRow[i].childNodes[1].alt === "InternetExplorer"){
        return
    }else if(TaskbarIconRow[i].childNodes[1].alt === ""){
     //console.log(e.parentNode.childNodes[1].childNodes[1].src)
     TaskbarIconRow[i].childNodes[1].src = e.parentNode.childNodes[1].childNodes[1].src
     TaskbarIconRow[i].childNodes[1].alt = "InternetExplorer"
     TaskbarIconRow[i].childNodes[1].classList.add('imgForIconInTaskBar')
     TaskbarIconRow[i].childNodes[1].onclick = function(e) { IconClicked(e) }
        return
    } else {
        return
    }
    
    
}





}











/* 
STORAGE

 //when mouse hovers over edges then change cursor
    CurApp.onmouseover = function(e){

        e.preventDefault()
        curAppSize = CurApp.getBoundingClientRect()
        
    }
    


    //resize cursor

    CurApp.onmousedown = function(e){



                //for top or bottom
                e.preventDefault()
                curAppSize = CurApp.getBoundingClientRect()
            if(e.clientY < Math.trunc(curAppSize.top)+5 || e.clientY > Math.trunc(curAppSize.top + curAppSize.height)-5){
                if(curAppSize.left < e.clientY < curAppSize.right){
                    //console.log('test')
                    CurApp.style.cursor = "n-resize"
                    document.onmousedown = function(){
                    document.onmousemove = resizeUpDown
                    console.log('mouse down (UD)')

                    }
                    document.onmouseup = function(){
                        document.onmousedown = endDrag
                        document.onmousemove = endDrag
                        console.log('mouse up')
                    }
                    
                    

                }

                //for left or right
            
            }else if(e.clientX < Math.trunc(curAppSize.left)+5 || e.clientX > Math.trunc(curAppSize.left + curAppSize.width)-5){
                if(curAppSize.top < e.clientY < curAppSize.bottom){
                    //console.log('test')
                    CurApp.style.cursor = "e-resize"
                    document.onmousedown = function(){

                        document.onmousemove = resizeLeftRight

                        document.onmouseup = function(){
                            
                            console.log('mouse up ')
                        }
                        console.log('mouse down (LR)')
                    }
                }
            }
            else {
                CurApp.style.cursor = "auto"
            }


            

            
        }
    



        
        //resize app up or down
        function resizeUpDown(e){
            
            console.log('mouse down + move  (UD)')
            if(e.clientY < curappboundrect.top){

                console.log(e.clientY, curappboundrect.top)

            }
            else if (e.clientY > curappboundrect.top){

                console.log(e.clientY, curappboundrect.top)
            }
            
        }
        
        //resize app left or right
        
        function resizeLeftRight(){
            console.log('mouse down + move  (LR)')
        }


*/