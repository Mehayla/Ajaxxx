"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // $.get('/adjective', (response) => {
    //   $('#adjective').text(response);
    // });

    $.get('/fortune', (evt) => {
        $('#fortune-text').html(evt);
    });
}

$('#get-fortune-button').on('click', showFortune);
    





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    $.get(url,formData,(evt) => {

        $('#weather-info').html(`${evt.forecast}`);

    });
}

$("#weather-form").on('submit', showWeather);

// alert(`Forecast for today is ${evt.forecast}.`)
        // $('#weather-info').text({evt.forecast});

// $.get('/delivery-info.json', formData, (res) => {
//     // Display response from the server
//     alert(`This will cost $${res.cost}`);
//          $('#weather-info').text(${(evt.forecast))}
//     alert(`This will arrive in ${res.days} day(s)`);
//   });


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


