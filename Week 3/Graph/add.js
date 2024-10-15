

class Graph {

    constructor(){

        this.adjacencyList= {}
    }

    addVertex(vertex){

        if (!this.adjacencyList[vertex]){

            this.adjacencyList[vertex]= new Set()
        }
    }

    addEdges(vertex1, vertex2){

        this.addVertex(vertex1); // Ensure vertex1 exists
        this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} --> ${[...this.adjacencyList[vertex]].join(', ')}`)
        }
    }
}

let graph = new Graph()


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');


graph.addEdges('A', 'B');
graph.addEdges('B', 'C');


graph.display();
