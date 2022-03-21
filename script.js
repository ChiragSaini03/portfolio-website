let skill = document.getElementsByClassName("main skill")[0]
let home = document.getElementsByClassName("main home")[0]
let myhobby = document.getElementsByClassName("main myhobby")[0]
let taskbar = document.getElementsByClassName("taskbar")[0]
 

center1.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "57px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "57px"
    }
}) 
Desktop.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "57px"){
        startmenu.style.bottom = "-655px"
    }
}) 