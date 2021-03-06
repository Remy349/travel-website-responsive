/* SHOW MENU */
const navMenu = document.getElementById("navMenu"),
    navToggle = document.getElementById("navToggle"),
    navClose = document.getElementById("navClose")

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("navMenu")
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById("header")
    // When the scroll is greater than 200vh, add the scroll-header class to the header tag
    if (this.scrollY >= 100) {
        header.classList.add("scroll-header")
    }
    else {
        header.classList.remove("scroll-header")
    }
}

window.addEventListener("scroll", scrollHeader)

/* SWIPER DISCOVER */
const swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0
    } 
});

/* VIDEO */
const videoFile = document.getElementById("videoFile"),
    videoButton = document.getElementById("videoButton"),
    videoIcon = document.getElementById("videoIcon")

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add("ri-pause-line")
        videoIcon.classList.remove("ri-play-line")
    }
    else {
        // Pause video
        videoFile.pause()
        // We change the icon
        videoIcon.classList.remove("ri-pause-line")
        videoIcon.classList.add("ri-play-line")
    }
}

videoButton.addEventListener("click", playPause)

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove("ri-pause-line")
    videoIcon.classList.add("ri-play-line")
}

videoFile.addEventListener("ended", finalVideo)

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById("scrollUp")
    
    if (this.scrollY >= 200) {
        scrollUp.classList.add("show-scroll")
    }
    else {
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener("scroll", scrollActive)

/* DARK LIGHT THEME */
const themeButton = document.getElementById("themeButton"),
    darkTheme = "dark-theme",
    iconTheme = "ri-sun-line"
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon")
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light",
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"
// We validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}
// Activate / desactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the theme and the current icon that the user choose
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true
}) 

sr.reveal(`.home-data, .home-social-link, .home-info,
        .discover-container, .experience-data, .experience-overlay,
        .place-card, .sponsor-content, .footer-data, .footer-rights`, {
    origin: 'top',
    interval: 100
})

sr.reveal(".about-data, .video-description, .subscribe-description", {
    origin: 'left',
})

sr.reveal('.about-img-overlay, .video-content, .subscribe-form', {
    origin: 'right',
    interval: 100
})

