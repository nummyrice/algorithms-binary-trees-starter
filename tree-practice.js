// Practice problems on binary trees


function findMinBST(rootNode) {

    while (rootNode.left !== null) {
        rootNode = rootNode.left;
    }
    return rootNode.val;
}

function findMaxBST(rootNode) {

    // Fill this in
    while (rootNode.right !== null) {
        rootNode = rootNode.right;
    }
    return rootNode.val;
}

function findMinBT(rootNode, min = rootNode.val) {
    if (rootNode === null) {
        return;
    }
    if (rootNode.val < min) {
        min = rootNode.val;

    }
    if (rootNode.right) {
        rootNode = rootNode.right;
        findMinBT(rootNode, min)
    }
    if (rootNode.left) {
        rootNode = rootNode.left;
        findMinBT(rootNode, min)
    }

    return min;
}

function findMaxBT(rootNode) {

    // Fill this in

}

function getHeight(rootNode) {

    // Fill this in

}

function countNodes(rootNode) {

    // Fill this in

}

function balancedTree(rootNode) {

    // Fill this in

}

function getParentNode(rootNode, target) {

    // Fill this in

}

function inOrderPredecessor(rootNode, target) {

    // Fill this in

}


function deleteNodeBST(rootNode, target) {

    // Fill this in

}

module.exports = [
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
]