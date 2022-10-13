// Write here the code challenge solution
const { Node } = require('../Node');
function checkTree (leftTree, rightTree) {

    if (!leftTree && !rightTree) return true;
    if (!leftTree || !rightTree) return false;
    if (leftTree.value !== rightTree.value) return false;
  
    return (
      checkTree(leftTree.left, rightTree.left) &&
      checkTree(leftTree.right, rightTree.right)
    );
  };
  
  module.exports ={
      checkTree
  }