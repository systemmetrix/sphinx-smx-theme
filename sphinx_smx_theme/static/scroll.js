$(function () {
    // ======================================================================
    // 画面遷移後、サイドバーのスクロール位置を復元する

    let htmlTitle = $('#html-title').text();
    let scrolltop_key = htmlTitle + "_sidebar_scrolltop";
    let scrolltop_val = sessionStorage.getItem(scrolltop_key);
    let $sidebar_sticky = $('.sidebar-sticky');
    $sidebar_sticky.scrollTop(scrolltop_val);

    $sidebar_sticky.scroll(function () {
        let scrolltop_val = $(this).scrollTop();
        sessionStorage.setItem(scrolltop_key, scrolltop_val.toString());
    });
    // ======================================================================
});