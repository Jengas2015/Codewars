/* Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
Example 2:


Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.
 

Constraints:

The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node. */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 *  
 *  
 * 1. create a map to store the node and its neighbors
 * 2. create a queue to store the nodes
 * 3. create a new node with the same value as the given node
 * 4. add the new node to the map
 * 5. add the given node to the queue
 * 6. while the queue is not empty
 * 7. shift the first node from the queue
 * 8. loop through the neighbors of the node
 * 9. if the neighbor is not in the map
 * 10. create a new node with the same value as the neighbor
 * 11. add the neighbor to the map
 * 12. add the neighbor to the queue
 * 13. add the neighbor to the neighbors of the node
 * 14. return the new node
    */
var cloneGraph = function (node) {
    
    if (!node) return node;
    let map = new Map();
    let queue = [];
    let newNode = new Node(node.val);
    map.set(node, newNode);
    queue.push(node);
    while (queue.length) {
        let curr = queue.shift();
        for (let neighbor of curr.neighbors) {
            if (!map.has(neighbor)) {
                let newNeighbor = new Node(neighbor.val);
                map.set(neighbor, newNeighbor);
                queue.push(neighbor);
            }
            map.get(curr).neighbors.push(map.get(neighbor));
        }
    }
    return newNode;
}

