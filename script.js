
gsap.to("#page1 #box",{
    scale:1,
    rotate:360,
    delay:1,
    duration:2,
})
gsap.from("#page2 #box",{
    scale:1.5,
    rotate:360,
    delay:1,
    duration:5,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
        
    }
})

gsap.from("#page3 #box",{
    scale:2,
    rotate:360,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true
        
    }
})

gsap.to("#page3 h2",{
    transform:"translateX(-150%)",
    scrollTrigger{
        trigger:"#page3",
        scroll:"body",
        start:"top 0%",
        end:"top  -100%",
        scrub:2,
        pin:true

    }
})