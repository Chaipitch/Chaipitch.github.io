const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #DBD4B4, #DBD4B4)",
    "linear-gradient(to right top, #00dbde, #00dbde)",
    "linear-gradient(to right top, #3498db, #3498db)",
    "linear-gradient(to right top, #304352, #304352)"
    ];


const options = {
    threshold: 0.7
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
})


//INIT SMOOTH SCROLL
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    //ToggleNav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        //ANIM
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
            }
        });
        burger.classList.toggle('toggle');

    });
    
    
}

navSlide();