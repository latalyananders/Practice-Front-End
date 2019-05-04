$(document).ready(function () {

    $.datepicker.setDefaults(
        $.extend(
            $.datepicker.regional['ru']
        )
    );

    $('#date-in').datepicker({
        dateFormat: 'd M yy',
        minDate: 0
    });

    $('#date-to').datepicker({
        dateFormat: 'd M yy',
        minDate: 0
    });

    $('#select-adults').selectmenu();
    $('#select-children').selectmenu();
    $('#select-toddlers').selectmenu();
    $('#select-class').selectmenu();

    var cityIn = $('#city-in');
    var dropdownCityIn = $('#dropdown-city-in');
    var cityTo = $('#city-to');
    var dropdownCityTo = $('#dropdown-city-to');

    $('.carousel').slick({
        slidesToShow: 1,
        dots: true
        // arrows: true
    });

    cityIn.focus(function () {
        if(!dropdownCityIn.hasClass('visible')){
            dropdownCityIn.addClass('visible')
        }
    });

    cityTo.focus(function () {
        if(!dropdownCityTo.hasClass('visible')){
            dropdownCityTo.addClass('visible')
        }
    });

    cityIn.focusout(function () {
        if(dropdownCityIn.hasClass('visible')){
            dropdownCityIn.removeClass('visible')
        }
    });

    cityTo.focusout(function () {
        if(dropdownCityTo.hasClass('visible')){
            dropdownCityTo.removeClass('visible')
        }
    });

});