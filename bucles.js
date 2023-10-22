// /* BUCLES */

// /* 1. FOR */

// var arrayCoches = ['ferrari', 'audi', 'seat', 'dacia', 'ford', 'chevrolet', 'toyota', 'kia'];
// var arrayCorregido = new Array();

// /* let gato = {nombre: 'honey', edad: 1};
// let gato2 = {edad: 1, nombre: 'honey'}; */

// // console.log('test',arrayCoches[0][0]);

// /* for (let i = 0; i < arrayCoches.length; i++) {
//     console.log(arrayCoches[i]);
// } */

// /* 1B. FOREACH */

// /* arrayCoches.forEach(element => {
//     arrayCorregido.push(element.toUpperCase());
// }); */

// //console.log(arrayCorregido);

// /* 2. OTROS BUCLES: while, do while,  */

// let day = 21;
// /* while (day < 30 && day > 20) {
//     console.log('es final de mes');
//     day++;
// } */

// let colaDeGente = 10;
// /* do {
//     console.log('hola');
//     colaDeGente--;
// } while(colaDeGente > 0); */

// let meses = ['marzo', 'abril', 'mayo'];
// /* switch(meses) {
//     case 'marzo':
//         console.log('llevar chaquetilla');
//         break;
//     case 'abril':
//         console.log('llevar sudadera');
//         break;
//     case 'mayo':
//         console.log('llevar gorra');
//         break;
//     default:
//         console.log('has usado el array que no era');
//         break;
// } */

// /* let mesesObj = {
//     marzo: 'llevar chaquetilla',
//     abril: 'llevar sudadera',
// }
//  */

// /* 3A. FOR OF */

// /* 3B. FOR IN */

// // EJERCICIOS:
// // a: hacer el método .includes con un bucle, testarlo con:

// var arrayCoches2 = ['ferrari', 'audi', 'seat', 'dacia', 'bmw', 'chevrolet', 'toyota', 'kia'];

// let isBmw;
// for (let i = 0; i < arrayCoches2.length; i++) {
//     if(arrayCoches2[i] == 'bmw') {
//         isBmw = true;
//         break;
//     }
//     if (i == arrayCoches2.length -1 && !isBmw) {
//         isBmw = false;
//     }
// }
// console.log('for bmw', isBmw);

// if (arrayCoches2.includes('ferrari')) {
//     console.log('ferrari');
// } else if (arrayCoches2.includes('audi')) {
//     console.log('audi');
// } else if (arrayCoches2.includes('alfa romeo')) {
//     console.log('alfa romeo');
// } else if (arrayCoches2.includes('bmw')) {
//     console.log('bmw');
// }

/* let isIncluded = ('ana');
let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'] */
// b: dado el array ['juan', 'ramón', 'julio', 'ana', 'beatriz'], añadir un nombre nuevo detras de cada uno existente usando bucles.

// let names = ['juan', 'ramón', 'julio', 'ana', 'beatriz'];
// let names2 = ['pepe', 'maria', 'juancho', 'carlos', 'pepa']
// let newNames = new Array();
// let newNames2 = new Array();

// for (let i = 0; i < names.length ; i++){
//     newNames.push(names[i]);
//     newNames.push(names2[i]);
// }
// let i = 0;

// names.forEach(element => {

//     newNames2.push(element);
//     newNames2.push(names2[i]);
//     i++;
// });

// console.log(newNames2);

// c: averigua si el número 2 existe en la siguiente matriz usando solo bucles:
// let matriz = [
//   [1, 2, 4],
//   [2, 3, 4],
//   [5, 6, 7],
// ];
// let isDos = false;
// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     if (matriz[i][j] == 2) {
//       isDos = true;
//     }
//   }
// }
// console.log(isDos);

// let primos = new Array();
// let n = 2;
// let isPrimo = true;
// while (primos.length < 20) {
//     for (let i = 2 ; i < n ; i++){
//         if (n % i === 0) {
//             isPrime = false;
            
//             break;
//         }
//     }

    
// }
// if (isPrimo){
//     primos.push(n);
//     n++;
// }


// d: saca por cada consola el sumatorio de cada array dentro de matriz, usa solo bucles.

// e: dados los siguentes objetos tipo coche:
/* let cocheA = {marca: 'seat', matriculacion: 2008, etiqueta: '?'};
let cocheB = {marca: 'alfa romeo', matriculacion: 2000, etiqueta: '?'};
let cocheC = {marca: 'bmw', matriculacion: 2019, etiqueta: '?'}; */
// guarda todos los coches en un array y, mediante bucles, itéralo para asignar a cada coche su etiqueta corresponciente (<2006 -> A, 2006 - 2012 -> B, >2012 -> C)

// let count = 0;  // Contador de números primos
// let num = 2;    // Empezamos desde el número 2
// const primeNumbers = [];  // Array para almacenar los números primos
// let sum = 0;  // Variable para almacenar la suma

// while (count < 100) {
//   let isPrime = true;

//   // Verificar si num es primo
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   // Si num es primo, agrégalo al array y suma a la variable sum
//   if (isPrime) {
//     primeNumbers.push(num);
//     sum += num;
//     count++;
//   }

  // Pasar al siguiente número
//   num++;
// }

// console.log("Los primeros 100 números primos son: ");
// console.log(primeNumbers);
// console.log("La suma de los primeros 100 números primos es: " + sum);

// let war = new Map();

// let ship = {
//     tipo : 'galeon',
//     velas : 3
// }
// let plane = {
//     tipo : 'f16',
//     velocidad : 1000
// }

// war.set(ship, 'hundir');
// war.set(plane, 'derribar');

// let coche = {
//     marca : "bmw",
//     modelo : "serie 2",
//     color : "azul",
//     etiqueta : "eco",
// }

// for (let [key, value]  of war) {
//     console.log(key);
//     console.log(value);
// }

/* Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
 */

// let popularToys = [];
// const toys = [
// 	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
// 	{id: 11, name: 'Action Woman', sellCount: 24}, 
// 	{id: 23, name: 'Barbie Man', sellCount: 15}, 
// 	{id: 40, name: 'El gato con Guantes', sellCount: 8},
// 	{id: 40, name: 'El gato felix', sellCount: 35} //
// ]

// for (let toy of toys) {
//     if (toy.sellCount > 14) {
//         popularToys.push(toy);
//     } 
// }

// console.log(popularToys);


let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{
    id: 23,
    name: 'Barbie Man',
    sellcount: 15
};

let toy2 = {
    id: 40,
    name: 'El gato con Guantes',
    sellcount : 8
}; // 8

let toy3 = {
    id: 11, 
    name: 'El gato felix', 
    sellcount: 35
}; // 35

toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);

for (let [id, sc] of toysMap){
    if(sc > 14){
        newToysArray.push(id,sc);
        
    }

}

console.log(newToysArray);


// for (let toy of toys) {
//     if (toy.sellCount > 14) {
//         popularToys.push(toy);
//     } 
// }
// insertar los toy en el mapa

// iterar el mapa y guardar los que tengan mas de 14

// imprimir el array nuevo