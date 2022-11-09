// ANCHORS

$(document).ready(function () {
    $("a[href*='#']").on("click", function (e) {
        var anchor = $(this);
        gsap.to('html, body', {
            ease: 'quint.inOut',
            duration: 1.5,
            scrollTop: $(anchor.attr('href')).offset().top
        })

        e.preventDefault();
    });
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: document.getElementById('scrollTriggerDesign'),
        start: 'top center',
        toggleActions: "play none none none",
        // markers: true
    }
});
tl.fromTo(document.querySelectorAll('#bg, #bgBorder, #logoY, #logoM1, #logoM2, #frontend_design'), {
    // y: 200,
    opacity: 0,
}, {
    opacity: 1,
    ease: 'quint.out',
    duration: .5,
    y: 0
}).fromTo(document.querySelectorAll("#line1, #line2, #line3, #line4"), {
    opacity: 0,
    y: 20
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'sine.out'
}).fromTo(document.querySelectorAll('#tablichkaRight, #tablichkaRightText, #tablichkaLeft, #tablichkaLeftText'), {
    opacity: 0,
    x: -20
}, {
    delay: -1,
    opacity: 1,
    x: 0,
    stagger: .1,
    duration: .5,
    ease: 'back.inOut'
})
gsap.to("#text .text", {
    scrollTrigger: {
        trigger: '#text .text',
        start: 'top center',
        toggleActions: "play none none none",
        duration: .3
    },
    opacity: 1,
    y: 0
})
const scrollTrigger__text = gsap.timeline({
    scrollTrigger: {
        trigger: document.getElementById('scrollTrigger__text'),
        start: 'top center',
        toggleActions: "play none none none",
    }
})
scrollTrigger__text.fromTo(document.querySelectorAll('#text__2 ,text__2, #story, .story'), {
    opacity: 0,
    markers: true
},

    {
        stagger: .1,
        ease: 'easeOutBack',
        duration: .7,
        opacity: 1,
        y: 0,
    
        
    })
    