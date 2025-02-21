//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore

//recover HTML assets
const BikeNameEl = document.querySelector('.card-title');
const BikeWeighEl = document.querySelector('.bike_w');
const bikes = [
    {
        bikeName: 'super mountain',
        bikeWeight: 80,
    }, {
        bikeName: 'ulta light street',
        bikeWeight: 20,
    }, {
        bikeName: 'all round',
        bikeWeight: 35,
    }
];

/**
 * 
 * @param {array} arr 
 * @returns {object}
 */
function getLighterBike(arr) {
    let lighterBike;
    for(let i = 0; i < arr.length; i++){
        const currentWeight = arr[i].bikeWeight;
        for(let j = i + 1; j < arr.length; i++){
            const confontWeight = arr[j].bikeWeight;
            if(currentWeight < confontWeight){
                lighterBike = currentWeight;
            };
        };
    };
    return lighterBike;
};

console.log(getLighterBike(bikes));
