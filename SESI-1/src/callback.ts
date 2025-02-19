const number = [1, 2, 3, 4, 5];

// function mapper(n: number) {
//     return n * 10;
// }

// cara kerjanya seperti foreach
// const kali10 = number.map(function mapper (n: number) {
//     return n * 10;
// });

// hilangkan nama fungsi
// const kali10 = number.map(function (n: number) {
//     return n * 10;
// });

// tambahkan arrow
const kali10 = number.map((n: number) => n * 10);

console.log(number);
console.log(kali10);

function isEvenNumber(n: number) {
    return n % 2 === 0;
}
// const evenNumber = number.filter((n) => n % 2 === 0);
// const evenNumber = number.find(isEvenNumber);
// reduce
function reducer(acc: number, value: number) {
    console.log(`accumulator ${acc}, value ${value}`);
    return acc + value;
}

const sum = number.reduce(reducer, 0);
console.log(sum);
