import { JuegoDeCasino } from "./juegos";
import { Ruleta } from "./ruleta";
import { Tragamonedas } from "./tragamonedas";

export class Casino {
    private juegos: JuegoDeCasino[];
    private localidad: string;
    private valorEntrada: number;
  
    public constructor(juegos: JuegoDeCasino[], localidad: string, valorEntrada: number) {
      this.juegos = juegos;
      this.localidad = localidad;
      this.valorEntrada = valorEntrada;
    }

    public getJuegos(): JuegoDeCasino[] {
      return this.juegos;
    }

    public setJuegos(juegos: JuegoDeCasino[]) {
      this.juegos = juegos;
    }

    public getLocalidad(): string {
      return this.localidad;
    }
    
    public setLocalidad(localidad: string) {
      this.localidad = localidad;
    }
  
    public getValorEntrada(): number {
      return this.valorEntrada;
    }

    public setValorEntrada(valorEntrada: number) {
      this.valorEntrada = valorEntrada;
    }
  
    public agregarJuego(juego: JuegoDeCasino) {
      this.juegos.push(juego);
    }
}

const tragamonedas1 = new Tragamonedas("Tragamonedas 9000",800);
const ruleta1 = new Ruleta("Ruleta Clasic",2000);
const casinoNecochea = new Casino([tragamonedas1, ruleta1], "Necochea", 1000);

console.log(casinoNecochea)