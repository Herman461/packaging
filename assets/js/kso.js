window.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector('.slider-kso-block__body')) {
        const ksoSlider = new Swiper('.slider-kso-block__body', {

            slidesPerView: 1,
            effect: 'fade',
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            speed: 500,
            breakpoints: {
                991.98: {
                    slidesPerView: 1,
                },

            },
        })
    }


})