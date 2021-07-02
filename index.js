const openMenuIcon = document.querySelector('.open-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const menuList = document.querySelector('.page-header ul');

window.addEventListener('resize', function(){
    const screenSize = window.innerWidth;
    
    if(screenSize > 768) {
        menuList.style.display = "flex";
    }else{
        menuList.style.display = "none";
        openMenuIcon.style.display = "flex";
        closeMenuIcon.className = "close-menu-icon";
    }
})

openMenuIcon.addEventListener('click', function(){
    menuList.style.display = "inline-block";
    openMenuIcon.style.display = "none";
    closeMenuIcon.className = "close-menu-icon-show";
})

closeMenuIcon.addEventListener('click', function(){
    menuList.style.display = "none";
    openMenuIcon.style.display = "flex";
    closeMenuIcon.className = "close-menu-icon";
})

