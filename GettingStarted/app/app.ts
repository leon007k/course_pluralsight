/// <reference path="Player.ts"/>
/// <reference path="Game.ts"/>

/* function startGame(){
   let playerName:string | undefined = getInputValue('playername');
   logPlayer(playerName);
   postScore(100, playerName);
}

function logPlayer(name: string = "MultiMath Player") : void{
   console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

   if(inputElement.value === ''){
      return undefined;
   }else{
      return inputElement.value;
   }
}

function postScore(score: number , playerName: string = "MultiMath Player") : void {
   const scoreElement : HTMLElement | null = document.getElementById('postedScores');
   scoreElement!.innerText = `${score} - ${playerName}`;
} */

/*
 * al estar activo el strict compile en el tsconfing.json, nos da una advertencia
 * de que messagesElement y el solector del elemento startGame, pueden llegar a ser nulos.
 * Como sabemos que estos ya existen en el html y nunca seran nulos, agregamos un signo de exclamasion
 * para que ignore esta adverntencia
 */
// document.getElementById('startGame')!.addEventListener('click',startGame);

// # Uso de clases en typescript
/* const firstPlayer : Player = new Player();
firstPlayer.name = 'John';
console.log(firstPlayer.formatName()); */

let newGame : Game;

// * Evento que comienza el juego
document.getElementById('startGame')!.addEventListener('click', () => {
   const player : Player = new Player();
   player.name = Utility.getInputValue('playername');

   const problemCount : number = Number(Utility.getInputValue('problemCount'));
   const factor : number = Number(Utility.getInputValue('factor'));

   newGame = new Game(player, problemCount, factor);
   newGame.displayGame();
});

// * Evento paa calcular el puntaje
document.getElementById('calculate')!.addEventListener('click', () => {
   newGame.calculateScore();
});