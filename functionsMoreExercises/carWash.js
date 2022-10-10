function carWash(array) {

    let arrayLength = array.length;
    let value = 0;

    for (let i = 0; i < arrayLength; i++) {
        let command = array[i];
        switch (command) {
            case 'soap': value += 10; break;
            case 'water': value *= 1.20; break;
            case 'vacuum cleaner': value *= 1.25; break;
            case 'mud': value *= 0.90; break;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);