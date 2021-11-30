//CeballosMirandaGustavo
//Estructura de datos
function Node(obj){
    this.data = obj;  
    this.left = null; 
    this.right = null;
}
//Arreglo S
var s = [];
  //Nodos
  s[0] = new Node('+');
  s[1] = new Node(30);
  s[2] = new Node(40);
  s[3] = new Node(50);
  s[4] = new Node(60);
  s[5] = new Node(70);
  s[6] = new Node(80);
    //Hijos
    s[0].left = s[1];
    s[0].right = s[2];
    s[1].left = s[3];
    s[1].right = s[4];
    s[2].left = s[5];
    s[2].right = s[6];

      console.log("Inorder");
        inorder(s[0]); //OrdenSimetrico
          function inorder(n){
            if (n!==null){
              inorder(n.left);
            console.log(n.data);
        inorder(n.right);
    }
}
