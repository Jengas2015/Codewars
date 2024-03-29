/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique. */

var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let visited = new Map();
    let recStack = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
        visited.set(i, false);
        recStack.set(i, false);
    }
    for (let i = 0; i < prerequisites.length; i++) {
        graph.get(prerequisites[i][1]).push(prerequisites[i][0]);
    }
    for (let i = 0; i < numCourses; i++) {
        if (isCyclic(i, graph, visited, recStack)) {
            return false;
        }
    }
    return true;
}

function isCyclic(v, graph, visited, recStack) {
    if (!visited.get(v)) {
        visited.set(v, true);
        recStack.set(v, true);
        for (let neighbour of graph.get(v)) {
            if (!visited.get(neighbour) && isCyclic(neighbour, graph, visited, recStack)) {
                return true;
            } else if (recStack.get(neighbour)) {
                return true;
            }
        }
    }
    recStack.set(v, false);
    return false;
}

