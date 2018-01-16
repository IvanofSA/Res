import {animateHover} from './modules/module.animate';


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
            // animateHover({
            //     duration: 1000,
            //     timing: function (timeFraction) {
            //         return Math.pow(timeFraction, 2);
            //     },
            //     draw: function (progress) {
            //         el.style.opacity = progress * 1 + 'px';
            //
            //         // el.style.width = progress * 125 + 'px';
            //         el.style.display = 'block';
            //
            //     }
            // });
        } else {
            if(dataFilter === itemData) {
                animateHover({
                    duration: 1000,
                    timing: function (timeFraction) {
                        return Math.pow(timeFraction, 2);
                    },
                    draw: function (progress) {
                        // el.style.width = progress * 125 + 'px';
                        el.style.display = 'block';
                        el.style.height = progress * 125 + 'px';
                    }
                })

            } else {
                console.log('no');
                animateHover({
                    duration: 1000,
                    timing: function (timeFraction) {
                        return Math.pow(timeFraction, 2);
                    },
                    draw: function (progress) {
                        console.log(progress);
                        if(progress <= 0.9) {
                            el.style.height = '0px';
                        } else {
                            el.style.display = 'none';
                        }
                        // el.style.width = progress * 125 + 'px';
                        // el.style.display = 'none';

                    }
                });
            }
        }

    });

}