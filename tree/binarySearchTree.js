class Node {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  };
};

class BST {
  constructor() {
    this.tree = null;
  }

  insert(value) {
    const node = new Node(value);
    let currentVal = this.tree;

    if (currentVal === null) {
      this.tree = node;
      return this.tree;
    };

    while (currentVal !== null) {
      if (value <= currentVal.root) {
        if (currentVal.left === null) {
          currentVal.left = node;
          break;
        }
        currentVal = currentVal.left
      } else {
        if (currentVal.right === null) {
          currentVal.right = node;
          break;
        }
        currentVal = currentVal.right;
      }
    }
    return this.tree;
  };

  lookup(value) {
    let currentNode = this.tree;
    while (currentNode !== null) {
      if (value === currentNode.root) {
        return currentNode;
      };

      if (value < currentNode.root) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      };
    };
    return undefined;
  };

  remove(value) {

    if(this.tree === null){
      return false;
    }

    let currentNode = this.tree;
    let parentNode = null;
    while (currentNode !== null) {
      if (value === currentNode.root) {
        if(currentNode.left === null){
          
        }
      };
      if(value < currentNode.root){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else{
        parentNode = currentNode;
        currentNode = currentNode.right;
      };
    };

    return undefined;
  };
};


const binarySearchTree = new BST();

binarySearchTree.insert(9);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(20);
binarySearchTree.insert(170);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
console.log("insert",binarySearchTree.insert(1));
console.log("lookup",binarySearchTree.lookup(4));
console.log("remove", binarySearchTree.remove(4));
console.log("tree", binarySearchTree.tree)
