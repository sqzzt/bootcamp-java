const character = {

    name :'Jack Sparrow',
    age: 10
};
character.age = 25;

var firtsName = 'Jon';
var lastName = 'Snow';
var age = 23;

console.log('Soy ' + firtsName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos');

const toy1 = {
    name: 'Buss myYear',
    price: 19,
};
const toy2 = {
    name : 'Rallo mcKing',
    price: 29,
};

console.log('Suma de toy1 y toy2 ' + (toy1.price + toy2.price));

let globalBasePrice = 10000;

let car1 = {
    name :'BMW m&m',
    basePrice: 50000,
    finalPrice : 60000
};

let car2 = {
    name : 'Chevrolet Corbina',
    basePrice: 70000,
    finalPrice : 80000
};


globalBasePrice = 25000;
car1.finalPrice = car1.basePrice +  globalBasePrice;
car2.finalPrice = car2.basePrice +  globalBasePrice;
console.log(car1, car2);

