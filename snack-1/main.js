//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore

//recover HTML assets
const BikeNameEl = document.querySelector('.card-title');
const BikeWeighEl = document.querySelector('.bike_w');
const bikeImage = document.querySelector('.card-img-top');
const btnEl = document.querySelector('.btn');
const bikes = [
    {
        bikeName: 'Super mountain',
        bikeWeight: 80,
        image: 'https://momabikes.it/cdn/shop/files/8436578261987.PT01_fdc5e94f-74a6-40e5-abc2-5a39c33ff4d1_5760x.jpg?v=1713448137',
    }, {
        bikeName: 'Ultra light street',
        bikeWeight: 25,
        image: 'https://bhbikes.b-cdn.net/cache/bicis/f16223/lr805_nbb_n1.jpg',
    }, {
        bikeName: 'All round',
        bikeWeight: 35,
        image: 'https://contao4.stevensbikes.de/assets/images/0/Allround_super_flight_gent_MY18-95f19084.jpg',
    }
];

/**
 * calc the lighter bike in the array and returns it
 * @param {array} arr 
 * @returns {object} return the lighter bike in the array
 */
function getLighterBike(arr) {
    let lighterBikeNumber = arr[0].bikeWeight;
    let lighterBikeObject;
    for(let i = 1; i < arr.length; i++){
        const currentWeight = arr[i].bikeWeight;
        if(lighterBikeNumber > currentWeight){
            lighterBikeNumber = currentWeight;
            lighterBikeObject = arr[i];
        }
    }
    return lighterBikeObject;
}

console.log(getLighterBike(bikes));

btnEl.addEventListener('click', function () {
    getLighterBike(bikes);
    bikeImage.src = getLighterBike(bikes).image;
    BikeNameEl.innerHTML = getLighterBike(bikes).bikeName;
    BikeWeighEl.innerHTML = getLighterBike(bikes).bikeWeight + ' kg';
})