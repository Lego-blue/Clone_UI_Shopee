

/*OPEN MODAL */
const getBtn = document.querySelector('.js-open');
const getModal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

function show() {
    getModal.classList.add('open');
}

getBtn.addEventListener('click', show);

modalClose.onclick = function()
{
    getModal.classList.remove('open');
}

/* OPEN: LOGIN */

const getLogin = document.querySelector('.js-login');
const classLogin = document.querySelector('.login');
console.log(classLogin)
function showLogin()
{
    // getModal.classList.remove('open');
    classLogin.classList.add('open-login');
}

getLogin.addEventListener('click', showLogin);

