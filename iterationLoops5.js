const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

const destination =new Array;
for (const countries of placesToTravel){
    if(countries.id !== 11 && countries.id !== 40 ){
        destination.push(countries);

    }

}
console.log(destination);




