export class Cuenta 
{
    #cliente;
    #saldo;
    numero;
    agencia;

    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    get cliente(){
        return this.#cliente;
    }

    constructor (cliente, numero, agencia, saldo){
        if (this.constructor == Cuenta) {
            throw new Error(`No se debe instanciar objetos de la clase Cuenta`)
        }
        this.#cliente = cliente;
        this.#saldo = saldo;
        this.numero = numero;
        this.agencia = agencia;
}
    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo
    }

    retirarDeCuenta(valor){
        throw new Error(`El método retirarDeCuenta de la clase Cuenta es abstracto y debe ser implementado en las clases hijas`);
    }

    _retirarDeCuenta(valor, comision){
    valor = valor * (1 + comision/100);
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