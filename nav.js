let closeBar = document.getElementById('menu-close-bar');
let openBar = document.getElementById('menu-bar');
let mainNavBar = document.getElementsByClassName('navbar')[0];
openBar.addEventListener('click', function(){
    if(mainNavBar.style.display == 'none' || mainNavBar.style.display == ''){
        mainNavBar.style.display = 'block';
        openBar.src = 'icons/closeBar.svg'
    }
    else{
        mainNavBar.style.display = 'none';
        openBar.src = 'icons/menuBar.svg'
       
    }
})