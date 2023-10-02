





function CheckForAppsHover(){
    let curAppsAll = document.querySelectorAll('.doors98apps')
    for(let i =0; i< curAppsAll.length; i++){
        HoverElement(curAppsAll[i])
    }


setInterval(CheckForAppsHover, 1);
}; CheckForAppsHover();








function HoverElement(CurApp){

      
    CurApp.addEventListener('mouseover', function () {
        mouseHoverTB();
        mouseHoverLR();
        mouseHoverDiagonal();


        
    });
    
    CurApp.addEventListener('mouseleave', function () {
        for(let i = 0; i < document.querySelectorAll('.icon-text').length; i++){
            document.querySelectorAll('.icon-text')[i].innerText = "mouse just left"
        }
        
    
});




//hover

function mouseHoverTB(e){
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
            document.body.style.cursor = "n-resize"


            //for bottom level
        } else if(e.clientY <= Math.trunc(curAppSize.bottom) && e.clientY >= Math.trunc(curAppSize.bottom)-7.5){
            document.body.style.cursor = "n-resize"

        }

      

    }else {
        document.body.style.cursor = "default"
      }
    
}






function mouseHoverLR(e){
    e = e || window.event;
    e.preventDefault();

    if(Math.trunc(curAppSize.top) <= e.clientY <= Math.trunc(curAppSize.bottom)){


        //for right level
        if((curAppSize.right-5) <= e.clientX && e.clientX <=  curAppSize.right ){
            
            document.body.style.cursor = "e-resize"
            
    
            //for left level
        }else if(curAppSize.left <= e.clientX && e.clientX <= (curAppSize.left+5) ){
           
            document.body.style.cursor = "e-resize"
            
        } else {
            document.body.style.cursor = "default"
        }
}
}






function mouseHoverDiagonal(e){

    e = e || window.event;
    e.preventDefault();

    //top left
    if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           document.onmousemove = DiagonalTOPleft
           document.onmouseup = CloseElDrag
           document.body.style.cursor = "nwse-resize"
        }

    }



    //top right
    if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           document.onmousemove = DiagonalTOPright
           document.onmouseup = CloseElDrag
           document.body.style.cursor = "nesw-resize"
        }

    }



    //bottom left
 
    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           document.onmousemove = DiagonalBOTTOMleft
           document.onmouseup = CloseElDrag
           document.body.style.cursor = "nesw-resize"
        }

    }




    //bottom right

    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           document.onmousemove = DiagonalBOTTOMright
           document.onmouseup = CloseElDrag
           document.body.style.cursor = "nwse-resize"
        }

    }
}


}