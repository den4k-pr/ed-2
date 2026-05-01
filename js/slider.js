document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector(".first-swiper");
    if (!sliderEl) return;

    new Swiper(sliderEl, {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.1, // Видно один слайд і край наступного

        pagination: {
            el: ".first-slider-pagination",
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },

        navigation: {
            nextEl: ".first-slider-next",
            prevEl: ".first-slider-prev"
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector(".second-swiper");
    if (!sliderEl) return;

    new Swiper(sliderEl, {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.1, // Видно один слайд і край наступного

        pagination: {
            el: ".second-slider-pagination",
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },

        navigation: {
            nextEl: ".second-slider-next",
            prevEl: ".second-slider-prev"
        }
    });
});