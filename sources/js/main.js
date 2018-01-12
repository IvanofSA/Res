
const menuBtn = document.querySelector('.js-menu');
const doughnutData = [
    {
        value: 50,
        color:"#ffce29",
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


menuBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    if (target.classList.contains('burger__icon')) {
        this.classList.toggle('open');
    }
});


window.onload = function(){
    let ctx = document.getElementById("chart-area").getContext("2d");

    let myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive : true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        cutoutPercentage: 80,
    });

};

