var icons = document.getElementsByClassName('iconBody')
var TaskBoxes =  document.querySelectorAll('.dropintaskbar')

var div = document.createElement('div')


//drag and drop icons somewhere

var el

function allowDropTask(ev) {
    ev.preventDefault();
    
  }
  
  function dragTask(ev) {
    
    el = ev.target
    for(let i = 0; i < icons.length; i++){
        if ( ev.target !== icons[i]) {
            icons[i].style.backgroundColor = ""
        icons[i].style.outline = ""
        } 
    }
    
  }
  
  function dropTask(ev) {
    ev.preventDefault();
    
    
    //appen element to very left of a fee one
     //if box isnt occupied

        //append element to the very left that doesnt have a icon in already
    for(let j = 0; j<TaskBoxes.length;j++){
        if(TaskBoxes[j].innerHTML == ""){
            ev.target.appendChild(el);
    }
    
    

    //clear thr TaskBoxes that dont have icons in them
    
        

            for(let i = 0; i < TaskBoxes.length; i++){

            if(!TaskBoxes[i].innerHTML == ""){
                //console.log(TaskBoxes[i])
                if(TaskBoxes[i].firstElementChild == null){
                
                    TaskBoxes[i].removeChild(TaskBoxes[i].childNodes[0])
                    TaskBoxes[i].removeChild(TaskBoxes[i].childNodes[0])

                    console.log(TaskBoxes[i].childNodes[0])
                    console.log(TaskBoxes[i].childNodes)
                }
                
                
            } 
            }
            
            
        



    }

    }