function englishNameOfTheLastDigit(number) {

    let numberAsString = number.toString();
    let lastNumber = numberAsString[numberAsString.length - 1];
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(numbers[lastNumber]);

}

englishNameOfTheLastDigit(542);