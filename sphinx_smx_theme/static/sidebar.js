$(function () {
    // ======================================================================
    // サイドバーにクラスをつける

    $('a.headerlink').remove();
    $('h2').addClass('pseudo-icon section-h2');

    $('.dropdown-item:first-child').addClass('icon-ja pseudo-icon');
    $('.dropdown-item:last-child').addClass('icon-en pseudo-icon');

    $('.toctree-l1 a').addClass('close-folder pseudo-icon');
    $('.toctree-l2 a').addClass('close-icon pseudo-icon');

    $('.toctree-l2 a').click(function () {
        $('.toctree-l3 a').removeClass('active');
    });

    $('.toctree-l3 a').click(function () {
        $('.toctree-l3 a').removeClass('active');
        $(this).addClass('active');
    });

    $('.current>a').addClass('current');
    $('#scrollspy a').addClass('nav-link');
    $('.toctree-l1 a.current').removeClass('close-folder');
    $('.toctree-l2 a.current').removeClass('close-icon');
    // ======================================================================
});