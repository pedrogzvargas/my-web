/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__menu .nav__link')
const headerOffset = 58

const scrollActive = () =>{
    const scrollY = window.scrollY + headerOffset
    const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5
    let currentSection = sections[0]?.getAttribute('id') || ''

    if (atPageBottom) {
        currentSection = sections[sections.length - 1].getAttribute('id')
    } else {
        sections.forEach(section => {
            if (scrollY >= section.offsetTop) {
                currentSection = section.getAttribute('id')
            }
        })
    }

    navLinks.forEach(link => {
        link.classList.remove('active-link')
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
window.addEventListener('load', scrollActive)
scrollActive()

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__item, .work__item, .contact__item',{interval: 200}); 
