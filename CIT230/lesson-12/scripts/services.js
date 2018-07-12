var table = document.querySelector('table');
var requestURL = '//dmyers6978.github.io/CIT230/lesson-12/scripts/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    showTown(townInfo);
}

function showServices(jsonObj) {
    var services = jsonObj['services'];

    for (var i = 0; i < 4; i++) {

        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        row.className = "r1";
        td1.classname = "t1";
        td2.classname = "t2";
        td3.classname = "t3";
        td4.classname = "t4";

        td1.textContent = services[i].service;
        td2.textContent = services[i].description;
        td3.textContent = services[i].price;
        td4.textContent = services[i].time;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.appendChild(row);

    }
}
