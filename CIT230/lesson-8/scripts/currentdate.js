    var currentDate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var currentDay = weekday[currentDate.getDay()];

    var toDate  = currentDate.getDate();

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var x = month[currentDate.getMonth()];

    var year = currentDate.getFullYear();

    var currentdatestring = currentDay + ", " + toDate + " " + x + " " + year;

    document.getElementById("currentdate").innerHTML = currentdatestring;
