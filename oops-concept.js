class Dogs {
    constructor(name, breed, colour, age, gender) {
        this.breed = breed;
        this.name = name;
        this.colour = colour;
        this.age = age;
        this.gender = gender
    }
    getDetails() {
        return (this.name)
    }
}

let dog1 = new Dogs('German Shephard', 'Joy', 'Black', '3 years', 'Male');
let dog2 = new Dogs('Pomeraninan', 'Lucy', 'White', '1 year', 'Female');
let dog3 = new Dogs('Laborador', 'Anne', 'Brown', '2 years', 'Female');

console.log(dog2.getDetails());



























