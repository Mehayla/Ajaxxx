"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (res) => {
        $('#fortune-text').html(res);
    });
}

$('#get-fortune-button').on('click', showFortune);
    

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    $.get(url,formData,(res) => {

        $('#weather-info').html(`${res.forecast}`);

    });
}

$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    
    const formInputs = {
        'melon_type':$('#melon-type-field').val(),
        'qty':$('#qty-field').val()
    };

    $.post('/order-melons.json', formInputs, (res) => {
        if (res.code === 'ERROR') {
            $('#order-status').addClass('order-error');
        }
        $('#order-status').html(`${res.code} and ${res.msg}`); 

    });
}

$("#order-form").on('submit', orderMelons);