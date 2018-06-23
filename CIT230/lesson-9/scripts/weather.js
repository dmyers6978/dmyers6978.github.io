var container = document.querySelector('div');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    showTown(townInfo);
}

function showTown(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < 4; i++) {
        if(i == 2){
            continue;
        }
        var mySection = document.createElement('section');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var picture = document.createElement('img');

        mySection.className = 'item';

        myH2.textContent = towns[i].name;
        myH2.setAttribute("id", towns[i].name)
        myPara1.textContent = towns[i].motto;
        myPara2.textContent = 'Population ' + towns[i].currentPopulation;

        if (myH2.innerHTML == "Franklin"){
            picture.setAttribute("src", "images/small.jpg");
            picture.setAttribute("alt", "Franklin");
        }
        else if(myH2.innerHTML == "Greenville"){
            picture.setAttribute("src", "images/small.jpg");
            picture.setAttribute("alt", "Greenville");
        }
        else if(myH2.innerHTML == "Springfield"){
            picture.setAttribute("src", "images/small.jpg");
            picture.setAttribute("alt", "Springfield");
        }

        mySection.appendChild(myH2);
        mySection.appendChild(myPara1);
        mySection.appendChild(myPara2);
        mySection.appendChild(myPara3);
        mySection.appendChild(myPara4);
        mySection.appendChild(picture);

        container.appendChild(mySection);
    }

//    if (document.getElementById("Franklin").innerHTML == 'Franklin'){
//    var weatherObject = new XMLHttpRequest();
//    weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=7a2dada82654af61dc86f112a58d93e1&units=imperial', true);
//    weatherObject.send();
//    weatherObject.onload = function () {
//        var weatherInfo = JSON.parse(weatherObject.responseText);
//        console.log(weatherInfo);
//
//    myPara3.textContent = 'Current Temp: ' + weatherInfo.main.temp;
//    myPara4.textContent = 'Current Wind Speed: ' + weatherInfo.wind.speed;
//
//    }
//    }
//   if (myH2.innerHTML == "Greenville"){
//        var weatherObject = new XMLHttpRequest();
//        weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=24601,us&appid=7a2dada82654af61dc86f112a58d93e1&units=imperial', true);
//        weatherObject.send();
//        weatherObject.onload = function () {
//            var weatherInfo = JSON.parse(weatherObject.responseText);
//            console.log(weatherInfo);
//
//            myPara3.textContent = 'Current Temp: ' + weatherInfo.main.temp;
//            myPara4.textContent = 'Current Wind Speed: ' + weatherInfo.wind.speed;
//
//        }
//    }
//    if(myH2.innerHTML == "Springfield"){
//        var weatherObject = new XMLHttpRequest();
//        weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=97403,us&appid=7a2dada82654af61dc86f112a58d93e1&units=imperial', true);
//        weatherObject.send();
//        weatherObject.onload = function () {
//            var weatherInfo = JSON.parse(weatherObject.responseText);
//            console.log(weatherInfo);
//
//            myPara3.textContent = 'Current Temp: ' + weatherInfo.main.temp;
//            myPara4.textContent = 'Current Wind Speed: ' + weatherInfo.wind.speed;
//
//        }
//    }
}
