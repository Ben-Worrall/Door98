var firstApp = document.createElement('div')
    firstApp.classList.add('doors98apps')
var TaskbarIconRow = document.querySelectorAll('.dropintaskbar')









//drag all the apps around


// Make the DIV element draggable:
function CheckForApps(){
    let curAppsAll = document.querySelectorAll('.dragableForApps')
    for(let i =0; i< curAppsAll.length; i++){
        dragElement(curAppsAll[i])
    }


setInterval(CheckForApps, 1);
}; CheckForApps();
;




var onMDownElTop = 0
var onMDownElLeft = 0
var onMDownPosX = 0
var onMDownPosY = 0
function dragElement(elmnt) {
    elmnt = elmnt || window.event;
    
    // otherwise, move the DIV from anywhere inside the DIV:

   elmnt.onmousedown = function (e){
    //current/starting position
    onMDownPosX = e.clientX
    onMDownPosY = e.clientY
    onMDownElLeft = elmnt.parentNode.parentNode.getBoundingClientRect().left
    onMDownElTop = elmnt.parentNode.parentNode.getBoundingClientRect().top
    //console.log(onMDownPosX)
    //console.log(elmnt.parentNode.parentNode.getBoundingClientRect().left)
    dragMouseDown()
    
   }
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    

    //find the position where user can resize app, otherwise move and drag element
    if(e.clientY < Math.trunc(curAppSize.top)+5 || e.clientY > Math.trunc(curAppSize.top + curAppSize.height)-5){
        if(curAppSize.left < e.clientY < curAppSize.right){
            return
        }
    } else{
        document.onmousemove = elementDrag; // call a function whenever the cursor moves:
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    //elmnt.parentNode.parentNode.style.top = (elmnt.offsetTop - pos4) + "px"
    elmnt.parentNode.parentNode.style.width = "60vw"
    elmnt.parentNode.parentNode.style.height = "60vh"
    





    //move app left or right
    let curXPos = (e.clientX - (elmnt.parentNode.parentNode.getBoundingClientRect().width / 2))

//console.log(window.innerWidth)
    if(window.innerWidth >= e.clientX){
        if(e.clientX >= 0){
            elmnt.parentNode.parentNode.style.left = curXPos + "px"
        } 
        
    } 
        


    //moving app up or down
    

if(window.innerHeight > e.clientY && e.clientY > 2){
    
    
    elmnt.parentNode.parentNode.style.left = ((50 / 100) * elmnt.parentNode.parentNode.style.width) + "px"
    //console.log(elmnt.parentNode.parentNode.getBoundingClientRect().left)
    
    //move element up or down using a bit of maths

    if((e.clientY - onMDownPosX) < 0){
        
        let y = (e.clientY - onMDownPosY)* -1
        elmnt.parentNode.parentNode.style.top = (onMDownElTop - y) + "px"
        //console.log(elmnt.parentNode.parentNode.style.top)

    }else {
        
        let y = (e.clientY - onMDownPosY)
        elmnt.parentNode.parentNode.style.top = (onMDownElTop + y) + "px"
        //console.log(elmnt.parentNode.parentNode.style.top)
    }

  }else {
    console.log('not inside')
  }
  }


  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.onmousedown = null
    
  }
}








//resize apps



function CheckForApps2(){
    let curAppsAll2 = document.querySelectorAll('.doors98apps')
    for(let i =0; i< curAppsAll2.length; i++){
        ResizeElement(curAppsAll2[i])
        
        
    }

setInterval(CheckForApps2, 1);
}; CheckForApps2();



function ResizeElement(CurApp){

    curAppSize = CurApp.getBoundingClientRect()


    CurApp.onmousedown = function(){
        dragOnMDownTB()
        dragOnMDownLR()
        dragOnMDownDiagonal()
    }



//drag top or bottom


    function dragOnMDownTB(e){
        e = e || window.event;
        e.preventDefault();


        //when mosue up, then stop being able to resize app
       document.onmouseup = CloseElDrag


       //if the mouse is between 5 pixels from the edge and the edge, then do mousedown   CurApp.style.cursor = "n-resize"

//for top/bottom level
          if(Math.trunc(curAppSize.left) <= e.clientX <= Math.trunc(curAppSize.right)){

             //for top level
            if(e.clientY >= Math.trunc(curAppSize.top)  &&   e.clientY <= Math.trunc(curAppSize.top)+5){
                //console.log('drag up')
                document.onmousemove = TopLVLDrag
                CurApp.style.cursor = "n-resize"


                //for bottom level
            } else if(e.clientY <= Math.trunc(curAppSize.bottom) && e.clientY >= Math.trunc(curAppSize.bottom)-7.5){
                document.onmousemove = BottomLVLDrag
                CurApp.style.cursor = "n-resize"

            }

          

        }else {
            CurApp.style.cursor = "default"
          }


           
    }
   
//drag left or right


   function dragOnMDownLR(e){
    e = e || window.event;
    e.preventDefault();


    //when mosue up, then stop being able to resize app
   document.onmouseup = CloseElDrag

   if(Math.trunc(curAppSize.top) <= e.clientY <= Math.trunc(curAppSize.bottom)){


    //for right level
    if((curAppSize.right-5) <= e.clientX && e.clientX <=  curAppSize.right ){
        document.onmousemove = RightLVLDrag
        CurApp.style.cursor = "e-resize"
        

        //for left level
    }else if(curAppSize.left <= e.clientX && e.clientX <= (curAppSize.left+5) ){
        document.onmousemove = LeftLVLDrag
        CurApp.style.cursor = "e-resize"
        
    } else {
        CurApp.style.cursor = "default"
    }


   
   }

   }




//drag diagonal  


function dragOnMDownDiagonal(e){
    e = e || window.event;
    e.preventDefault();

    //top left
    if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           document.onmousemove = DiagonalTOPleft
           document.onmouseup = CloseElDrag
           CurApp.style.cursor = "nwse-resize"
        }

    }



    //top right
    if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           document.onmousemove = DiagonalTOPright
           document.onmouseup = CloseElDrag
           CurApp.style.cursor = "nesw-resize"
        }

    }



    //bottom left
 
    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           document.onmousemove = DiagonalBOTTOMleft
           document.onmouseup = CloseElDrag
           CurApp.style.cursor = "nesw-resize"
        }

    }




    //bottom right

    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           document.onmousemove = DiagonalBOTTOMright
           document.onmouseup = CloseElDrag
           CurApp.style.cursor = "nwse-resize"
        }

    }




}










    //function to drag element depending on if it goes up or down or left or right  or diagonal




    //up func


    function TopLVLDrag(e){
        e = e || window.event;
        e.preventDefault();

           //drag up
        if(e.clientY < curAppSize.top){

            CurApp.style.top = e.clientY + "px"
            CurApp.style.height = (curAppSize.height) + (curAppSize.top - e.clientY) + "px"
            CurApp.style.cursor = "n-resize"


            //drag down
        } else if(e.clientY > curAppSize.top){

            CurApp.style.top = e.clientY+ "px"
            CurApp.style.height = (curAppSize.height) - (e.clientY - curAppSize.top) + "px"
            CurApp.style.cursor = "n-resize"
        }



        console.log('Top Level drag')
    }

   

   // down func


    function BottomLVLDrag(e){
        //console.log('test')
        e = e || window.event;
        e.preventDefault();


           //drag up
        if(e.clientY < curAppSize.bottom){


            CurApp.style.top = curAppSize.top
            CurApp.style.height = (Math.trunc(curAppSize.height) - Math.trunc(curAppSize.bottom - e.clientY)) + "px"
            CurApp.style.cursor = "n-resize"
            


            //drag down
        } else if(e.clientY > curAppSize.bottom){
            
            
            CurApp.style.top = curAppSize.top
            CurApp.style.height = ((curAppSize.height) + (e.clientY-curAppSize.bottom)) + "px"
            CurApp.style.cursor = "n-resize"

        
        }
        CurApp.style.cursor = "n-resize"

        console.log('Bottom Level drag')

    }



    //right func


    function RightLVLDrag(e){
        //console.log('test')
        e = e || window.event;
        e.preventDefault();


        //drag right
        if(e.clientX < curAppSize.right){

            CurApp.style.left = curAppSize.left + "px"
            CurApp.style.width = (curAppSize.width + ( e.clientX - curAppSize.right)) + "px"
            CurApp.style.cursor = "e-resize"



            //drag left
        } else if(e.clientX > curAppSize.right){

            CurApp.style.left = curAppSize.left + "px"
            CurApp.style.width = (curAppSize.width +  (e.clientX - curAppSize.right)) + "px"
            CurApp.style.cursor = "e-resize"

        }



        console.log('right Level drag')



    }



    //left func


    function LeftLVLDrag(e){
        //console.log('test')
        e = e || window.event;
        e.preventDefault();


           //drag left
        if(e.clientX < curAppSize.left){

            CurApp.style.left = e.clientX + "px"
            CurApp.style.width = (curAppSize.width + (curAppSize.left - e.clientX)) + "px"
            CurApp.style.cursor = "e-resize"



            //drag right
        } else if(e.clientX > curAppSize.left){

            CurApp.style.left = e.clientX + "px"
            CurApp.style.width = (curAppSize.width +  (curAppSize.left - e.clientX)) + "px"
            CurApp.style.cursor = "e-resize"

        }


        console.log('left Level drag')


    }



    //diagonal top left func

    function DiagonalTOPleft(){

        console.log('top left')
    }




   //diagonal top right func

   function DiagonalTOPright(){

    console.log('top right')
   }




   //diagonal bottom left func

   function DiagonalBOTTOMleft(){

    console.log('bottom left')
   }




   //diagonal bottom right func

   function DiagonalBOTTOMright(){

    console.log('bottom right')

   }


















    //function to stop dragging when mouse up

function CloseElDrag(){
    document.onmouseup = null;
    document.onmousemove = null;
    document.onmousedown = null
    CurApp.style.cursor = "default"
}

    

}





















//apps






//internet explorer

function internetExplorerLoad(e){
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



//append icon to taskbar



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