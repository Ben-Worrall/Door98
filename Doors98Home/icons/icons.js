var icons = document.getElementsByClassName('iconBody')
var boxes =  document.querySelectorAll('.gridHomeScreen')

var div = document.createElement('div')


//drag and drop icons somewhere

var el

function allowDrop(ev) {
    ev.preventDefault();
    
  }
  
  function drag(ev) {
    
    el = ev.target
    for(let i = 0; i < icons.length; i++){
        if ( ev.target !== icons[i]) {
            icons[i].style.backgroundColor = ""
        icons[i].style.outline = ""
        } 
    }

    contextMenu.classList.remove("visible");
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    

    
    
    //if theres another element already in the box u want to move icon to
    if(ev.target.childNodes.length !== 0){
        console.log('full')
        console.log(ev.target.childNodes)

    } else { //if box isnt occupied

        //append element
    ev.target.appendChild(el);
    el.style.backgroundColor = "rgba(132, 134, 134, 0.7)"
    el.style.outline = "0.1vh solid rgb(169, 170, 170)"


    //clear thr boxes that dont have icons in them
    
        

            for(let i = 0; i < boxes.length; i++){

            if(!boxes[i].innerHTML == ""){
                //console.log(boxes[i])
                if(boxes[i].firstElementChild == null){
                
                    boxes[i].removeChild(boxes[i].childNodes[0])
                    boxes[i].removeChild(boxes[i].childNodes[0])

                    console.log(boxes[i].childNodes[0])
                    console.log(boxes[i].childNodes)
                }
                
                
            } 
        }
            
            
        



    }

    }
  





//if u click once on an icon
for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener('click', ()=>{
        icons[i].style.backgroundColor = "rgba(132, 134, 134, 0.7)"
        icons[i].style.outline = "0.1vh solid rgb(169, 170, 170)"
    })
}

//if u click twice on an icon





//if u click off an icon
document.onclick = function (event) {

    for(let i = 0; i < icons.length; i++){
        if ( event.target !== icons[i]) {
            icons[i].style.backgroundColor = ""
        icons[i].style.outline = ""
        } 
    }



}


var contextMenu = document.getElementById('contextMenuIconHome')

var contextMenuPOS = contextMenu.getBoundingClientRect()








//right click on an icon
for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener('contextmenu', (event) => {

        event.preventDefault();
        
        console.log('mouse right-click is prevented');

        
        const { clientX: mouseX, clientY: mouseY } = event;

        
        
        
        
        contextMenu.style.top = mouseY + "px"
        contextMenu.style.left = mouseX + "px"

       
        
        


  contextMenu.classList.remove("visible");

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
    });

    icons[i].addEventListener("click", (e) => {
        if (e.target.offsetParent != contextMenu) {
          contextMenu.classList.remove("visible");
        }
    })
    document.addEventListener("click", (e) => {
        if (e.target.offsetParent != contextMenu) {
          contextMenu.classList.remove("visible");
        }
    })

}


