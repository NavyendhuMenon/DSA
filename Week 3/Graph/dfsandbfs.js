class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex); // Process the vertex

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    // Depth-First Search (DFS)
    dfs(vertex, visited = new Set()) {
        visited.add(vertex);
        console.log(vertex); // Process the vertex

        for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

// Perform BFS and DFS
console.log("BFS:");
graph.bfs('A'); // Outputs: A, B, C, D, E, F

console.log("DFS:");
graph.dfs('A'); // Outputs: A, B, D, E, C, F
