let button=document.querySelector('header nav button')
button.addEventListener('click', menuBar)
function menuBar(){
    let menu=document.querySelector('.menu') 
    menu.classList.toggle('menuactive')
}
