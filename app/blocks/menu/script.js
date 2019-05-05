var ready = $(document).ready(function () {
    $('#map').click(function () {
        var submenu = $('#submenu');
        if(submenu.hasClass('close-submenu')){
            submenu.removeClass('close-submenu');
            submenu.addClass('open-submenu');
        }
        else{
            submenu.addClass('close-submenu');
            submenu.removeClass('open-submenu');
        }
    })
});