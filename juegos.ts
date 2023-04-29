export class JuegoDeCasino {
  private nombre: string;
  private apuestaMinima: number
 
  constructor(nombre: string, apuestaMinima: number) {
    this.nombre = nombre;
    this.apuestaMinima = apuestaMinima;
  }
 
 public jugar() {
    console.log(`Jugando ${this.nombre}, la apuesta minima es de ${this.apuestaMinima}`);
  }
}