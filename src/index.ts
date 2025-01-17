let hasil: number = 10;
hasil = 1000;

console.log(hasil);

interface PersonalData {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[];
}

const personalData: PersonalData = {
    name: "John Doe",
    age: 20,
    email: "john@gmail.com",
    address: "Jl. Raya",
    hobbies: ["coding", "reading", "traveling"],
}