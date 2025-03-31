var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

// whenever people the toggle button we have to update the Storage

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark");
    }
    else
    {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light") //if theme is in light mode 
{
    darkBtn.classList.remove("dark-btn-on"); // removing dark button i,e. off
    document.body.classList.remove("dark-theme"); // removing dark theme i,e. website in light mode
}
else if(localStorage.getItem("theme") == "dark") //if theme is in dark mode 
{
    darkBtn.classList.add("dark-btn-on"); // adding dark button i,e. on
    document.body.classList.add("dark-theme"); // adding dark theme i,e. website in dark mode
}
else{
    //creating localStorage for whenever people visiting the website for the first time 
    localStorage.setItem("theme", "light");
}



