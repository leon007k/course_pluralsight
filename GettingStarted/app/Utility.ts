class Utility{
  /* 
  * Se le agrega la palabra static para poder usarla funcion en toda la aplicacion 
  * sin necesidad de crear instancias a esta clase
  */
  static getInputValue(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
  }

}