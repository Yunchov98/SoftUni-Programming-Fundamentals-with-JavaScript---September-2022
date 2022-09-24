function primeNumberChecker(number) {

    const currentNumber = parseInt(number);
    let isPrime = true;

    for (let i = 2; i < currentNumber; i++) {
        if (currentNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }

}

primeNumberChecker('7')