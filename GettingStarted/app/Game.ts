/// <reference path="Utility.ts" />
/// <reference path="Result.ts" />
/// <reference path="Player.ts" />
/// <reference path="ScoreBoard.ts" />

class Game {
  private scoreboard : ScoreBoard = new ScoreBoard();
  
  constructor(public player : Player, public problemCount : number, public factor : number){}

  displayGame() : void{
    let gameForm : string = '';
    for(let i = 1; i <= this.problemCount; i++){
      gameForm += '<div class="form-group">';
      gameForm += `<label for="answer${i}" class="col-sm-2 control-label">`;
      gameForm += `${String(this.factor)} X ${i} = </label>`;
      gameForm += `<div class="col-sm-1">
                      <input type="text" class="form-control" id="answer${i}" size="5" />
                    </div>`;
      gameForm += '</div>';
    }


    // * Agrega un nuevo juego
    const gameElement : HTMLElement = document.getElementById('game')!;
    gameElement.innerHTML = gameForm;
    
    
    // * habilita el btn para calcular el puntaje
    document.getElementById('calculate')!.removeAttribute('disabled');
  }

  calculateScore() : void{
    let score : number = 0;
    debugger
    // * recorre los inputs y calcula la respuesta que es correcta
    for(let i = 1; i <= this.problemCount; i++){
      const answer : number = Number(Utility.getInputValue('answer' + i));
      if(i * this.factor === answer){
        score++;
      } 
    }

    // * crea un nuevo objeto resultado para enviarlo al ScoreBoard
    const result : Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor
    }

    // * Agrega los resultados y actualiza el tablero
    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreBoard();

    // * deshabilita el boton para obtener puntaje
    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }

}