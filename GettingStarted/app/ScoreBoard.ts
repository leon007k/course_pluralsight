/// <reference path="Result.ts"/>

class ScoreBoard {
  
  private results : Result[] = [];
  
  // * Agrega los datos obtenidos de la interface Result a un arreglo
  addResult(newRsult : Result) : void{
    this.results.push(newRsult);
  }

  updateScoreBoard() : void {
    let output : string = '<h2>Scoreboard</h2>';

    for(let index = 0; index < this.results.length; index++) {
      const result : Result = this.results[index];
      output += '<h4>';
      output += `${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}`;
      output += '</h4>';
    }

    const scoreElement : HTMLElement = document.getElementById('scores')!;
    scoreElement.innerHTML = output;

  }

}