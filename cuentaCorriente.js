import { Cliente } from "./cliente.js"
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta
{
    static numeroDeCuentas = 0;


    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);
        CuentaCorriente.numeroDeCuentas++;
    }
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor, 5);
    }
}