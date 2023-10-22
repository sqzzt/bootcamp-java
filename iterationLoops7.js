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
}; 

let toy3 = {
    id: 11, 
    name: 'El gato felix', 
    sellcount: 35
}; 

toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);


for (let [id, sc] of toysMap){
    if(sc > 14){
        newToysArray.push(id,sc);
        
    }

}
console.log(newToysArray);
