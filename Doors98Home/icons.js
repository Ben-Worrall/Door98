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
                if(boxes[i].innerHTML == ""){
                  
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