const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const sideBar = document.querySelector('#sidebar')

const toggleSideBar = () => {
    sideBar.classList.toggle('active')
}

hamburger.addEventListener('click' , toggleSideBar)
close.addEventListener('click' , toggleSideBar)