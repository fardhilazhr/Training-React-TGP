// PURE FUNCTION
// named function
function add(a: number, b: number) {
    return a + b;
}

// anonymous function
const tambahAnonymous = function (a: number, b: number) {
    return a + b;
};

// arrow function
const tambahArrow = (a: number, b: number) => {
    return a + b;
};

// single line function
const tambahSingleLine = (a: number, b: number) => a + b;

// HIGHER ORDER FUNCTION

let r = add(1, 2);
console.log(r);
