import { JuegoDeCasino } from "./juegos";

export class Tragamonedas extends JuegoDeCasino {
  
  public constructor(nombre: string, apuestaMinima: number){
    super(nombre, apuestaMinima)
  }
  
  public tirarPalanca() {
      console.log("Tirando de la palanca...");
    }
}
