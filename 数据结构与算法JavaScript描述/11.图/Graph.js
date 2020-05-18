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
        this.marked = [];
        for (var i = 0; i < this.vertices; i++) {
            this.marked[i] = false;
        }
    }

    //邻接表
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        for (var i = 0; i < this.vertices; i++) {
            console.log(`${i}-->`);
            for (var j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j] + " ");
                }
            }
        }
    }

    dfs(v) {
        console.log(this.marked);
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log("visited vertices:" + v);
        }
        for (var w in this.adj[v]) {
            // console.log(w,this.adj[v],this.marked[w]);
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    }

    bfs(s) {
        var queue = [];
        this.marked[s] = true;
        queue.push(s); // 添加到队尾
        while (queue.length > 0) {
            var v = queue.shift(); // 从队首移除
            if (v == undefined) {
                print("Visisted vertex: " + v);
            }
            for(var w in this.adj[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }

}

function test() {
    var g = new Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.showGraph();
    g.dfs(0);
}

test();