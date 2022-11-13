import { cuentaCorriente } from "./cuentaCorriente.js";

export class CuentaAhorro {
    #cliente
    #saldo

    constructor(cliente, numero, agencia, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
}