var icons = document.getElementsByClassName('iconBody')

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