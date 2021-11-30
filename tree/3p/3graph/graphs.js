//CeballosMirandaGustavo
function Graph(z) {
    this.vertices = z;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
function addEdge(z, y) {
    this.adj[z].push(y);
    this.adj[y].push(z);
    this.edges++;
}
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
                console.log(this.adj[i][j] + ' ');
        }
    }
}
var s = new Graph(5);
s.addEdge(0,1);
s.addEdge(0,2);
s.addEdge(1,3);
s.addEdge(2,4);
s.showGraph();





//AuxiliarPrincipal https://www.geeksforgeeks.org/implementation-graph-javascript/
