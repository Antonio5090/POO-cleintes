import {Cliente} from "./cliente.js";
import {cuentaCorriente} from "./cuentaCorriente.js";

const cliente1 = new Cliente("Juan", "12345678", "12345678-9");
const cuentaJuan = new cuentaCorriente(cliente1, "123456", "1234");

const cliente2 = new Cliente("Pedro", "245648", "161819-6");
const cuentaPedro = new cuentaCorriente(cliente2, "123456", "12345");

console.log(cuentaJuan.cliente);
console.log(cuentaPedro.cliente);



