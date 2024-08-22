$(document).ready(function () {
    $(".tab_btn li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li ").eq(idx).fadeIn().siblings().fadeOut();
    });

    $(".mgnb_wrap").hide();
    $(".ham").click(function () {
        $(".mgnb_wrap").fadeIn();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });

    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });


    const video_txt_list = new Swiper('.video_txt_list', {

        autoplay: {
            delay: 8000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
            rows: 2,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                },
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                },
            },
        },
    });

    $(".class_list ul li:not(:first-child) a img:nth-child(2)").hide();
    $(".class_list ul li").click(function () {
        $(this).find("img:nth-child(2)").stop().fadeIn();
        $(this).siblings().find("img:nth-child(2)").stop().fadeOut();
    });

    $(".class_title li:nth-child(n+2)").hide();
    $(".btn1").click(function () {
        $(".open1").fadeIn();
        $(".open2 ,.open3 ,.open4 ,.open5").fadeOut();
    });
    $(".btn2").click(function () {
        $(".open2").fadeIn();
        $(".open1 ,.open3 ,.open4 ,.open5").fadeOut();
    });
    $(".btn3").click(function () {
        $(".open3").fadeIn();
        $(".open1 ,.open2 ,.open4 ,.open5").fadeOut();
    });
    $(".btn4").click(function () {
        $(".open4").fadeIn();
        $(".open1 ,.open2 ,.open3 ,.open5").fadeOut();
    });
    $(".btn5").click(function () {
        $(".open5").fadeIn();
        $(".open1 ,.open2 ,.open3 ,.open4").fadeOut();
    });

    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").hover(function () {
        $(".depth2,.depth2_bg").stop().slideToggle();
    });

    $(".tab_img li:not(:first-child)").hide();

    //tabbtn li를 클릭했을때
    //this의 index()값 가져와서 변수 idx에 할당하시오 
    //tabimg li에 eq(변수indx)에 해당하는 li는 fadein, 형제들은 fadeout하시오


});