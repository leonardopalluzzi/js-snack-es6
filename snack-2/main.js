// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        teamName: 'fiorentina',
        score: 0,
        fouls: 0,
    }, {
        teamName: 'inter',
        score: 0,
        fouls: 0,
    }, {
        teamName: 'roma',
        score: 0,
        fouls: 0,
    }, {
        teamName: 'lazio',
        score: 0,
        fouls: 0,
    }
];

/**
 * assign random number from 0 to 10 to the fouls and score properties in the objects
 * @param {array} arr 
 * @returns {array} returns the initial array with the random numbers in it
 */
function randomNumbers(arr) {
    for(let key in arr){
        arr[key].fouls = Math.floor(Math.random() * 10);
        arr[key].score = Math.floor(Math.random() * 10);
    }
    return arr;
}


/**
 * creates an array of objects with the team name and fouls properties, taken from the inital array
 * @param {array} initialArr 
 * @returns {array} returns an array of object with the team name and fouls properties
 */
function generateArray (initialArr) {
    const resultArray = [];
    for(let i = 0; i < initialArr.length; i++){
        let nameTeam = initialArr[i].teamName;
        let fouls = initialArr[i].fouls;
        resultArray[i] = ({
            nameTeam,
            fouls,
        })
    }
    return resultArray;
}

// console log final array
console.log(generateArray(randomNumbers(teams)));
