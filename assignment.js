let numbers = [0, 1, 6, 7, 2, 3, 5, 4, 9];

function answer(array) {
    let lengthOfArray = array.length;
    let expectedSum = lengthOfArray * (lengthOfArray + 1) / 2;
    let actualSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let answer = expectedSum - actualSum;
    return answer;
}

let my_answer = answer(numbers);

console.log(my_answer);