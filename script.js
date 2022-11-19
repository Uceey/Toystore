console.log('Got here')

const menuButton = document.querySelector('#hamburger')
const menuBody = document.querySelector('.may')
menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    menuBody.classList.toggle('hide')
});
