$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 200) {
            $('.articlelist').css({
                position: 'fixed'
            });
            if (($('.articlelist').offset().top + $('.articlelist').height()) >= ($('.articledetail').offset().top + $('.articledetail').height())) {
                $('.articlelist').css({
                    bottom: ($(window).height() + $(document).scrollTop() - $('#footer').offset().top) + 'rem',
                    top: 'auto'
                })
            } else if ((($('.articlelist').offset().top + $('.articlelist').height()) < ($('.articledetail').offset().top + $('.articledetail').height()))) {
                $('.articlelist').css({
                    bottom: ($(window).height() + $(document).scrollTop() - $('#footer').offset().top) + 'rem',
                    top: 'auto'
                })
                if (($(window).height() + $(document).scrollTop() - $('#footer').offset().top) <= $(window).height() - $('.articlelist').height()) {
                    $('.articlelist').css({
                        bottom: 'auto',
                        top: '0'
                    })
                }
            }
        } else if ($(document).scrollTop() < 200) {
            $('.articlelist').css({
                position: 'static'
            });
        }
    });
})
