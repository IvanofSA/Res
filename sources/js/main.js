import {animateHover} from './modules/module.animate';
import {mapInit} from './modules/module.map';

const SpbCoord = {lat: 59.939095, lng: 30.315868};
const configMapArr = {
    zoom: 7,
    center: SpbCoord,
    disableDefaultUI: true,
    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]

};

mapInit(configMapArr, SpbCoord);


let menuBtn = document.querySelector('.js-menu');
menuBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    if (target.classList.contains('burger__icon')) {
        this.classList.toggle('open');
    }
});


const doughnutData = [
    {
        value: 50,
        color: "#ffce29",
        highlight: "#ffbd23",
        label: "HTML"
    },
    {
        value: 20,
        color: "#ea6a45",
        highlight: "#ff593f",
        label: "SASS"
    },
    {
        value: 30,
        color: "#5d9bd6",
        highlight: "#247ed6",
        label: "JavaScript"
    }
];

let ctx = document.getElementById("chart-area").getContext("2d");
let myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
    responsive: true,
    animation: {
        animateScale: true,
        animateRotate: true
    },
    cutoutPercentage: 80,
});


let itemWork = document.querySelectorAll('.js-animate');
for (let i = 0; i < itemWork.length; i++) {
    itemWork[i].addEventListener('mouseenter', function (e) {
        e.preventDefault();
        let itemLink = this.querySelector('.preview__link');

        animateHover({
            duration: 800,
            timing: function (timeFraction) {
                return timeFraction;
            },
            draw: function (progress) {
                let specNum = progress * -260;
                itemLink.style.left = -260 - specNum + 'px';
            }
        });

    });

    itemWork[i].addEventListener('mouseleave', function (e) {
        e.preventDefault();
        let itemLink = this.querySelector('.preview__link');

        animateHover({
            duration: 1000,
            timing: function (timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            draw: function (progress) {
                itemLink.style.left = progress * 260 + 'px';
            }
        });

    });
}


let filterBtn = document.querySelector('.js-filter');
let previewItems = document.querySelectorAll('.js-animate');
filterBtn.addEventListener('click',  (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('filter__link')) {
        filterPreview(target, previewItems);
    }
});


function filterPreview(btn, arr) {

    let dataFilter = btn.getAttribute('data-filter');

    arr.forEach((el, i, arr) => {

        let itemData = el.getAttribute('data-item');
        if(dataFilter === 'all') {
            el.style.display = 'block';
        } else {
            if(dataFilter === itemData) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        }

    });
}

