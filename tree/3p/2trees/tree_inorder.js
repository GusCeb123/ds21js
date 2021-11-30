//CeballosMirandaGustavo
//Estructura de Datos
function Node(obj){
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

console.log("Inorder");
inorder(s); //OrdenSimetrico o Inorder
function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}
