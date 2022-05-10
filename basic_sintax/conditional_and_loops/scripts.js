var player_one = 0;
var player_two = 1;
var scoreboard;
var a = 0;

//Ternary conditional
player_one >= 0 && player_two >= 0 ? console.log('Jogadores válidos!') : console.log('Jogadores inválidos!');

//Using conditional pile
if(player_one > 0 && player_two < player_one){
    console.log('Jogador 1 está em vantagem!');
    scoreboard = player_one > player_two;
} else if(player_two > 0 && player_one < player_two){
    console.log('Jogador 2 está em vantagem!');
    scoreboard = player_two > player_one;
} else if(player_one == 0 && player_two == 0){
    console.log('Ninguém marcou ponto!');
} else{
    console.log('Estão empatados...');
}

switch (scoreboard) {
    case scoreboard = player_one > player_two:
        console.log('O jogador 1 ganhou!');
        break;
    case scoreboard = player_two > player_one:
        console.log('O jogador 2 ganhou!');
        break;
    default:
        console.log('Deu empate!')
        break;
}


//Loop structures: for, for in, for of, while and do-while
let array = ['value_one', 'value_two', 'value_three', 'value_four'];

let object = {
    quality_one : 'value_one',
    quality_two : 'value_two',
    quality_three : 'value_three'
    }

for (let index = 0; index < array.length; index++) {
    console.log(index);
    console.log(array[index]);
}

for (const index in object) {
    console.log(index);    
}

for (const index of array) {
    console.log(index);
}

for (const index of object.quality_one) {
    console.log(index);
}

while(a < 10){
    console.log(a);
    a++;
}

do {
    console.log(a);
    a--;
} while (a >= 0);