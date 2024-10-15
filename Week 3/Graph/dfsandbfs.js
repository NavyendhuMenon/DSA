class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

  
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1)
    }

  
    bfs(start) {
        const queue = [start]
        const visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex)

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    
    dfs(vertex, visited = new Set()) {
        visited.add(vertex);
        console.log(vertex)

        for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

console.log("BFS:");
graph.bfs('A')

console.log("DFS:");
graph.dfs('A')