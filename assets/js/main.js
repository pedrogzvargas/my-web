/*===== LANGUAGE TOGGLE =====*/
const translations = {
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.skills': 'Habilidades',
        'nav.work': 'Experiencia',
        'nav.contact': 'Contacto',
        'home.title': 'Hola,<br>Soy <span class="home__title-color">Pedro González</span><br>Backend Developer',
        'home.contact': 'Contacto',
        'home.cv': '<i class=\'bx bx-download\'></i> Descargar CV',
        'about.title': 'Acerca de',
        'about.subtitle': 'Soy Pedro González',
        'about.text': 'Desarrollador backend especializado en Python con más de 5 años de experiencia en el diseño y desarrollo de APIs y sistemas escalables. He trabajado con los principales frameworks del ecosistema, así como con diversos servicios en entornos cloud.<br><br>En los últimos años, me he enfocado en el sector financiero, desarrollando soluciones críticas con altos estándares de rendimiento, seguridad y disponibilidad. Recientemente, he comenzado a especializarme en el desarrollo de soluciones con inteligencia artificial, participando en la integración de modelos GPT en proyectos reales para la automatización de procesos.',
        'about.cv': '<i class=\'bx bx-download\'></i> Descargar currículum (PDF)',
        'skills.title': 'Habilidades',
        'skills.text': 'Tecnologías y herramientas con las que trabajo en el desarrollo de APIs, sistemas escalables y soluciones en la nube.',
        'work.title': 'Experiencia',
        'work.coderio.title': 'Desarrollador Backend Python - Coderio',
        'work.coderio.date': 'Oct 2024 - Mar 2026',
        'work.coderio.1': 'Participé en el desarrollo de un sistema de créditos enfocado en la recolección, validación de información y documentación, integrando APIs basadas en modelos de OpenAI (ChatGPT) y orquestando flujos mediante LangGraph para automatizar procesos y mejorar la eficiencia operativa.',
        'work.coderio.2': 'Brindé soporte y optimización a funciones serverless (AWS Lambda), mejorando su rendimiento y mantenimiento.',
        'work.coderio.3': 'Implementé nuevas versiones de APIs para clientes de Coderio utilizando FastAPI, asegurando escalabilidad y buenas prácticas.',
        'work.coderio.4': 'Desarrollé la generación de estados de cuenta mediante ReportLab, automatizando procesos de documentación financiera.',
        'work.coderio.5': 'Diseñé e implementé un sistema de procesamiento de dispersiones utilizando colas SQS de AWS para garantizar procesamiento asíncrono y resiliente.',
        'work.coderio.6': 'Desarrollé un sistema para la gestión de tarjetahabientes (cardholders) y tarjetas (cards) integrando la plataforma Airwallex.',
        'work.columbus.title': 'Desarrollador Backend Python - Columbus de México',
        'work.columbus.date': 'Sep 2020 - Ene 2024',
        'work.columbus.1': 'Formé parte del equipo de desarrollo de una plataforma de inversiones y ahorro personal, construida con Flask bajo una arquitectura hexagonal. <br> <br> Durante el desarrollo se implementó comunicación asíncrona mediante RabbitMQ y Kombu para la creación de publicadores y consumidores de eventos, contribuyendo a una arquitectura desacoplada y escalable.',
        'work.columbus.2': 'Integré el servicio de Kuspit dentro del sistema, habilitando funcionalidades clave para operaciones de inversión.',
        'work.columbus.3': 'Lideré la integración, mantenimiento y soporte del servicio de Kuspit dentro de la plataforma, incluyendo la incorporación de nuevas funcionalidades.',
        'work.columbus.4': 'Desarrollé un sistema interno basado en SEPOMEX para la gestión de direcciones.',
        'work.columbus.5': 'Implementé un módulo de notificaciones push utilizando Firebase Cloud Messaging.',
        'work.columbus.6': 'Brindé soporte y mantenimiento a la primera versión del sistema de inversiones y ahorro, asegurando su estabilidad operativa.',
        'work.columbus.7': 'Participé en capacitación técnica para el desarrollo de proyectos en Java con Spring Boot.',
        'work.mobilender.title': 'Desarrollador Backend Python - Mobilender',
        'work.mobilender.date': 'Dic 2018 - Sep 2020',
        'work.mobilender.1': 'Desarrollé nuevas funcionalidades para un sistema de créditos, contribuyendo a la evolución y mejora continua del producto.',
        'work.mobilender.2': 'Integré servicios de buró de crédito para la validación y análisis de perfiles crediticios.',
        'work.mobilender.3': 'Desarrollé un sistema interno basado en SEPOMEX para la gestión y normalización de direcciones.',
        'work.mobilender.4': 'Integré el servicio de Quien es Quien para validaciones relacionadas con cumplimiento (PEP y PLD).',
        'work.mobilender.5': 'Desarrollé servicios para la gestión de avales dentro del sistema de créditos.',
        'work.mobilender.6': 'Realicé análisis de datos y generación de reportes utilizando Pandas.',
        'contact.title': 'Contacto',
        'contact.email': 'Correo',
        'contact.phone': 'Teléfono',
        'footer.copy': '© gzvargas. All rigths reserved'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.work': 'Experience',
        'nav.contact': 'Contact',
        'home.title': 'Hi,<br>I\'m <span class="home__title-color">Pedro González</span><br>Backend Developer',
        'home.contact': 'Contact',
        'home.cv': '<i class=\'bx bx-download\'></i> Download CV',
        'about.title': 'About',
        'about.subtitle': 'I\'m Pedro González',
        'about.text': 'I am a Backend Developer specializing in Python, with over 5 years of experience designing and building scalable APIs and distributed systems. I have worked with the leading frameworks in the Python ecosystem, as well as a variety of cloud-based services and platforms.<br><br>In recent years, I have focused on the financial sector, developing mission-critical solutions that meet high standards of performance, security, and availability. More recently, I have started specializing in AI-powered solutions, integrating GPT models into real-world applications to automate processes and improve operational efficiency.',
        'about.cv': '<i class=\'bx bx-download\'></i> Download résumé (PDF)',
        'skills.title': 'Skills',
        'skills.text': 'Technologies and tools I use to build APIs, scalable systems, and cloud-based solutions.',
        'work.title': 'Experience',
        'work.coderio.title': 'Python Backend Developer - Coderio',
        'work.coderio.date': 'Oct 2024 - Mar 2026',
        'work.coderio.1': 'Contributed to the development of a credit management system focused on data collection, validation, and documentation by integrating OpenAI-powered APIs (ChatGPT) and orchestrating workflows with LangGraph to automate processes and improve operational efficiency.',
        'work.coderio.2': 'Supported and optimized AWS Lambda serverless functions, improving performance, reliability, and maintainability.',
        'work.coderio.3': 'Implemented new API versions for Coderio clients using FastAPI, ensuring scalability and adherence to best practices.',
        'work.coderio.4': 'Developed account statement generation services using ReportLab, automating financial document creation and delivery.',
        'work.coderio.5': 'Designed and implemented a disbursement processing system using AWS SQS to ensure resilient and asynchronous transaction processing.',
        'work.coderio.6': 'Developed a card and cardholder management system through integration with the Airwallex platform.',
        'work.columbus.title': 'Python Backend Developer - Columbus de México',
        'work.columbus.date': 'Sep 2020 - Jan 2024',
        'work.columbus.1': 'Contributed to the development of a personal investment and savings platform built with Flask following a hexagonal architecture. <br> <br> Implemented asynchronous communication using RabbitMQ and Kombu to build event-driven publishers and consumers, contributing to a decoupled, scalable, and maintainable architecture.',
        'work.columbus.2': 'Integrated the Kuspit platform into the system, enabling core investment-related functionality.',
        'work.columbus.3': 'Led the integration, maintenance, and ongoing support of the Kuspit platform, including the implementation of new features and enhancements.',
        'work.columbus.4': 'Developed an internal address management system based on SEPOMEX data.',
        'work.columbus.5': 'Implemented a push notification module using Firebase Cloud Messaging (FCM).',
        'work.columbus.6': 'Provided support and maintenance for the first version of the investment and savings platform, ensuring operational stability and reliability.',
        'work.columbus.7': 'Participated in technical training focused on Java application development using Spring Boot.',
        'work.mobilender.title': 'Python Backend Developer - Mobilender',
        'work.mobilender.date': 'Dec 2018 - Sep 2020',
        'work.mobilender.1': 'Developed new features for a credit management system, contributing to the continuous evolution and enhancement of the product.',
        'work.mobilender.2': 'Integrated credit bureau services to support credit profile validation and risk assessment.',
        'work.mobilender.3': 'Developed an internal address management and normalization system based on SEPOMEX data.',
        'work.mobilender.4': 'Integrated the Quien es Quien service to support compliance processes, including PEP (Politically Exposed Persons) and AML (Anti-Money Laundering) validations.',
        'work.mobilender.5': 'Developed services for guarantor management within the credit platform.',
        'work.mobilender.6': 'Performed data analysis and generated reports using Pandas to support business and operational decision-making.',
        'contact.title': 'Contact',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'footer.copy': '© gzvargas. All rights reserved'
    }
}

const getBrowserLang = () => {
    const browserLang = (navigator.language || 'es').toLowerCase()
    return browserLang.startsWith('es') ? 'es' : 'en'
}

let currentLang = localStorage.getItem('lang') || getBrowserLang()

const setLanguage = (lang) => {
    currentLang = lang
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')
        const value = translations[lang][key]
        if (value === undefined) return

        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = value
        } else {
            el.textContent = value
        }
    })

    const langToggle = document.getElementById('lang-toggle')
    if (langToggle) {
        const target = lang === 'es'
            ? { flag: '🇲🇽', label: 'ES', aria: 'Cambiar a inglés' }
            : { flag: '🇺🇸', label: 'EN', aria: 'Switch to Spanish' }

        langToggle.querySelector('.nav__lang-flag').textContent = target.flag
        langToggle.querySelector('.nav__lang-label').textContent = target.label
        langToggle.setAttribute('aria-label', target.aria)
    }
}

const langToggle = document.getElementById('lang-toggle')
if (langToggle) {
    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'es' ? 'en' : 'es')
    })
}

setLanguage(currentLang)

/*===== CV DOWNLOAD =====*/
const triggerDownload = (blobUrl, filename) => {
    const anchor = document.createElement('a')
    anchor.href = blobUrl
    anchor.download = filename
    anchor.style.display = 'none'
    document.body.appendChild(anchor)
    anchor.click()
    setTimeout(() => {
        document.body.removeChild(anchor)
        if (blobUrl.startsWith('blob:')) {
            URL.revokeObjectURL(blobUrl)
        }
    }, 150)
}

const downloadCV = async (url, filename) => {
    const fileUrl = new URL(url, window.location.href).href

    const response = await fetch(fileUrl)
    if (!response.ok) throw new Error('Download failed')

    const blob = new Blob([await response.arrayBuffer()], { type: 'application/octet-stream' })
    triggerDownload(URL.createObjectURL(blob), filename)
}

document.querySelectorAll('.cv-download').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const url = link.getAttribute('href')
        const filename = link.getAttribute('data-download')

        downloadCV(url, filename).catch(async () => {
            if (window.location.protocol === 'file:') {
                try {
                    await downloadCV(`http://localhost:8000/${url}`, filename)
                } catch {
                    console.warn('Para descargar el CV en local, ejecuta: python3 serve.py')
                }
                return
            }

            triggerDownload(new URL(url, window.location.href).href, filename)
        })
    })
})

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
