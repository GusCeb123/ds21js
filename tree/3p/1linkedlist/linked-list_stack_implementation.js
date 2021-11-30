//CeballosMirandaGustavo
//Crear Estructura de Listas
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
//Creacion de la pila
function Stack(n) {
    this.push = push;
    this.head = null;
}
//Ingresar los elementos a la pila
function push(element) {
    const newItem = new Node(element, this.head)
    this.head = newItem;
}
    var list = new Stack();
    var tamaño = 10000;
    var cont = 0;
    var tiempo = 0;

    while (cont < 7) { 

      var inicio = new Date();
    //Numeros aleatorios dentro de la pila
        for(var i=0;i<tamaño; i++) {
          list.push(Math.round(Math.random()*tamaño)); //Ingresamos númertos aleatoriops en la pila
        }   
            var fin = new Date() - inicio; 
      tiempo = tiempo + fin;
    console.log("El tiempo de la "+(cont+1)+"° corrida es: "+fin+" ms");
  cont++;
}
console.log("Promedio de las 7 corridas: "+(tiempo/7)+" ms");
