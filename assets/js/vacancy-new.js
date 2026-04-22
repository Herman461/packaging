window.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.vacancy-gallery__slider')) {
        new Swiper(document.querySelector('.vacancy-gallery__slider'), {
            spaceBetween: 15,
            slidesPerView: 1.25,
            speed: 800,
            loop: true,
            breakpoints: {
                991.98: {
                    spaceBetween: 25,
                    // slidesPerView: 2,
                    slidesPerView: 1.89,
                },
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);

            if (!targetEl) return;

            e.preventDefault();

            const isMobile = window.innerWidth <= 991;
            const header = document.querySelector('.header');
            const headerHeight = isMobile && header ? header.offsetHeight : 0;

            const targetPosition =
                targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    const header = document.querySelector('.vacancy-header')

    fixHeader()
    function fixHeader() {
        if (document.documentElement.scrollTop > 10 && !header.classList.contains('fix')) {
            header.classList.add('fix')
        }
        if (document.documentElement.scrollTop <= 0 && header.classList.contains('fix')) {
            header.classList.remove('fix')
        }
    }

    window.addEventListener('scroll', fixHeader)


    window.addEventListener('click', function (e) {
        if (e.target.closest('.vacancy-inspiration__action')) {
            const videoButton = e.target.closest('.vacancy-inspiration__action')
            videoButton.classList.add('hidden')
            videoButton.closest('.vacancy-inspiration__video').classList.add('active')
            videoButton.closest('.vacancy-inspiration__video').querySelector('video').play()
        }
    })
})


