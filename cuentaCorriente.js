import { Cliente } from "./cliente.js"

export class cuentaCorriente 
{
    #cliente
    numero
    agencia
    #saldo
    static numeroDeCuentas = 0;

    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.numeroDeCuentas++;
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo
    }
    
    retirarDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
        }
        return this.#saldo;
    }
    consultarSaldo(){
        return this.#saldo;
    }

    transferirDinero(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}