$(function(){

    console.log(111);

});

var ready = $(document).ready(function () {

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

    var currentStep = 1;
    var stepOne = $('#step1');
    var stepTwo = $('#step2');
    var stepThree = $('#step3');
    var stepFour = $('#step4');

    var blockOne = $('#block1');
    var blockTwo = $('#block2');
    var blockThree = $('#block3');
    var blockFour = $('#block4');

    var radioCard = $('#radio-card');
    var radioCash = $('#radio-cash');
    var radioNoCash = $('#radio-no-cash');
    var checkedRadio;

    var form = $('#form');

    radioCard.click(function () {
        checkedRadio = $(this).attr('id');
    });

    radioCash.click(function () {
        checkedRadio = $(this).attr('id');
    });

    radioNoCash.click(function () {
        checkedRadio = $(this).attr('id');
    });

    stepOne.click(function () {
        stepOne.addClass('active');
        blockOne.addClass('visible');

        stepTwo.removeClass('active');
        blockTwo.removeClass('visible');

        stepThree.removeClass('active');
        blockThree.removeClass('visible');

        stepFour.removeClass('active');
        form.removeClass('hidden');
        blockFour.addClass('hidden');
        blockFour.removeClass('not-hidden');
    });

    stepTwo.click(function () {
        stepOne.removeClass('active');
        blockOne.removeClass('visible');

        stepTwo.addClass('active');
        blockTwo.addClass('visible');

        stepThree.removeClass('active');
        blockThree.removeClass('visible');

        stepFour.removeClass('active');
        form.removeClass('hidden');
        blockFour.addClass('hidden');
        blockFour.removeClass('not-hidden');
    });

    stepThree.click(function () {
        stepOne.removeClass('active');
        blockOne.removeClass('visible');

        stepTwo.removeClass('active');
        blockTwo.removeClass('visible');

        stepThree.addClass('active');
        blockThree.addClass('visible');
        form.removeClass('hidden');

        stepFour.removeClass('active');
        blockFour.addClass('hidden');
        blockFour.removeClass('not-hidden');
    });

    stepFour.click(function () {
        stepOne.removeClass('active');
        blockOne.removeClass('visible');

        stepTwo.removeClass('active');
        blockTwo.removeClass('visible');

        stepThree.removeClass('active');
        blockThree.removeClass('visible');

        stepFour.addClass('active');
        form.addClass('hidden');
        blockFour.addClass('not-hidden');
        blockFour.removeClass('hidden');

        $(blockFour).html(getResult());

    });

    $('#button').click(function () {
        stepOne.removeClass('active');
        blockOne.removeClass('visible');

        stepTwo.removeClass('active');
        blockTwo.removeClass('visible');

        stepThree.removeClass('active');
        blockThree.removeClass('visible');

        stepFour.addClass('active');
        form.addClass('hidden');
        blockFour.addClass('not-hidden');
        blockFour.removeClass('hidden');

        $(blockFour).html(getResult());
    });

    function getResult() {
        var result = '';

        result += 'Отправление из: <i>' + $(blockOne.find('input:text')[0]).val() + '</i>\n';
        result += 'В: <i>' + $(blockOne.find('input:text')[2]).val() + '</i>\n';
        result += 'Дата вылета: <i>' + $(blockOne.find('input:text')[1]).val() + '</i>\n';

        if(!$('#one-way').is(':checked')){
            result += 'Дата обратного пути: <i>' + $(blockOne.find('input:text')[3]).val() + '</i>\n';
        }
        result += '\n';

        result += 'Количество пассажиров\n';
        result += 'Взрослых: <i>' + $(blockTwo.find('select')[0]).val() + '</i>\n';
        result += 'Детей: <i>' + $(blockTwo.find('select')[1]).val() + '</i>\n';
        result += 'Младенцев: <i>' + $(blockTwo.find('select')[2]).val() + '</i>\n';
        result += '\n';

        result += 'Класс: <i>' + $(blockTwo.find('select')[3]).val() + '</i>\n\n';

        result += 'Способ оплаты: ';
        if(checkedRadio === 'radio-card'){
            result += '<i>Пластиковая карта</i>';
        }
        else if(checkedRadio === 'radio-cash'){
            result += '<i>Наличные</i>';
        }
        else if(checkedRadio === 'radio-no-cash'){
            result += '<i>Безналичный расчёт</i>';
        }
        else{
            result += '<i>Не выбран</i>';
        }

        return result;
    }

});
var ready = $(document).ready(function () {
    $('.banner').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
});
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