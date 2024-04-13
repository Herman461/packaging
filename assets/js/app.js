

window.addEventListener('DOMContentLoaded', function() {
    // const animElements = document.querySelectorAll('.anim-start')
    // if (animElements.length > 0) {
    //     console.log('dsdsdsd')
    //     for (let index = 0; index < animElements.length; index++) {
    //         const animElement = animElements[index]
    //         animElement.classList.add('active')
    //     }
    // }


    const developmentSliders = document.querySelectorAll('.development-items__elements')
    if (developmentSliders.length > 0) {
        for (let index = 0; index < developmentSliders.length; index++) {
            const slider = developmentSliders[index]

            const sliderEl = new Swiper(slider, {
                spaceBetween: 16,
                slidesPerView: 1.2,

                speed: 800,
                breakpoints: {
                    991.98: {
                        slidesPerView: 4,
                    },
                    767.98: {
                        slidesPerView: 3.2,
                    },
                    460.98: {
                        slidesPerView: 2.2,
                    },

                },
                // navigation: {
                //     nextEl: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__button-next'),
                //     prevEl: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__button-prev')
                // },
                // pagination: {
                //     el: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__dots'),
                //     dynamicBullets: true,
                //     dynamicMainBullets: 4,
                //     clickable: true,
                // },
            })

        }
    }


    const contentDevelopmentSliders = document.querySelectorAll('.content-development-technology__slider')

    for (let index = 0; index < contentDevelopmentSliders.length; index++) {
        const contentDevelopmentSlider = contentDevelopmentSliders[index]
        const sliderEl = new Swiper(contentDevelopmentSlider, {

            slidesPerView: 1.5,
            speed: 800,
            breakpoints: {
                767.98: {
                    slidesPerView: 3,
                },
            },
        })
    }

    if (document.querySelectorAll('.slider-development-technology__item').length > 0) {
        const items = document.querySelectorAll('.slider-development-technology__item')

        for (let index = 0; index < items.length; index++) {
            const item = items[index]

            item.addEventListener('mouseenter', function(e) {
                if (!item.classList.contains('active')) {
                    if (item.closest('.content-development-technology__slider').querySelector('.slider-development-technology__item.active')) {

                        item.closest('.content-development-technology__slider').querySelector('.slider-development-technology__item.active').classList.remove('active')
                    }

                    item.classList.add('active')

                    let isPrev = true

                    const siblings = item.closest('.content-development-technology__slider').querySelectorAll('.slider-development-technology__item')

                    for (let j = 0; j < siblings.length; j++) {
                        const el = siblings[j]

                        if (el.classList.contains('active')) {
                            isPrev = false
                            el.classList.remove('prev')
                            el.classList.remove('next')
                            continue
                        }

                        if (isPrev) {
                            el.classList.add('prev')
                            el.classList.remove('next')
                        } else {
                            el.classList.add('next')
                            el.classList.remove('prev')
                        }

                    }

                }
            })
            item.addEventListener('click', function(e) {
                if (!item.classList.contains('active')) {
                    if (item.closest('.content-development-technology__slider').querySelector('.slider-development-technology__item.active')) {
                        item.closest('.content-development-technology__slider').querySelector('.slider-development-technology__item.active').classList.remove('active')
                    }

                    item.classList.add('active')
                }
            })
        }

    }
    if (document.querySelector('.block-package-composition__image')) {
        const elements = Array.from(document.querySelectorAll('.block-package-composition__image .cls-2'))


        const fromIndex = 1
        const item = elements.splice(fromIndex, 1)[0]
        elements.splice(elements.length, 1, item)

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index]
            const packInterval = document.querySelector('[data-pack-interval]').dataset.packInterval
            let currentIndex = 1
            const timer = setInterval(function() {
                if (elements[currentIndex]) {
                    const element = elements[currentIndex]
                    const title = element.dataset.tabTitle;
                    const category = element.dataset.tabCategory
                    if (!title) return
                    const tabContent = document.querySelectorAll(`[data-tab-content][data-tab-category="${category}"]`);
                    const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);

                    tabContent.forEach(function(el) {
                        el.classList.remove("active");
                    });

                    tabLinks.forEach(function(el) {
                        el.classList.remove("active");
                    });

                    const activeContent = document.querySelectorAll(`[data-tab-content="${title}"][data-tab-category="${category}"]`)

                    activeContent.forEach(function(el) {
                        el.classList.add('active')
                    })
                    document.querySelector(`[data-tab-content="${title}"]`).classList.add("active");

                    element.classList.add("active");

                    currentIndex++
                } else {
                    currentIndex = 0
                }
            }, packInterval)


            element.addEventListener('mouseenter', function(e) {
                if (element.classList.contains('active')) return



                const title = element.dataset.tabTitle;
                const category = element.dataset.tabCategory
                if (!title) return
                console.log(element)
                const tabContent = document.querySelectorAll(`[data-tab-content][data-tab-category="${category}"]`);
                const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);

                tabContent.forEach(function(el) {
                    el.classList.remove("active");
                });

                tabLinks.forEach(function(el) {
                    el.classList.remove("active");
                });

                const activeContent = document.querySelectorAll(`[data-tab-content="${title}"][data-tab-category="${category}"]`)

                activeContent.forEach(function(el) {
                    el.classList.add('active')
                })
                document.querySelector(`[data-tab-content="${title}"]`).classList.add("active");

                clearInterval(timer)
                element.classList.add("active");
            })
        }


    }

    if (document.querySelector('.format-ways__slider')) {
        const formatWaysSlider = new Swiper('.format-ways__slider', {
            spaceBetween: 16,
            slidesPerView: 2,

            speed: 800,
            breakpoints: {
                767.98: {
                    slidesPerView: 6,
                },
                600.98: {
                    slidesPerView: 5,
                },
                500.98: {
                    slidesPerView: 4,
                },
                430.98: {
                    slidesPerView: 3,
                }
            },
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".format-ways__dots",
                dynamicBullets: true,
                dynamicMainBullets: 4,
                clickable: true,
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
            slidesPerView: 2,
            autoplay: {
                delay: 3000,
            },
            speed: 800,
            breakpoints: {
                991.98: {
                    slidesPerView: 7,
                },
                767.98: {
                    slidesPerView: 5,
                },
                600.98: {
                    slidesPerView: 4,
                },
                460.98: {
                    slidesPerView: 3,
                },

            },
            pagination: {
                el: document.querySelector('.package-more__dots'),
                dynamicBullets: true,
                dynamicMainBullets: 4,
                clickable: true,
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
                    slidesPerView: 2,
                    autoplay: {
                        delay: 3000,
                    },
                    speed: 800,
                    breakpoints: {
                        991.98: {
                            slidesPerView: 6,
                        },
                        767.98: {
                            slidesPerView: 5,
                        },
                        600.98: {
                            slidesPerView: 4,
                        },
                        460.98: {
                            slidesPerView: 3,
                        },

                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                    pagination: {
                        el: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__dots'),
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                        clickable: true,
                    },
                })
            } else if (slider.classList.contains('slider-product-format__items_wine')) {
                const sliderEl = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 2,
                    autoplay: {
                        delay: 3000,
                    },
                    speed: 800,
                    breakpoints: {
                        460.98: {
                            slidesPerView: 3,
                        },
                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                    pagination: {
                        el: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__dots'),
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                        clickable: true,
                    },
                })
            }
            else {
                const sliderEl = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 2,
                    autoplay: {
                        delay: 3000,
                    },
                    speed: 800,
                    breakpoints: {
                        767.98: {
                            slidesPerView: 5,
                        },
                        600.98: {
                            slidesPerView: 4,
                        },
                        460.98: {
                            slidesPerView: 3,
                        },
                    },
                    pagination: {
                        el: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__dots'),
                        dynamicBullets: true,
                        dynamicMainBullets: 4,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-next'),
                        prevEl: slider.closest('.body-product-format__slider').querySelector('.slider-product-format__button-prev')
                    },
                })
            }

        }
    }


    const capSliders = document.querySelectorAll('.modal-cap__slider')
    if (capSliders.length > 0) {
        for (let index = 0; index < capSliders.length; index++) {
            const slider = capSliders[index]

            const sliderEl = new Swiper(slider, {
                spaceBetween: 15,
                slidesPerView: 2,
                autoplay: {
                    delay: 3000,
                },
                speed: 800,
                breakpoints: {
                    991.98: {
                        slidesPerView: 4,
                    },
                    460.98: {
                        slidesPerView: 3,
                    },

                },
                navigation: {
                    nextEl: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__button-next'),
                    prevEl: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__button-prev')
                },
                pagination: {
                    el: slider.closest('.modal-cap__bottom').querySelector('.modal-cap__dots'),
                    dynamicBullets: true,
                    dynamicMainBullets: 4,
                    clickable: true,
                },
            })

        }
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

    const animItems = document.querySelectorAll('.anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 10;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if (
                    pageYOffset > animItemOffset - animItemPoint &&
                    pageYOffset < animItemOffset + animItemHeight
                ) {
                    animItem.classList.add('active');
                }
            }
        }
        window.addEventListener('click', function(e) {
            if (e.target.closest('[data-tab-title]')) {
                animOnScroll()
            }
        })
        function offset(el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
        setTimeout(() => {
            animOnScroll();
        }, 400);
    }

    if (document.querySelector('.job-intro__copy')) {
        const copyUrlBtn = document.querySelector('.job-intro__copy');

        if (copyUrlBtn) {
            copyUrlBtn.addEventListener('click', function(e) {
                let tempInput = document.createElement('textarea');

                tempInput.style.fontSize = '12pt';
                tempInput.style.border = '0';
                tempInput.style.padding = '0';
                tempInput.style.margin = '0';
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                tempInput.setAttribute('readonly', '');

                tempInput.value = window.location.href;

                copyUrlBtn.parentNode.appendChild(tempInput);

                tempInput.select();
                tempInput.setSelectionRange(0, 99999);

                document.execCommand('copy');

                tempInput.parentNode.removeChild(tempInput);
                e.preventDefault()
            });
        }
    }

    if (document.querySelector('.job-factory__images')) {
        new Swiper(document.querySelector('.job-factory__images'), {
            spaceBetween: 15,
            slidesPerView: 1.5,
            speed: 800,
            loop: true,
            breakpoints: {
                767.98: {
                    slidesPerView: 3,
                },
                436.98: {
                    slidesPerView: 2,
                },
            },
            navigation: {
                nextEl: document.querySelector('.job-factory__button-next'),
                prevEl: document.querySelector('.job-factory__button-prev')
            },
        })
    }
})
