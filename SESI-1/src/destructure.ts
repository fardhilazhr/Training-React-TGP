import { Person } from "./types";

//// DESTRUCTURE ARRAY
const numbers = [1, 2, 3, 4];
// const angkaPertama = number[0];
// const angkaKedua = number[1];
const [angkaPertama, angkaKedua, , keempat] = numbers;

console.log(angkaPertama);
console.log(angkaKedua);
console.log(keempat);

// menggunakan rest operator
const [pertama, ...sisa] = numbers;
console.log(pertama, sisa);

//// DESTRUCTURE OBJECT
const person1: Person = {
    name: "John",
    age: 30,
    status: "married",
    address: {
        street: "Jalan Raya",
        number: 123,
        zipcode: 12345,
    },
};

// --tanpa destructure
// const personName = person1.personName;
// const personAge = person1.personAge;
// const maritalStatus = person1.personStatus;

// --bisa di kasih alias untuk nama
// const { personName: nama, personAge: umur} = person1;
// console.log(nama, umur);

const {
    name,
    age,
    status,
    city: kota = "Jakarta",
    // --nested destructure
    // --klo undefined, pakai = {}
    address: { zipcode } = {},
} = person1;
console.log(name, age, status, kota);
