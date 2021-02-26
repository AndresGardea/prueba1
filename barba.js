/*Barba Js*/
function pageTransition() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2});
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay:.1,});
}
function contentAnimation() {
    let tl = gsap.timeline();
    tl.from('.text-part-img', { duration: 1.5, translateY: 50, opacity: 0 });
    tl.from('.Navegacion-Secundaria', { duration: 1.6, translateY: 50, opacity: 0 });
    tl.to('.imagen', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100% )" },  "-=1.1")
}


function delay(n) {
    n = n || 800;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

$(function() {

    barba.init({

        sync: true,

        transitions: [{

            async leave(data) {

                const done = this.async();

                pageTransition();
                await delay(1300);
                done();

            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            }

        }]
    });
});


