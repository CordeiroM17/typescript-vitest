import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia debe tener un titular", () => {
   test("Obtener titular de la materia", () => {
     const materia = new Materia("Matemática", 2023, "Ingeniería");
     const titular = materia.titular();
     expect(titular.nombre).toBe("Juan Pérez");
     expect(titular.legajo).toBe(45);
   })
});

describe("Materia debe tener un adjunto", () => {
  test("Obtener adjunto de la materia", () => {
    const materia = new Materia("Matemática", 2023, "Ingeniería");
    const adjunto = materia.adjunto();
    expect(adjunto.nombre).toBe("María Gómez");
    expect(adjunto.legajo).toBe(38);
  });
});

describe("Materia debe tener alumnos", () => {
  test("Obtener alumnos de la materia", () => {
    const materia = new Materia("Matemática", 2023, "Ingeniería");
    const alumnos = materia.alumnos();
    expect(alumnos).toHaveLength(2);
  });
});
