function tobios(){
    document.getElementById('body').style.cursor = "wait"
    setTimeout(showlogo, 5000)
}



function showlogo(){
    document.getElementById('body').classList.add('showDoorsLogo')
    document.getElementById('body').style.cursor = "none"
    setTimeout(showbios, 1000)
}







function showbios(){
    document.getElementById('body').classList.add('showBios')
    document.getElementById('body').style.cursor = "none"
    document.getElementById('body').classList.remove('showDoorsLogo')
    document.getElementById('getToBiosFromrestart').style.display = ""


    setTimeout(function(){
        document.getElementById('body').classList.remove('showBios')
        document.getElementById('body').classList.remove('showDoorsLogo')
    document.getElementById('getToBiosFromrestart').style.display = "none"
    document.getElementById('body').style.cursor = "none"
    },3000)
    setTimeout(toStartup, 8000)

}

function toStartup(){
    
    if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
        window.location = '/doors98Startup/doors98Startup.html'
    }

    //for file
    else if(window.location.protocol == "file:"){
    window.location = '/doors98Startup/doors98Startup.html'
    }
    //for github
    else if(document.location.protocol == "https:"){window.location = 'https://Ben-Worrall.github.io/Doors98/doors98Startup/doors98Startup.html'}
}
