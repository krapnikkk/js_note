function Vertex(label) {
    this.label = label;
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.adj = [];
        for (var i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }

    addEdge(v,w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph(){
        for (var i = 0;i<this.vertices;i++){
            console.log(`${i}-->`);
            for (var j = 0; j < this.vertices; j++){
                if(this.adj[i][j]!= undefined){
                    console.log(this.adj[i][j]+" ");
                }
            }
        }
    }

}