








document.addEventListener('mousemove', () => {
    let curAppsAll2 = document.querySelectorAll('.doors98apps')
    for(let i =0; i< curAppsAll2.length; i++){
        ResizeElement(curAppsAll2[i])
    }



}); 

function ResizeElement(CurApp){

    curAppSize = CurApp.getBoundingClientRect()


    CurApp.onmousedown = function(){
        dragOnMDownTB()
        dragOnMDownLR()
        dragOnMDownDiagonal()

    }
    CurApp.onmouseover = function(){
        CurApp.onmousemove = function(){

        mouseHoverTB()
        mouseHoverLR()
        mouseHoverDiagonal()

        }
        
    }
    CurApp.onmouseleave = function(){
        
        document.body.style.cursor = "default"
        
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
                document.body.style.cursor = "n-resize"


                //for bottom level
            } else if(e.clientY <= Math.trunc(curAppSize.bottom) && e.clientY >= Math.trunc(curAppSize.bottom)-7.5){
                document.onmousemove = BottomLVLDrag
                document.body.style.cursor = "n-resize"

            }

          

        }else {
            document.body.style.cursor = "default"
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
        document.body.style.cursor = "e-resize"
        

        //for left level
    }else if(curAppSize.left <= e.clientX && e.clientX <= (curAppSize.left+5) ){
        document.onmousemove = LeftLVLDrag
        document.body.style.cursor = "e-resize"
        
    } else {
        document.body.style.cursor = "default"
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














    //RESIZE FUNCTIONS
    //function to drag element depending on if it goes up or down or left or right  or diagonal
















    //up func


    function TopLVLDrag(e){
        e = e || window.event;
        e.preventDefault();

           //drag up
        if(e.clientY < curAppSize.top){

            CurApp.style.top = e.clientY + "px"
            CurApp.style.height = (curAppSize.height) + (curAppSize.top - e.clientY) + "px"
            


            //drag down
        } else if(e.clientY > curAppSize.top){

            CurApp.style.top = e.clientY+ "px"
            CurApp.style.height = (curAppSize.height) - (e.clientY - curAppSize.top) + "px"
            
        }

        document.body.style.cursor = "n-resize"

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
            
            


            //drag down
        } else if(e.clientY > curAppSize.bottom){
            
            
            CurApp.style.top = curAppSize.top
            CurApp.style.height = ((curAppSize.height) + (e.clientY-curAppSize.bottom)) + "px"
            

        
        }
        document.body.style.cursor = "n-resize"

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
            



            //drag left
        } else if(e.clientX > curAppSize.right){

            CurApp.style.left = curAppSize.left + "px"
            CurApp.style.width = (curAppSize.width +  (e.clientX - curAppSize.right)) + "px"
            

        }

        document.body.style.cursor = "e-resize"

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
            



            //drag right
        } else if(e.clientX > curAppSize.left){

            CurApp.style.left = e.clientX + "px"
            CurApp.style.width = (curAppSize.width +  (curAppSize.left - e.clientX)) + "px"
            

        }

        document.body.style.cursor = "e-resize"
        console.log('left Level drag')


    }



//diagonals




    //diagonal top left func


    function DiagonalTOPleft(e){

        e = e || window.event;
        e.preventDefault();

           //drag up
           if(e.clientY < curAppSize.top){

            CurApp.style.top = e.clientY + "px"
            CurApp.style.height = (curAppSize.height) + (curAppSize.top - e.clientY) + "px"
            


            //drag down
        } else if(e.clientY > curAppSize.top){

            CurApp.style.top = e.clientY+ "px"
            CurApp.style.height = (curAppSize.height) - (e.clientY - curAppSize.top) + "px"
           
        }




        //drag left
        if(e.clientX < curAppSize.left){

            CurApp.style.left = e.clientX + "px"
            CurApp.style.width = (curAppSize.width + (curAppSize.left - e.clientX)) + "px"
            



            //drag right
        } else if(e.clientX > curAppSize.left){

            CurApp.style.left = e.clientX + "px"
            CurApp.style.width = (curAppSize.width +  (curAppSize.left - e.clientX)) + "px"
            

        }



        document.body.style.cursor = "nwse-resize"




        console.log('top left')
    }









   //diagonal top right func


   function DiagonalTOPright(e){

    e = e || window.event;
    e.preventDefault();




    //drag up
 if(e.clientY < curAppSize.top){

    CurApp.style.top = e.clientY + "px"
    CurApp.style.height = (curAppSize.height) + (curAppSize.top - e.clientY) + "px"
    


    //drag down
} else if(e.clientY > curAppSize.top){

    CurApp.style.top = e.clientY+ "px"
    CurApp.style.height = (curAppSize.height) - (e.clientY - curAppSize.top) + "px"
    
}





//drag right
if(e.clientX < curAppSize.right){

    CurApp.style.left = curAppSize.left + "px"
    CurApp.style.width = (curAppSize.width + ( e.clientX - curAppSize.right)) + "px"
    



    //drag left
} else if(e.clientX > curAppSize.right){

    CurApp.style.left = curAppSize.left + "px"
    CurApp.style.width = (curAppSize.width +  (e.clientX - curAppSize.right)) + "px"
    

}





document.body.style.cursor = "nesw-resize"
    console.log('top right')


    }










   //diagonal bottom left func


   function DiagonalBOTTOMleft(e){

    e = e || window.event;
    e.preventDefault();



//drag up
if(e.clientY < curAppSize.bottom){


    CurApp.style.top = curAppSize.top
    CurApp.style.height = (Math.trunc(curAppSize.height) - Math.trunc(curAppSize.bottom - e.clientY)) + "px"
    
    


    //drag down
} else if(e.clientY > curAppSize.bottom){
    
    
    CurApp.style.top = curAppSize.top
    CurApp.style.height = ((curAppSize.height) + (e.clientY-curAppSize.bottom)) + "px"
    


}




     //drag left
     if(e.clientX < curAppSize.left){

        CurApp.style.left = e.clientX + "px"
        CurApp.style.width = (curAppSize.width + (curAppSize.left - e.clientX)) + "px"
        



        //drag right
    } else if(e.clientX > curAppSize.left){

        CurApp.style.left = e.clientX + "px"
        CurApp.style.width = (curAppSize.width +  (curAppSize.left - e.clientX)) + "px"
        

    }




    document.body.style.cursor = "nesw-resize"
    console.log('bottom left')

   }








   //diagonal bottom right func


   function DiagonalBOTTOMright(e){

    e = e || window.event;
    e.preventDefault();

    if(e.clientY < curAppSize.bottom){


        CurApp.style.top = curAppSize.top
        CurApp.style.height = (Math.trunc(curAppSize.height) - Math.trunc(curAppSize.bottom - e.clientY)) + "px"
       
        
    
    
        //drag down
    } else if(e.clientY > curAppSize.bottom){
        
        
        CurApp.style.top = curAppSize.top
        CurApp.style.height = ((curAppSize.height) + (e.clientY-curAppSize.bottom)) + "px"
        
    
    
    }




    //drag right
if(e.clientX < curAppSize.right){

    CurApp.style.left = curAppSize.left + "px"
    CurApp.style.width = (curAppSize.width + ( e.clientX - curAppSize.right)) + "px"
    



    //drag left
} else if(e.clientX > curAppSize.right){

    CurApp.style.left = curAppSize.left + "px"
    CurApp.style.width = (curAppSize.width +  (e.clientX - curAppSize.right)) + "px"
    

}





document.body.style.cursor = "nwse-resize"
    console.log('bottom right')

}















//HOVER

// on mouse hover















//hover top or bottom

function mouseHoverTB(e){
    
    e = e || window.event;
    e.preventDefault();

    if(Math.trunc(curAppSize.left) <= e.clientX <= Math.trunc(curAppSize.right)){

        //for top level
       if(e.clientY >= Math.trunc(curAppSize.top) && e.clientY <= Math.trunc(curAppSize.top)+7.5){
           
        
        CurApp.style.cursor = "n-resize"


        //for bottom level
       } else if(e.clientY <= Math.trunc(curAppSize.bottom) && e.clientY >= Math.trunc(curAppSize.bottom)-7.5){
        

        CurApp.style.cursor = "n-resize"

        
       }else {
        CurApp.style.cursor = "default"
    }

    }else {
        CurApp.style.cursor = "default"
    }

     

   

    
}



//hover left or right


function mouseHoverLR(e){
    e = e || window.event;
    e.preventDefault();

    if(Math.trunc(curAppSize.top) <= e.clientY <= Math.trunc(curAppSize.bottom)){


        //for right level
        if((curAppSize.right-5) <= e.clientX && e.clientX <=  curAppSize.right ){
            
            CurApp.style.cursor = "e-resize"
            
    
            //for left level
        }else if(curAppSize.left <= e.clientX && e.clientX <= (curAppSize.left+5) ){
            
            CurApp.style.cursor = "e-resize"
            
        } else {
            CurApp.cursor = "default"
        }
    
    
       
       } else {
        CurApp.cursor = "default"
    }
   
}




//hover on diagonals

function mouseHoverDiagonal(e){

    e = e || window.event;
    e.preventDefault();

 
    
     //top left
     if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           
            CurApp.style.cursor = "nwse-resize"
        } else {
            CurApp.cursor = "default"
        }

    } else {
        CurApp.cursor = "default"
    }



    //top right
    if(e.clientY >= curAppSize.top && e.clientY <= (curAppSize.top+12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           
            CurApp.style.cursor = "nesw-resize"
        } else {
            CurApp.cursor = "default"
        }

    } else {
        CurApp.cursor = "default"
    }



    //bottom left
 
    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX >= curAppSize.left && e.clientX <= (curAppSize.left+12)){
           
            CurApp.style.cursor = "nesw-resize"
        } else {
            CurApp.cursor = "default"
        }

    } else {
        CurApp.cursor = "default"
    }




    //bottom right

    if(e.clientY <= curAppSize.bottom && e.clientY >= (curAppSize.bottom-12)){
        if(e.clientX <= curAppSize.right && e.clientX >= (curAppSize.right-12)){
           
            CurApp.style.cursor = "nwse-resize"
        } else {
            CurApp.cursor = "default"
        }

    } else {
        CurApp.cursor = "default"
    }


}


















    //function to stop dragging when mouse up
















function CloseElDrag(){
    document.onmouseup = null;
    document.onmousemove = null;
    document.onmousedown = null
    document.body.style.cursor = "default"
}






}