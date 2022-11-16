import {Cliente} from "./cliente.js";
import { CuentaAhorro } from "./CuentaAhorro.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

const cliente1 = new Cliente("Juan", "12345678", "12345678-9");
const cliente2 = new Cliente("Pedro", "245648", "161819-6");

const cuentaJuan = new CuentaCorriente(cliente1, "1", "001");
const cuentaPedro = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroJuan = new CuentaAhorro(cliente1, '9985', '001', 0);

console.log(cuentaJuan);
cuentaJuan.depositoEnCuenta(150);
console.log(cuentaJuan.consultarSaldo());
cuentaJuan.retirarDeCuenta(70);
console.log(cuentaJuan.consultarSaldo());

console.log(cuentaAhorroJuan);
cuentaAhorroJuan.depositoEnCuenta(200);
console.log(cuentaAhorroJuan.consultarSaldo());
cuentaAhorroJuan.retirarDeCuenta(120);
console.log(cuentaAhorroJuan.consultarSaldo());
