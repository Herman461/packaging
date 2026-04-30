
window.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.quiz__slider', {
        allowTouchMove: false,
        allowSlidePrev: false,
        slidesPerView: 1,
        effect: 'fade',
        speed: 500,
        autoHeight: true,
        breakpoints: {
            767.98: {
                autoHeight: false
            }
        },
        fadeEffect: {
            crossFade: true,
        },
    });

    const currentEl = document.querySelector('.quiz__current');
    const totalEl = document.querySelector('.quiz__total');
    const progressBar = document.querySelector('.quiz__progress span');

    const totalSlides = swiper.slides.length;
    totalEl.textContent = String(totalSlides).padStart(2, '0');

    totalEl.textContent = String(swiper.slides.length).padStart(2, '0');

    function updateQuizProgress() {
        const currentSlide = swiper.realIndex + 1;

        currentEl.textContent = String(currentSlide).padStart(2, '0');

        const progressPercent = (currentSlide / totalSlides) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    updateQuizProgress();

    swiper.on('slideChange', updateQuizProgress);

    document.querySelectorAll('.slide-quiz__option input[type="radio"]').forEach(function(radio) {
        radio.addEventListener('change', () => {
            if (swiper.isEnd) {
                document.querySelector('#open-result-modal-trigger').click()
            } else {
                swiper.slideNext();
            }
        });
    });
})
