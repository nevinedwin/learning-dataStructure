class HashTableUdemy {
  data: any[];
  constructor(size:number){
    this.data = new Array(size);
  };

  _hash(key:string){
    let hash:number = 0;
    for(let i:number = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i)% this.data.length;
    };
    return hash;
  };

  set(key:string, value:any) {
    let hashKey: number = this._hash(key);
    if(!this.data[hashKey]){
      this.data[hashKey] = [];
    }
    this.data[hashKey].push([key, value])
    return this.data;
  };

  get(key: any){
    let hashKey = this._hash(key);
    const currentBucket: any[] = this.data[hashKey];
    if(currentBucket){
      for(let i:number = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    };
    return undefined;
  };

  keys(){
    const keysArray: any[] = [];
    for(let i:number = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0])
      }
    }
    return keysArray;
  }

};

const myHashTable = new HashTableUdemy(50000);
myHashTable.set("grapes", 10000);
myHashTable.set("orange", 4000);

console.log(myHashTable.get("orange"))
myHashTable.keys();