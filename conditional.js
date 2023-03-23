// console.log('Checking Eligible Age To Drive')

// let age = prompt ('Enter your age:');
// age = Number.parseInt(age);

let age = 0;

if (age <= 0) {
    console.log('This is an invalid age');
}

else if (age < 9) {
    console.log('You are too young to drive');
}

else if (age < 18 && age >= 9) {
    console.log('You are not eligible to drive');
}

else {
    console.log('You are eligble to drive');
}

console.log(age);
