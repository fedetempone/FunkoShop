const btnOpen = document.querySelector('.openMenu');
const btnClose = document.querySelector('.closeMenu');
const menuDisplay = document.querySelector('.navLinksUL');

btnOpen.addEventListener('click', (e)=> {
    e.preventDefault();
    menuDisplay.classList.remove('inactive');
} );

btnClose.addEventListener('click', (e)=>{
    console.log('funciona');
    e.preventDefault();
    menuDisplay.classList.add('inactive');
});