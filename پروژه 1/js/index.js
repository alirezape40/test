function mymenu() {
    var x = document.getElementById('menu');
    if (x.className === "header-menu") {
        x.className += " show";
    } else {
        x.className = "header-menu";
    }
}