var navSlide = () => {
    var nav = document.querySelector('.navlist');
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('slash');
    })
}
navSlide()