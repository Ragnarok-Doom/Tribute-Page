// cursor
let cursor = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        cursor.classList.add("active")
    }else{
        cursor.classList.remove("active")
    }
})

// Cursor Circle
let cursorCircle = document.querySelector(".cursor-circle")
let lk = document.querySelectorAll("nav h4")

document.addEventListener("mousemove", e => {
    cursorCircle.style.top = e.y + 'px'
    cursorCircle.style.left = e.x + 'px'
})

lk.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursorCircle.style.scale = 3
    })
    item.addEventListener("mouseleave", () => {
        cursorCircle.style.scale = 1
    })
})


// menubar
let navIcon = document.querySelector(".nav-icon")
let closeBtn = document.querySelector(".close")
let navBar = document.querySelector(".navbarr")
let navh = document.querySelectorAll(".rnd")

navIcon.addEventListener("click", () => {
    navBar.style.right = '0'
})
closeBtn.addEventListener("click", () => {
    navBar.style.right = '-100%'
})
navh.forEach(item => {
    item.addEventListener("click", () => {
        navBar.style.right = '-100%'
    })
})


// GSAP

// landing
gsap.from("header", {
    duration: 1,
    y: '-100%',
})
gsap.from(".king,.heading h1", {
    duration: 2,
    x: '-100%',
    opacity: 0,
})
gsap.from(".heading p", {
    duration: 2,
    opacity: 0,
    y: '100vw'
})
gsap.from(".landing-page img", {
    duration: 2,
    x: '100%'
})
// short desc
gsap.from(".short-desc .item", {
    duration: 1,
    y: '100%',
    stagger: .5,
    scale: .3,
    scrollTrigger: {
        trigger: ".short-desc",
        scroller: "body",
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1,
    }
})
// about us
gsap.from(".about-us-img", {
    duration: 1,
    x: '-100%',
    opacity: 0,
    scale: .3,
    scrollTrigger: {
        trigger: '.about-us-img',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".about-us-content", {
    duration: 1,
    x: '100%',
    opacity: 0,
    scale: .3,
    scrollTrigger: {
        trigger: '.about-us-content',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".about-us-second p", {
    duration: 1,
    y: '5%',
    opacity: 0,
    scale: .3,
    // stagger: 1,
    scrollTrigger: {
        trigger: '.about-us-second p',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".achivements-content", {
    duration: 1,
    x: '-100%',
    opacity: 0,
    scale: .3,
    scrollTrigger: {
        trigger: '.achivements-content',
        scroller: 'body',
        start: 'top 130%',
        end: 'top 100%',
        scrub: 1,
    }
})
gsap.from(".achivements-img", {
    duration: 1,
    x: '100%',
    opacity: 0,
    scale: .3,
    scrollTrigger: {
        trigger: '.achivements-img',
        scroller: 'body',
        start: 'top 130%',
        end: 'top 100%',
        scrub: 1,
    }
})
gsap.from(".movie-title, .first-hr, .second-hr", {
    x: '120%',
    stagger: 1,
    scrollTrigger: {
        trigger: '.movie-title',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 2,
    }
})
gsap.from(".image-container", {
    y: '100%',
    scale: .3,
    scrollTrigger: {
        trigger: '.image-container',
        scroller: 'body',
        start: 'top 97%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".foundation img", {
    x: '-100%',
    scale: .3,
    scrollTrigger: {
        trigger: '.foundation img',
        scroller: 'body',
        start: 'top 97%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".inner-foundation", {
    y: '100%',
    scale: .3,
    scrollTrigger: {
        trigger: '.foundation img',
        scroller: 'body',
        start: 'top 97%',
        end: 'top 95%',
        scrub: 1,
    }
})
gsap.from(".foundation-logo img", {
    scale: .3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.foundation-logo img',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 1,
    }
})
gsap.from(".tribute-title", {
    scale: .3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.tribute-title',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 1,
    }
})
gsap.from(".tribute-video", {
    scale: .3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.tribute-video',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 85%',
        scrub: 1,
    }
})
gsap.from(".tribute-video-second", {
    y: '30%',
    scale: .3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.tribute-video-second',
        scroller: 'body',
        start: 'top 1100%',
        end: 'top 100%',
        scrub: 1,
    }
})
gsap.from(".cynthia", {
    y: '30%',
    scale: .3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.cynthia',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 98%',
        scrub: 1,
    }
})
gsap.from(".banner img", {
    opacity: 0,
    scale: .3,
    scrollTrigger: {
        trigger: '.banner img',
        scroller: 'body',
        start: 'top 120%',
        end: 'top 115%',
        scrub: 1,
    }
})
