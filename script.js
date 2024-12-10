let seach=document.querySelector('.search_box');
document.querySelector('#search-icon').onclick=()=>{
    seach.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active');
    seach.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    seach.classList.remove('active');
}