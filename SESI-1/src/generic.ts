function echo<T>(value: T) {
    return value;
}

// const result = echo<number>(1);
// console.log(result);

// dengan array
const result = echo<number[]>([1]);
// console.log(result);

function getFirstElemet<T>(array: T[]) {
    return array[0];
}

const firstElement = getFirstElemet<number>([1, 2, 3]);
const firstString = getFirstElemet<string>(["a", "b", "c"]);

// function getLength(value: string | any[]) {
//     return value.length;
// }

// Generic w/ constraint
function getLength<T extends { length: number }>(value: T) {
    return value.length;
}

// console.log(getLength("abc"));
console.log(getLength<number[]>([1, 2, 3]));

function setProductPrice<T, P>(product: T, price: P) {
    return [product, price];
}

type Product = {
    name: string;
    color: string;
};

const r1 = setProductPrice<Product, string>(
    { name: "Sepatu", color: "ijo" },
    "Rp. 100_000"
);
console.log(r1);

const r2 = setProductPrice<string, number>("Mangga", 20_000);
console.log(r2);
