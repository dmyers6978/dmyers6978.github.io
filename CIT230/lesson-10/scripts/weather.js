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
        var myLink = document.createElement('a');
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


        if(myH2.innerHTML == "Franklin"){
            myLink.setAttribute("href", "franklin.html")
            myLink.setAttribute("id", "franklin_link")
        }
        else if(myH2.innerHTML == "Greenville"){
            myLink.setAttribute("href", "greenville.html")
            myLink.setAttribute("id", "greenville_link")
        }
        else if(myH2.innerHTML == "Springfield"){
            myLink.setAttribute("href", "springfield.html")
            myLink.setAttribute("id", "springfield_link")
        }

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

        myLink.appendChild(mySection);

        container.appendChild(myLink);

    }
}
