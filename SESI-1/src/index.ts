import { Person, Status } from "./types";

function greet({ name, status }: Person) {
    console.log(`Hello ${name}`);
}

const person: Person = {
    name: "John",
    age: 30,
    status: "married",
    address: {
        street: "jl. mangga",
        number: 1,
        zipcode: 1245,
    },
};

// const personWithAddress: PersonWithAddress = {
//     name: "John",
//     age: 30,
//     status: "married",
//     street: "jl. mangga",
//     number: 1,
//     zipcode: 1245,
// }

// use interface - biasanya dipakai kalau type datanya digunakan di beberapa modul
// function greet(person: Person) {
//     console.log(`Hello ${person.name}`);
// }

// function greet(person: { name: string; age: number }) {
//     console.log(`Hello ${person.name}`);
// }

function greetByName(name: string) {
    console.log(`Hello ${person.name}`);
}

greet(person);
