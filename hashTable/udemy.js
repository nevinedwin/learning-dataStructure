var HashTableUdemy = /** @class */ (function () {
    function HashTableUdemy(size) {
        this.data = new Array(size);
    }
    ;
    HashTableUdemy.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        ;
        return hash;
    };
    ;
    HashTableUdemy.prototype.set = function (key, value) {
        var hashKey = this._hash(key);
        if (!this.data[hashKey]) {
            this.data[hashKey] = [];
        }
        this.data[hashKey].push([key, value]);
        return this.data;
    };
    ;
    HashTableUdemy.prototype.get = function (key) {
        var hashKey = this._hash(key);
        var currentBucket = this.data[hashKey];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        ;
        return undefined;
    };
    ;
    HashTableUdemy.prototype.keys = function () {
        var keysArray = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0]);
            }
        }
        return keysArray;
    };
    return HashTableUdemy;
}());
;
var myHashTable = new HashTableUdemy(50000);
myHashTable.set("grapes", 10000);
myHashTable.set("orange", 4000);
console.log(myHashTable.get("orange"));
myHashTable.keys();
