import { Producto, calculoISV } from "./06-desestructuracion-arr";
import { SourceMapDevToolPlugin } from "webpack";

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
  {
    precio: 32,
    desc: "Coca",
  },
  {
    precio: 23,
    desc: "papas",
  },
];

const [total, isv] = calculoISV(carritoCompras);

console.log("total: ", total);
console.log("ISV: ", isv);

