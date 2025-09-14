   document.addEventListener('DOMContentLoaded', function() {
            const swiper = new Swiper('.swiper', {
                // Configurações do Swiper
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    // quando a largura da janela é >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // quando a largura da janela é >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                    1400:{
                        slidesPerView: 3
                    }
                }
            });
        });