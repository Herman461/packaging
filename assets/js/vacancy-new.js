window.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.vacancy-gallery__slider')) {
        new Swiper(document.querySelector('.vacancy-gallery__slider'), {
            spaceBetween: 15,
            slidesPerView: 1.2,
            speed: 800,
            breakpoints: {
                991.98: {
                    spaceBetween: 25,
                },
                567.98: {
                    slidesPerView: 2,
                }
            },
            navigation: {
                nextEl: document.querySelector('.vacancy-gallery__button_next'),
                prevEl: document.querySelector('.vacancy-gallery__button_prev')
            },
        })
    }

    if (document.querySelector('.vacancy-join-us__slider')) {
        new Swiper(document.querySelector('.vacancy-join-us__slider'), {
            spaceBetween: 15,
            slidesPerView: 1,
            speed: 800,
            loop: true,
            breakpoints: {
                991.98: {
                    spaceBetween: 25,
                },
            },
            navigation: {
                nextEl: document.querySelector('.vacancy-join-us__button_next'),
                prevEl: document.querySelector('.vacancy-join-us__button_prev')
            },
        })
    }

    if (document.querySelector('.vacancy-steps__slider')) {
        const sliderEl = document.querySelector('.vacancy-steps__slider')

        const vacancyStepsSlider = new Swiper(sliderEl, {
            spaceBetween: 24,
            loop: true,
            slidesPerView: 1,
            speed: 800,
            autoHeight: true,
        })


        sliderEl.addEventListener('click', function (e) {
            if (e.target.closest('.slide-vacancy-steps__button_next')) {
                vacancyStepsSlider.slideNext()
            }

            if (e.target.closest('.slide-vacancy-steps__button_prev')) {
                vacancyStepsSlider.slidePrev()
            }
        })
    }
})


