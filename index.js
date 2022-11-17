import {Cliente} from "./cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Director } from "./Empleados/Director.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { SistemadeAutenticacion } from "./Empleados/SistemadeAutenticacion.js";

const cliente1 = new Cliente("Juan", "12345678", "12345678-9");
cliente1.asignarClave('545454')
const cliente2 = new Cliente("Pedro", "245648", "161819-6");

const cuentaJuan = new CuentaCorriente(cliente1, "1", "001");
const cuentaPedro = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroJuan = new CuentaAhorro(cliente1, '9985', '001', 0);

const cuentaNominaJuan = new CuentaNomina(cliente1, '9985', '001', 100);

const empleadoJuan = new Empleado('Juan de la Rosa', '898989', 1800);
empleadoJuan.asignarClave('12345678')
const gerentePedro = new Gerente('Pedro Rosales', '877878', 2500);
const directorAntonio = new Director('Antonio Aguilera', '509069', 4000);

console.log(SistemadeAutenticacion.login(cliente1, '545454'));
console.log(SistemadeAutenticacion.login(empleadoJuan, '12345678'));

/* console.log(empleadoJuan.verBonificacion());
console.log(gerentePedro.verBonificacion());
console.log(directorAntonio.verBonificacion()); */

/*
console.log(cuentaNominaJuan);
cuentaNominaJuan.depositoEnCuenta(150);
console.log(cuentaNominaJuan.consultarSaldo());
cuentaNominaJuan.retirarDeCuenta(50);
console.log(cuentaNominaJuan.consultarSaldo());
console.log(cuentaJuan);
cuentaJuan.depositoEnCuenta(150);
console.log(cuentaJuan.consultarSaldo());
cuentaJuan.retirarDeCuenta(70);
console.log(cuentaJuan.consultarSaldo());

console.log(cuentaAhorroJuan);
cuentaAhorroJuan.depositoEnCuenta(200);
console.log(cuentaAhorroJuan.consultarSaldo());
cuentaAhorroJuan.retirarDeCuenta(120);
console.log(cuentaAhorroJuan.consultarSaldo()); */
