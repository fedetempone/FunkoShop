const sign_in_container = document.querySelector('.sign-in-container');
const sign_up_container = document.querySelector('.sign-up-container');

document.addEventListener('click', e => {
    if (e.target.matches('.ok-account')) {
        sign_in_container.style.display = 'block';
        sign_up_container.style.display = "none";
    } else if (e.target.matches('.no-account')){
        sign_up_container.style.display = "block";
        sign_in_container.style.display = "none";
    }
})