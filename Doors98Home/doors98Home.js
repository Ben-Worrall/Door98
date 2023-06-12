//if user is in fullscreen mode then increase size of buttons and whatnot
timeTaskBarUpdate()

function fullscreen(){
    if (window.innerHeight === screen.height) {
        //windows start button
        document.getElementById('Doors98START').style.width = "8%"
       } else {
        //windows start button
        document.getElementById('Doors98START').style.width = "7%"
         
       }


       setInterval(fullscreen, 1);
}; fullscreen();


//time in taskbar


function timeTaskBarUpdate(){
    var time = new Date();
document.getElementById('hour-min-am-pm').innerText = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

setInterval(timeTaskBarUpdate, 1)
}



document.getElementById('Doors98START').addEventListener('click', ()=>{
    alert('clicked')
})





//rightclick on taskbar


 
