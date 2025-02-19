export type Status = "married" | "single" | "widow";

export interface Person {
    name: string;
    age: number;
    status: string;
    city?: "Jakarta" | "Tangerang";
    address?: Address;
}

export interface Address {
    street: string;
    number: number;
    zipcode: number;
}
