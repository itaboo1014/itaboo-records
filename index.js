$(function() {
    var h = $(window).height();

    $('#wrap').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(window).load(function() { //全ての読み込みが完了したら実行
    $('html,body').animate({ scrollTop: 0 }, '1');
    $('#loader-bg').delay(1800).fadeOut(1700);
    $('#loader').delay(1200).fadeOut(600);
    $('#wrap').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
$(function() {
    setTimeout('stopload()', 10000);
});

function stopload() {
    $('#wrap').css('display', 'block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
}



$(function() {

    //ヘッダーロゴをクリックするとメイン画面にスクロールする
    $('.header-logo').click(function() {
        $("html,body").animate({ scrollTop: $('.greeting-text').offset().top });
    });

    //スクロールボタンをクリックするとメイン画面にスクロールする
    $('.scroll-btn').click(function() {
        $("html,body").animate({ scrollTop: $('.greeting-text').offset().top });
    });

    //各種ヘッダーボタンをクリックするとその画面までスクロールする
    $('.header-home-btn').click(function() {
        $("html,body").animate({ scrollTop: $('.greeting-text').offset().top });
    });
    //トップのblank画面要素をdisplay: nonne;にする。
    //各種ヘッダーボタンをクリックするとその画面までスクロールする
    $('.header-production-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('.main-production').offset().top });
    });
    $('.header-engineer-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('.main-engineer').offset().top });
    });
    $('.header-systems-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('.main-systems').offset().top });
    });
    $('.header-fee-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('.main-fee').offset().top });
    });
    $('.header-contact-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('.main-contact').offset().top });
    });
    $('.header-sns-btn').click(function() {
        $('.main-home-blank').addClass('main-home-blank-out');
        $("html,body").animate({ scrollTop: $('#footer').offset().top });
    });

    //スマホのjs処理
    $('.header-menu-btn').click(function() {
        if ($(this).hasClass('header-menu-btn-active')) {
            $(this).removeClass('header-menu-btn-active');
            $('.main-menu-box').slideUp();
            $(this).html('<span class="fa fa-bars"></span>');
        } else {
            $(this).addClass('header-menu-btn-active');
            $('.main-menu-box').slideDown();
            $(this).html('<span class="fa fa-times"></span>');
        }
    });
});