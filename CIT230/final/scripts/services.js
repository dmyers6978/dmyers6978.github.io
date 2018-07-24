var table = document.querySelector('table');
var requestURL = '//dmyers6978.github.io/CIT230/final/scripts/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var serviceInfo = request.response;
    showServices(serviceInfo);
}

function showServices(jsonObj) {
    var services = jsonObj['services'];

    for (var i = 0; i < services.length; i++) {

        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        if(i == 0){
            row.className = "r2"
        }
        else if(i == 1){
            row.className = "r3"
        }
        else if(i == 2){
            row.className = "r4"
        }
        td1.className = "t1";
        td2.className = "t2";
        td3.className = "t3";
        td4.className = "t4";

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
