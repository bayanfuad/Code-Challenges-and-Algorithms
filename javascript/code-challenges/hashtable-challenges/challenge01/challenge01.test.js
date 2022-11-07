// Write your test here
const {Node,Two_Sum_BST} = require("./challenge01")

describe('BTS', () => {

    test('BTS TEST', () => {
       const tree = new Node(7);
       tree.right = new Node(9);
       tree.right.right = new Node(14);
       tree.right.left = new Node(null);
       tree.left = new Node(2);
       tree.left.left = new Node(1);
       tree.left.right = new Node(5);
        
       const test1 = Two_Sum_BST(tree,3)
       const test2 = Two_Sum_BST(tree,4)
       
     expect(test1).toBeTruthy()
     expect(test2).toBeFalsy()
  });
});