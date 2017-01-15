// banner
    var swipers= new Swiper('.banner', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
// main1 
    var main1 = new Swiper('.news', {
        direction: 'vertical',
        slidesPerView:1,
        // paginationClickable: true,
        spaceBetween: 30,
        autoplay:3500,
        // mousewheelControl: true,
        autoplayDisableOnInteraction: false
    });