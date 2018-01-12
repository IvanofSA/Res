let menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    if (target.classList.contains('burger__icon')) {
        this.classList.toggle('open');
    }
});