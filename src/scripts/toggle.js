
const toggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list');

toggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
});
