export class Cuenta 
{
    #cliente;
    #saldo;
    
    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }
    get cliente(){
        return this.#cliente;
    }

    constructor (cliente, numero, agencia, saldo){
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
        _retirarDeCuenta(valor, 0);
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