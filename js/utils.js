

function getRandomNumber(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min;
}

function getUniqueRandomNumbers(howMany, min, max) {
    const array = [];

    while (array.length < howMany) {
        // - generare un numero random 
        const randomNumber = getRandomNumber(min, max);
        // - verificare che non sia già stato estratto
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }

    }
    return array;
}
