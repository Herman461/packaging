const delay = 400

window.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.format-ways__slider')) {
        const formatWaysSlider = new Swiper('.format-ways__slider', {
            spaceBetween: 16,
            slidesPerView: 6,
            loop: true,
            speed: 800,
            breakpoints: {

            },
            navigation: {
                nextEl: '.format-ways__button-next',
                prevEl: '.format-ways__button-prev'
            },
        })

    }
    if (document.querySelector('.package-more__slider')) {
        const packageMoreSlider = new Swiper('.package-more__slider', {
            spaceBetween: 16,
            slidesPerView: 7,
            loop: true,
            speed: 800,
            breakpoints: {

            },
            navigation: {
                nextEl: '.package-more__button-next',
                prevEl: '.package-more__button-prev'
            },
        })

    }
    const formatSliders = document.querySelectorAll('.slider-product-format__items')
    if (formatSliders.length > 0) {
        for (let index = 0; index < formatSliders.length; index++) {
            const slider = formatSliders[index]

            if (slider.classList.contains('slider-product-format__items_child')) {
                const sliderEl = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 6,
                    loop: true,
                    speed: 800,
                    breakpoints: {

                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                })
            } else if (slider.classList.contains('slider-product-format__items_wine')) {
                const sliderEl = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 3,
                    loop: true,
                    speed: 800,
                    breakpoints: {

                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                })
            }
            else {
                const sliderEl = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 5,
                    loop: true,
                    speed: 800,
                    breakpoints: {

                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                })
            }

        }
    }

    // Меню

    // const menu = document.querySelector('.header__menu')
    // const header = document.querySelector('.header')
    // let lock = false
    // const burger = document.querySelector('.header__burger')
    //
    // burger.addEventListener('click', function() {
    //
    //     if (lock) return
    //
    //     lock = true
    //
    //     toggleMenu()
    //
    //     setTimeout(() => {
    //         lock = false
    //     }, delay)
    // })
    //
    // function toggleMenu() {
    //     burger.classList.toggle('active')
    //     menu.classList.toggle('active')
    //     header.classList.toggle('active')
    //     lockBody()
    // }


    function lockBody() {
        const scrollWidth = window.innerWidth - document.body.clientWidth

        document.body.classList.toggle('lock')

        document.body.style.paddingRight = scrollWidth + 'px'
    }

    // header.addEventListener('click', function(e) {
    //     if (
    //         document.querySelector('.header__menu.active')
    //         && !e.target.closest('.header__burger')
    //     ) {
    //         toggleMenu()
    //     }
    // })

    // if (document.querySelector('.banner-page__body')) {
    //     const bannerSlider = new Swiper('.banner-page__body', {
    //         spaceBetween: 16,
    //         slidesPerView: 1,
    //         centeredSlides: true,
    //         speed: 1000,
    //         effect: 'fade',
    //         fadeEffect: { crossFade: true },
    //         loop: true,
    //         autoplay: {
    //             delay: 2000,
    //         },
    //         breakpoints: {
    //             767.98: {
    //                 slidesPerGroup: 4,
    //
    //             },
    //             575.98: {
    //                 slidesPerGroup: 3,
    //             }
    //         },
    //
    //         navigation: {
    //             nextEl: '.banner-page__button-next',
    //             prevEl: '.banner-page__button-prev'
    //         },
    //         pagination: {
    //             el: ".banner-page__dots",
    //             clickable: true,
    //         },
    //     })
    //
    // }


    // const baseSliders = document.querySelectorAll('.base-slider__body')
    //
    // if (baseSliders.length > 0) {
    //     for (let index = 0; index < baseSliders.length; index++) {
    //         const slider = baseSliders[index]
    //
    //         new Swiper(slider, {
    //             spaceBetween: 16,
    //             slidesPerView: 1.2,
    //
    //             speed: 800,
    //
    //
    //             breakpoints: {
    //                 991.98: {
    //                     spaceBetween: 16,
    //                     slidesPerView: 4,
    //
    //                 },
    //                 767.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 3,
    //                 },
    //                 567.98: {
    //                     spaceBetween: 16,
    //                     slidesPerGroup: 2.2,
    //                 }
    //             },
    //
    //             navigation: {
    //                 nextEl: slider.closest('.base-slider').querySelector('.base-slider__button-prev'),
    //                 prevEl: slider.closest('.base-slider').querySelector('.base-slider__button-next')
    //             },
    //
    //         })
    //         // wi
    //     }
    // }

    //
    //
    // fixHeader()
    // function fixHeader() {
    //     if (document.body.scrollTop > 10 && !header.classList.contains('fix')) {
    //         header.classList.add('fix')
    //     }
    //     if (document.body.scrollTop <= 0 && header.classList.contains('fix')) {
    //         header.classList.remove('fix')
    //     }
    // }

    // window.addEventListener('scroll', fixHeader)

})
