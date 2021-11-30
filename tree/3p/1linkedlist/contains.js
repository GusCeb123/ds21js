//Ceballos Miranda Gustavo
function Node(data) { 
   this.data = data
   this.next = null
}

let s1 = new Node(1);
let s2 = new Node(2);
let s3 = new Node(3);
let s4 = new Node(4);
let s5 = new Node(5);

s1.next=s2;
s2.next=s3;
s3.next=s4;
s4.next=s5;

console.log('s1.next: ',s1.next);

const traverse=(n)=>{
    let r=n //iterator 
    while(r){ //exists
        console.log(r.data)
	r=r.next
    }
}

traverse(s1);
