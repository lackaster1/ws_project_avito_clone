$(".hover-img-wrapper").click(function () {
    var a = confirm("You must buy rubber woman. Go to Avito?");
    if (a==true) {
        window.location.href="http://avito.ru/additem"
    }
});

$(".gender-roulette").click(function () {


})

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
};

request.send();