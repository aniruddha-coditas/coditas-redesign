var coditas = {};

var clArray = ["./assets/pngs/google.png", "./assets/pngs/google.png", "./assets/pngs/google.png", "./assets/pngs/google.png"];
var testimonial = document.querySelector("#testimonial-slider");
var sliderInterval = setInterval(function () { }, 3000);
coditas.attachClients = function (clientsArray) {
    for (i = 0; i < 4; i++) {
        var img = document.createElement("img");
        img.setAttribute("src", clientsArray[i]);
        img.setAttribute("width", "15%");
        img.setAttribute("height", "40%")
        document.getElementById("client-main-content").appendChild(img);
    }
}

function onLoad() {
    coditas.attachClients(clArray);
    coditas.attachEvents();
    coditas.startSlider();
}

coditas.attachEvents = function () {
    var length = document.getElementsByClassName("selector-item").length;
    for (var i = 0; i < length; i++) {
        var item = document.getElementsByClassName("selector-item")[i];
        item.addEventListener('click', coditas.changeSelected);
    }
}

coditas.changeSelected = function (event) {
    var siblings = this.siblings();
    for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove("selected");
    }
    this.classList.add("selected");
}


coditas.startSlider = function () {
    var width = screen.width;

    var slides = document.getElementsByClassName("slide");
    var length = slides.length;
    var currentSlideIndex = Math.ceil(length / 2);
    sliderInterval = setInterval(function () {
        if (currentSlideIndex === (length - 1)) {
            currentSlideIndex = 0;
        } else {
            currentSlideIndex++;
        }
        var translateX = currentSlideIndex * width;
        for (var i = 0; i < length; i++) {
            slides[i].style.transform = "translateX(-" + (translateX) + "px)"
        }
    }, 3000);
}
