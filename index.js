function expandMenu() {
    var navbar = document.getElementById('navbar');
    console.log("click works");
    console.log(navbar.className);
    if(navbar.className === 'navbar'){
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
}