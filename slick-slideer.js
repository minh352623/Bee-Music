//slick slider 

$(document).ready(function () {
    $('.gallery__container').slick({
        //lập vô hạn
        infinite: true,
        //hiện ra 3 ảnh
        slidesToShow: 3,
        //mỗi lần scoll hiện ra 1 ảnh
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        // autoplay: true,
        // autoplaySpeed: 1000,
        // dots: true,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                 
                }
            }
        ],
    });
    $('.overlow-x').slick({
        //lập vô hạn
        infinite: true,
        //hiện ra 3 ảnh
        slidesToShow: 5,
        //mỗi lần scoll hiện ra 1 ảnh
        slidesToScroll: 2,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        // autoplay: true,
        // autoplaySpeed: 1000,
        // dots: true,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                 
                }
            }
        ],
    });
    $('.overlow-x1').slick({
        //lập vô hạn
        infinite: true,
        //hiện ra 3 ảnh
        slidesToShow: 2,
        //mỗi lần scoll hiện ra 1 ảnh
        slidesToScroll: 2,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 2000,
        // dots: true,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                 
                }
            }
        ],
    });
});

