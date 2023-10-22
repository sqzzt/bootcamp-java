let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log(avengers);
console.log(avengers.length);

console.log(avengers[2]);
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[3]);
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
