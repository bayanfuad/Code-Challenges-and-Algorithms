// Write here the code challenge solution
'use strict';

const { Node } = require('../Node');


var Tree = function (preorder, inorder) {
    if (inorder.length === 0) return null;
    if (preorder.length === 0) return null;
    const rootValue = preorder[0];
    let tree = new Node(rootValue)
    let i = inorder.indexOf(rootValue)
    tree.left = Tree(preorder.slice(1, i+1), inorder.slice(0, i));
    tree.right = Tree(preorder.slice(i+1), inorder.slice(i+1));
    return tree;
  };
  
  module.exports = Tree;