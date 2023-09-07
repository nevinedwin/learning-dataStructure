// can you create a fucntion tat reverses string

function reverse(str) {
    if (!str || str.length < 3 || typeof str !== "string") {
        return "input is not a string";
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    };
    return backwards.join('');
};

// const result = reverse("Hi My Name Is Nevin");
// console.log(result);

function reverse1(str) {
    return str.split('').reverse().join("");
};

const result2 = reverse1("Hi My Name is Nevin");
console.log(result2)