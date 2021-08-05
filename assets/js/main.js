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



























