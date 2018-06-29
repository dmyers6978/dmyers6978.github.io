var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=97403,us&appid=7a2dada82654af61dc86f112a58d93e1&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('speed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('low').innerHTML = weatherInfo.main.temp_min;

}

var container = document.getElementById('town_article')
var article = new XMLHttpRequest();
article.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
article.send();
article.onload = function () {
    var townInfo = JSON.parse(article.responseText);
    console.log(townInfo);
    for (var i = 0; i < 4; i++) {
        var myPara = document.createElement('p');

        myPara.setAttribute('class', 'town-article');
        myPara.textContent = townInfo.towns["3"].events[i];

        container.appendChild(myPara);
    }
}

var t = weatherInfo.main.temp;
var s = weatherInfo.wind.speed;
var windchill = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
document.getElementById("windchill").innerHTML = windchill;
