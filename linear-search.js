let data = [13, 42, 30, 11, 52];
let find = 2;
let pos = undefined;

for (let i = 0; i <= data.length; i++) {
    if (data[i] == find) {
        pos = i;
    }

    else{
        console.log('Element not found')
        break;
    }

}

console.log(pos);
