function numberModification(number) {

    let numberAsString = String(number).split('');
    let numberCount = 0;
    let sum = 0;
    let averageSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        numberCount++;
        sum += currentNumber;
        averageSum = sum / numberCount;

        if (averageSum <= 5 && i >= numberAsString.length - 1) {
            numberAsString.push('9');
        } else if (averageSum > 5 && i === numberAsString.length - 1) {
            break;
        }
    }

    console.log(numberAsString.join(''));

}

numberModification(101);