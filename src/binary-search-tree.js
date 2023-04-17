const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    if(!this._root) {
      this._root = new Node(data);
      return;
    }

    let current = this._root;

    while(current !== null) {
      if(data > current.data) {
        if(current.right === null) {
          current.right = new Node(data);
          break;
        } else {
          current = current.right;
        }
      }
      if(data < current.data) {
        if(current.left === null) {
          current.left = new Node(data);
          break;
        } else {
          current = current.left;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this._root;

    while(current !== null) {
      if(data > current.data) {
        current = current.right;
      } else if (data < current.data) {
        current = current.left;
      } else {
        return current;
      }
    }

    return null;
  }

  remove(data) {
    let current = this._root;

    if(this._root.data === data) return this._root = null;

    while(current !== null) {
      if(data >= current.data) {
        if(data === current.right) {
          current.right = null;
          break;
        }
        current = current.right;
      } else if (data < current.data) {
        if(data === current.left) {
          current.left = null;
          break;
        }
        current = current.left;
      }
    }

  }

  min() {
    let current = this._root;

    while(current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    let current = this._root;

    while(current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};