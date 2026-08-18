import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno esMayorDeEdad", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18, 12345);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 12345);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 67890);

    expect(alumno.esMayorDeEdad()).toBe(false);
  });
});

describe("Alumno obtenerEstado", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18, 12345);

    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 12345);

    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 67890);

    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
});

describe("Alumno obtenerLegajo", () => {

  test("un alumno debe poder obtener su legajo", () => {
    const alumno = new Alumno("Juan", 18, 12345);

    expect(alumno.obtenerLegajo()).toBe(12345);
  });
});