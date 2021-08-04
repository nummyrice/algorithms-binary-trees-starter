// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(val, currentNode = this.root) {

        // Fill this in

        if (currentNode === null) {
            this.root = new TreeNode(val);
            return;
        } else {
            const searchTree = function(currentNode) {
                if (val < currentNode.val) {
                    if (currentNode.left === null) {
                        currentNode.left = new TreeNode(val);
                        return;
                    } else if (currentNode.left !== null) {
                        return searchTree(currentNode.left);

                    }
                } else if (val > currentNode.val) {
                    if (currentNode.right === null) {
                        currentNode.right = new TreeNode(val);
                        return;
                    } else if (currentNode.right !== null) {
                        return searchTree(currentNode.right)
                    }
                } else {
                    return null;
                }
            }
            return searchTree(currentNode)
        }

    }

    search(val) {

        // Fill this in
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return true;
            } else if (val < current.val) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false;
    }


    // Breadth First Traversal - Iterative
    breadthFirstTraversal(current = this.root) {
        // initialize a queue with the root node
        let queue = [];
        queue.push(current);
        // while the queue is not empty
        while (queue.length) {
            if (queue[0].left) {
                queue.push(queue[0].left);
            }
            if (queue[0].right) {
                queue.push(queue[0].right);
            }
            // print and remove first node in queue
            console.log(queue[0].val);
            queue.shift();
        }


        // if the node has a left node
        // push the left node on the back of the queue
        // if the node has a right node
        // push the right node on the back of the queue

    }

    // Depth First Traversal - Iterative
    depthFirstTraversal(current = this.root) {

          // initialize a stack with the root node
      let stack = [];
      stack.push(current);
      // while the stack is not empty

      while (stack.length) {

        console.log(stack[stack.length - 1].val);


      let targetNode = stack.pop();

        if (targetNode.left) {
            stack.push(targetNode.left);

        }
        if (targetNode.right) {
            stack.push(targetNode.right);

        }
      // print and remove first node in stack

      }

      // if the node has a left node
        // push the left node on the back of the stack
      // if the node has a right node
        // push the right node on the back of the stack
    }



    preOrderTraversal(currentNode = this.root) {

        // Fill this in
        if (currentNode === null) {
            return;
        }
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {

        // Fill this in
        if (currentNode === null) {
            return;
        }
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {

        // Fill this in
        if (currentNode === null) {
            return;
        }
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }


}

module.exports = [BinarySearchTree, TreeNode];
