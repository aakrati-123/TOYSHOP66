
function pageOneAnimation(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            start:"top -15%",
            end:"top -40%",
            // markers:true,
            scrub:1
        }
    })

    gsap.from("#page1 h1",{
        top:"-5%",
        duration:5,
        opacity:0
    })

    gsap.from("#page1 button",{
        left:"-5%",
        duration:5,
        opacity:0,
    })
}

gsap.to("#page2",{
  background: "linear-gradient(to top, #D6DBE4,#F9FFFF, #DBE0E7)",
  duration:5,
scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      start:"top 80%",
      end:"top 60%",
      // end:"top -90%",
      // markers:true,
      scrub:2
  }
})

gsap.to("video",{
  opacity:0,
  duration:10,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 80%",
    end:"top -2%",
    // end:"top -90%",
    // markers:true,
    scrub:2
}
})


gsap.from("#page2 h2",{
    top:"-15%",
    opacity:0,
    duration:5,
  scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".age",{
    top:"5%",
    opacity:0,
    duration:5,
  scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".category",{
    top:"5%",
    opacity:0,
    duration:5,
  scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 30%",
        end:"top 90%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".text h1",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#one",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})


gsap.from("#two",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 50%",
        end:"top 80%",
        // markers:true,
        scrub:2
    }
})


gsap.from("#three",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 40%",
        end:"top 55%",
        // markers:true,
        scrub:2
    }
})


gsap.from(".video video",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})
gsap.from(".cards",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".topre h1",{
    left:"-20%",
    opacity:0,
    duration:1,
  scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#wrap",{
    opacity:0,
    duration:3,
  scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 65%",
        end:"top 48%",
        // markers:true,
        scrub:2
    }
})


gsap.from(".icons i",{
    opacity:0,
    duration:3,
  scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 28%",
        end:"top 80%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#last h5",{
    top:"0%",
    opacity:0,
    duration:3,
  scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 20%",
        end:"top 80%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#last h6",{
    opacity:0,
    duration:3,
  scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 18%",
        end:"top 80%",
        // markers:true,
        scrub:2
    }
})

document.querySelectorAll(".card").forEach((elm)=>{

    VanillaTilt.init(elm, {
      max: 10,
      transition: true,
      glare: true,
	 reset: true,
     "max-glare": 0.45,
     "glare-prerender": false,
      speed: 1000,
      perspective: 700
    });
})

document.querySelectorAll(".cards").forEach((elm)=>{
  VanillaTilt.init(elm, {
    max: 15,
    transition: true,
    glare: true,
 reset: true,
   "max-glare": 0.45,
   "glare-prerender": false,
    speed: 1000,
    perspective: 700
  });
})

document.querySelectorAll(".image").forEach((elm)=>{
  VanillaTilt.init(elm, {
    max: 8,
    transition: true,
    glare: true,
 reset: true,
   "max-glare": 0.45,
   "glare-prerender": false,
    speed: 2000,
    perspective: 500
  });
})

document.querySelectorAll("#button").forEach((elm)=>{

    VanillaTilt.init(elm, {
      max: 10,
      speed: 1000,
      perspective: 700
    });
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

pageOneAnimation();



  