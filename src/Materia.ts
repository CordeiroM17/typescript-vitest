import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";

export class Materia {
  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string
  ) {}

  titular(): Profesor {
      return new Profesor("Juan Pérez", 45);
    };

  adjunto(): Profesor {
    return new Profesor("María Gómez", 38);
  }

  alumnos(): Alumno[] {
    return [
      new Alumno("Juan", 18, 12345),
      new Alumno("Ana", 25, 12345)
    ];
  }
}
