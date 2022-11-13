import {Cliente} from "./cliente.js";
/* import {cuentaCorriente} from "./cuentaCorriente.js";
import {CuentaAhorro} from "./CuentaAhorro.js"; */
import {Cuenta} from "./Cuenta.js"

const cliente1 = new Cliente("Juan", "12345678", "12345678-9");
const cliente2 = new Cliente("Pedro", "245648", "161819-6");

const cuentaJuan = new Cuenta('Corriente', cliente1, "1", "001", 0);
const cuentaPedro = new Cuenta('Corriente',cliente2, "2", "002", 0);

const cuentaAhorroJuan = new Cuenta('Ahorro', cliente1, '9985', '001', 0);

console.log(cuentaJuan);
cuentaJuan.depositoEnCuenta(150);
console.log(cuentaJuan.consultarSaldo());
cuentaJuan.retirarDeCuenta(70);
console.log(cuentaJuan.consultarSaldo());

console.log(cuentaPedro);
console.log(cuentaAhorroJuan);
cuentaAhorroJuan.depositoEnCuenta(200);
console.log(cuentaAhorroJuan.consultarSaldo());
cuentaAhorroJuan.retirarDeCuenta(120);
console.log(cuentaAhorroJuan.consultarSaldo());



