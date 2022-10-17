 const scrollTriggerPortfolio = gsap.timeline({
    Scroll_Trigger:{
        trigger: document.getElementById('scrollTriggerPortfolio'),         start: 'top center',
         toggleActions: "play none none none",
    }
 }) ;
 scrollTriggerPortfolio.fromTo(document.querySelectorAll('.card'),{     opacity: 0,
     x: -20
 },{
     delay: 1,
    opacity: 1,
     stagger: .1,
     ease: 'quint.out',
        opacity: 1,
        x: 0
 })