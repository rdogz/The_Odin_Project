let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    let total = 0;
    let count = 0;

    for (let user of users) {
        total += user.age;
        count++;
    }

    return total / count;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
