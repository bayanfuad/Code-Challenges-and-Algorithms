// Write here the code challenge solution

function Node(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
  
  const tree = new Node(7);
  tree.right = new Node(9);
  tree.right.right = new Node(14);
  tree.right.left = new Node(null);
  tree.left = new Node(2);
  tree.left.left = new Node(1);
  tree.left.right = new Node(5);
  
  const Two_Sum_BST = (tree, k)=>{
    const find =  (root, k, arr)=>{
      if (root == null) return false;
      if (arr.includes(k - root.val)) 
      return true; 
      arr.push(root.val);
      return find(root.left, k, arr) || find(root.right, k, arr); 
  };
    let container = [];
    return find(tree, k, container);
  };
  
  console.log(" Two_Sum_BST", Two_Sum_BST(tree, 3));
  
  module.exports = {
      Node,
      Two_Sum_BST
  }