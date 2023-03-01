import { SourceMapDevToolPlugin } from "webpack";

/*
    ===== Código de TypeScript =====
*/

export interface Producto {
  desc: string;
  precio: number;
}

const consola: Producto = {
  desc: "Play 4",
  precio: 4000,
};

const telefono: Producto = {
  desc: "Iphone 11",
  precio: 12000,
};

export function calculoISV(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}


const articulos = [telefono, consola];

const [total, isv] = calculoISV(articulos);
console.log("ISV: ", isv);
console.log("total: ", total);
