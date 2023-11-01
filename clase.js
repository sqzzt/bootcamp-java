function createCharacter(name, raze, gender, profession){
    return {
    name: name,
    raze: raze,
    gender: gender,
    profession : profession
}
}

let character = createCharacter('Pedro', 'human', 'male', 'programmer');
console.log(character);

if('raze' in character && character['raze'] == 'human'){
    console.log('you are a human');
    return

}else {
    console.log('welcome to somewhere')
}

