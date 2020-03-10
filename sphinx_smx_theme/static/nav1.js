$(function () {
    // ======================================================================
    // ナビゲーションの開閉

    let htmlTitle = $('#html-title').text();
    let $toctree_l1_ul = $('.toctree-l1>ul');
    let $toctree_l1_a = $toctree_l1_ul.siblings('a');

    $toctree_l1_ul.each(function (index, element) {
        let $siblings_a = $(this).siblings('a');
        let branchName = htmlTitle + "_" + $siblings_a.text();
        if (sessionStorage.getItem(branchName) === "true") {
            $(this).show();
            $siblings_a.removeClass('close-folder');
        }
    });

    $toctree_l1_a.click(function (e) {
        e.preventDefault();
        $(this).siblings('ul').toggle();
        let branchName = htmlTitle + "_" + $(this).text();
        if (sessionStorage.getItem(branchName) === "true") {
            sessionStorage.removeItem(branchName);
            $(this).addClass('close-folder');
        } else {
            sessionStorage.setItem(branchName, "true");
            $(this).removeClass('close-folder');
        }
    });

    $('#folder-open').click(function () {
        $toctree_l1_ul.each(function (index, element) {
            $(this).show();
            let $siblings_a = $(this).siblings('a');
            let branchName = htmlTitle + "_" + $siblings_a.text();
            sessionStorage.setItem(branchName, "true");
            $siblings_a.removeClass('close-folder');
        });
    });

    $('#folder-close').click(function () {
        $toctree_l1_ul.each(function (index, element) {
            $(this).hide();
            let $siblings_a = $(this).siblings('a');
            let branchName = htmlTitle + "_" + $siblings_a.text();
            sessionStorage.removeItem(branchName, "true");
            $siblings_a.addClass('close-folder');
        });
    });
    // ======================================================================
});