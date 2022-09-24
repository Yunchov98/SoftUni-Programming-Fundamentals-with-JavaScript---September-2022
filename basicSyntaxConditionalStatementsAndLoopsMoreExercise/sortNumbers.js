function sortNumbers(firstNumber, secondNumber, thirdNumber) {

    let newArr = [firstNumber,secondNumber,thirdNumber];
    newArr.sort(function (firstNumber, secondNumber) { return secondNumber - firstNumber });
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}

sortNumbers(2, 1, 3);