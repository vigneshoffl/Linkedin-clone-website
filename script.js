let profileMenu = document.getElementById("profileMenu");
let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("seeMoreLink");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    }
    else{
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}