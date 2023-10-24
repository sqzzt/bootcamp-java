// function addm (num1,num2)  {
//     let add = sum1 + num2;
//     return add;
// }
// function multm(num1,num2)  {
//     let mult = num1 * num2;
//     return mult;
// }
// function divm(num1,num2)  {
//     let div = num1 / num2;
//     return div;
// }
// function subtractm (num1,num2)  {
//     let subtract = num1 - num2;
//     return subtract;
// }

// let x = 100;
// let y = 50
// let prueba = subtractm(x,y);

// console.log(`probando esto a ver que pasa ${prueba}`);


let materials = [
    {id: 1, name: "pintura", total: 5, existe : true},
    {id: 2, name: "mortero", total: 4, existe : true},
    {id: 3, name: 'yeso', total: 8, existe : true},
    {id: 4, name: 'pladur', total: 5, existe : true},
    {id: 5, name: 'piedra', total: 1, existe : false},
    {id: 6, name: 'arena', total: 2, existe : false},
    {id: 7, name: 'plaquetas', total: 25, existe : true},
    {id: 8, name: 'lavamano', total: 6, existe : true},
    {id: 9, name: 'ducha', total: 3, existe : true},
    {id: 10, name: 'pega', total: 4, existe : false},

]

function compraMat(materials){
    let comprar = new Array();
    materials.forEach(material => {
        if (material.total < 5 || material.existe != true){
            comprar.push(material);
        }
    });
    return comprar;
    }

console.log(compraMat(materials));
