$(function () {
    var current = location.pathname;
    $('.navbar-nav .nav-link').each(function () {
        var $this = $(this);
        if ($this.attr('href') == current) {
            $this.addClass('active');
        }
    })
})