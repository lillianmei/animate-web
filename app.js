gsap.registerPlugin(CustomEase);
gsap.registerPlugin(MotionPathPlugin);

        const item = document.querySelectorAll('.item')
        const menu = document.querySelectorAll('.menu > div')
        const header = document.querySelectorAll('.header')

        const tween = gsap.timeline()
        .to(menu,{
            duration:1,
            x:250,
            opacity:1,
            ease: "power2.out",
        })
        .to(header,{
            duration:1,
            opacity:1,
            ease: "power2.out",
        })
        .to(item, {
            duration:1,
            y(index, target) {
                return -150;
            },
            x(index, target) {
                return index + -50;
            }, 
            opacity:2,           
            scale:1,
            ease: "power2.out",
          },'-=0.1')
        
// document.querySelector(".p1").addEventListener('click',() => tween.reverse());

