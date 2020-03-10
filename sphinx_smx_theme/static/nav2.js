$(function () {
    // ======================================================================
    // ナビゲーションの開閉

    let htmlTitle = $('#html-title').text();
    let $toctree_l2_ul = $('.toctree-l2>ul');
    let $toctree_l2_a = $toctree_l2_ul.siblings('a');

    $toctree_l2_ul.each(function (index, element) {
        let $siblings_a = $(this).siblings('a');
        let $toctree_l1_a = $(this).parents('.toctree-l1').children('a');
        let branchName = htmlTitle + "_" + $toctree_l1_a.text() + "_" + $siblings_a.text();
        if (sessionStorage.getItem(branchName) === "true") {
            $(this).show();
            $siblings_a.removeClass('close-icon');
        }
    });

    $toctree_l2_a.click(function (e) {
        e.preventDefault();
        $(this).siblings('ul').toggle();
        let $toctree_l1_a = $(this).parents('.toctree-l1').children('a');
        let branchName = htmlTitle + "_" + $toctree_l1_a.text() + "_" + $(this).text();
        if (sessionStorage.getItem(branchName) === "true") {
            sessionStorage.removeItem(branchName);
            $(this).addClass('close-icon');
        } else {
            sessionStorage.setItem(branchName, "true");
            $(this).removeClass('close-icon');
        }
    });

    // click イベントを追加
    $('#folder-open').click(function () {
        $toctree_l2_ul.each(function (index, element) {
            $(this).show();
            let $siblings_a = $(this).siblings('a');
            let $toctree_l1_a = $(this).parents('.toctree-l1').children('a');
            let branchName = htmlTitle + "_" + $toctree_l1_a.text() + "_" + $siblings_a.text();
            sessionStorage.setItem(branchName, "true");
            $siblings_a.removeClass('close-icon');
        });
    });

    // click イベントを追加
    $('#folder-close').click(function () {
        $toctree_l2_ul.each(function (index, element) {
            $(this).hide();
            let $siblings_a = $(this).siblings('a');
            let $toctree_l1_a = $(this).parents('.toctree-l1').children('a');
            let branchName = htmlTitle + "_" + $toctree_l1_a.text() + "_" + $siblings_a.text();
            sessionStorage.removeItem(branchName);
            $siblings_a.addClass('close-icon');
        });
    });
    // ======================================================================
});