class Animal {
    constructor(sound, name) {
        this.sound = sound;
        this.name = name;
        this.speak = function () { return this.sound; }
    }
}

function animalSays(object) {
    console.log(object.speak());
}

var dog = new Animal("Woof","Tomy");
var cat = new Animal("Meow","Bella");
var cow = new Animal("Moo","Getsy");

animalSays(dog);
animalSays(cat);
animalSays(cow);


