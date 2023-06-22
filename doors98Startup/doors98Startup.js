

function OnloadFunc(){
    document.getElementById("html").style.cursor = "none"
    setTimeout(getToHome, 6500)
}


function getToHome(){
  document.getElementById("html").style.background = "url('')";
  document.getElementById("html").style.backgroundColor = "black"; 
  setTimeout(LoadHome, 5000)
}

function LoadHome(){
    //for live server
    if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
        window.location = '/doors98Home/doors98Home.html'
    }

    //for file
    else if(window.location.protocol == "file:"){
    window.location = '/doors98Home/doors98Home.html'
    }
    //for github
    else if(document.location.protocol == "https:"){window.location = 'https://ben-worrall.github.io/Doors98/Doors98Home/doors98Home.html'}
}





    
    
