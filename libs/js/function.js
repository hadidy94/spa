$(window).load(function() {
    // $(document).ready(function () {
    //   $(".dropdown").hover(
    //     function () {
    //       $(this)
    //         .find(".dropdown-menu")
    //         .stop(true, true)
    //         .delay(50)
    //         .slideDown(100);
    //     },
    //     function () {
    //       $(this)
    //         .find(".dropdown-menu")
    //         .stop(true, true)
    //         .delay(50)
    //         .slideUp(100);
    //     }
    //   );
    // });

    (function($) {
        $(document).ready(function() {
            $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        });
    })(jQuery);


    $(".event-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left fa-lg'></i>",
            "<i class='fa fa-angle-right fa-lg'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    $(".team-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left fa-lg'></i>",
            "<i class='fa fa-angle-right fa-lg'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $(".news-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left fa-lg'></i>",
            "<i class='fa fa-angle-right fa-lg'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



});