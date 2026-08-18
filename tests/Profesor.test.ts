import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Obtener nombre del profesor", () => {
  test("Debería retornar el nombre del profesor", () => {
    const profesor = new Profesor("Juan Pérez", 45);
    expect(profesor.obtenerNombre()).toBe("Juan Pérez");
  });
});

describe("Obtener legajo del profesor", () => {
  test("Debería retornar el legajo del profesor", () => {
    const profesor = new Profesor("Juan Pérez", 45);
    expect(profesor.obtenerLegajo()).toBe(45);
  });
});