/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Ramiro",
};

const pasajero2: Pasajero = {
  nombre: "Andrea",
  hijos: ["Aura", "Ruben"],
};

function imprimirHijos(pasajero: Pasajero) {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimirHijos(pasajero2);
