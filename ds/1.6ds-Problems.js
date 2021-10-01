//Ceballos Miranda Gustavo
console.time("TIME");
let o = new Object();
let v = "name";
for(i=0; i<=100000;i++){
o= Math.floor(Math.random() * 100000) + 1;
console.log(v + o);
}

let map = new Object();
let s;
for (j=0;j<=100000;j++){
map = Math.floor(Math.random() * 100000) + 1;
console.log(v + map)
}
console.timeEnd("TIME");
//1st run 26401.263
//2nd run 26234.192
//3rd run 23121.043
//4th run 23000.350
//5th run 23108.998
//6th run 23053.733
//7th run 23113.147
//Average = 25147.53
