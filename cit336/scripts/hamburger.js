function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className = "responsive";
    } else if (x.className === "responsive") {
        x.className = "topnav";
    }
}
