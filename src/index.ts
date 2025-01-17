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
    name: "Arvel Peyoh",
    age: 18,
    email: "2381024@unai.edu",
    address: "Jl. Raya",
    hobbies: ["coding", "reading", "traveling"],
}

function printPersonalData(data: PersonalData) {
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`Email: ${data.email}`);
    console.log("Hobbies: ");
    data.hobbies.forEach((hobby) => {
        console.log(`- ${hobby}`)
    })
    console.log("Age Conversion:")
    ageConversion(data.age)
}

printPersonalData(personalData);

function ageConversion(age: number): number {
    console.log(`- Age in years: ${age}`);
    console.log(`- Age in months: ${age * 12}`);
    console.log(`- Age in days: ${age * 365}`);
    console.log(`- Age in weeks: ${age * 52}`);
    console.log(`- Age in hours: ${age * 8760}`);
    console.log(`- Age in minutes: ${age * 525600}`);
    return age;
}