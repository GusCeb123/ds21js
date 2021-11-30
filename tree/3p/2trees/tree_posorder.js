//CeballosMirandaGustavo
//Estructura de Datos
function Node(obj) {
    this.data = obj;  
    this.left = null; 
    this.right = null;
}
//Nodos
let s = new Node('+');
let s1 = new Node(14);
let s2 = new Node(15);
//Hijos
s.left = s1;
s.right = s2;
console.log("Posorder");
posorder(s); //Posorder - Orden Posterior
function posorder(r) {
    if (r!==null) {
        posorder(r.left);
        posorder(r.right);
        console.log(r.data);
    }
}
