class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    };

    get(index) {
        return this.data[index];
    };

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    };

    insert(index, item) {
        let nextVal = this.data[index];
        for (let i = index; i < this.length; i++) {
            let temp = this.data[i + 1]
            this.data[i + 1] = nextVal;
            nextVal = temp;
        };
        this.data[index] = item;
        this.length++;
    };

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        };
        delete this.data[this.length - 1];
        this.length--;
    }
};

const newArray = new MyArray();
newArray.push("Hi")
newArray.push("You")
newArray.push("Youn")
newArray.push("Younn")
newArray.push("Younnn")
// console.log(newArray.pop())
console.log(newArray)
newArray.insert(3, "nevin")
console.log(newArray)
newArray.insert(4, "nevi")
console.log(newArray)
newArray.insert(5, "nev")
console.log(newArray.get(0));
console.log(newArray)
