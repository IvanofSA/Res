export const mapInit = (config, coord) => {
    window.initMap = function () {
        let map = new google.maps.Map(document.getElementById('map'), config);
        let marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    };
};