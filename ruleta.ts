import { JuegoDeCasino } from "./juegos";

export class Ruleta extends JuegoDeCasino {
  
  public constructor(nombre: string, apuestaMinima: number){
    super(nombre, apuestaMinima)
  }

    public girar() {
      console.log("Girando la ruleta...");
    }
}