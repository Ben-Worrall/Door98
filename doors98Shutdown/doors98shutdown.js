let body = document.getElementById('body')

function toPowerBNT(){
    body.style.cursor = "wait"
    setTimeout(showscreenshutdown, 3000)
    
}


function showscreenshutdown(){
    body.style.cursor = "none"
    body.classList.add('changebackground')
    
setTimeout(blackscreenshutdown, 6500)
}

function blackscreenshutdown(){
    body.style.cursor = "wait"
    body.classList.remove('changebackground')
    setTimeout(getTostartbutton, 2250)
}




function getTostartbutton(){
    body.style.cursor = "pointer"
    if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
        window.location = '/index.html'
    }

    //for file
    else if(window.location.protocol == "file:"){
    window.location = '/index.html'
    }
    //for github
    else if(document.location.protocol == "https:"){window.location = 'https://github.com/Ben-Worrall/Doors98/tree/26beab113a3978db74b33e7af6286038b43fed6a/Doors98Home'}
}
