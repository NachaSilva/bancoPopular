
import {Cliente} from "./cliente.js"

export class CuentaCorriente
{
    #cliente;
    numero;
    #saldo; //con el # se convierte el saldo en privado, eso quiere decir que en la consola no aparecerá el monto
    agencia;

    set setCliente(valor) {
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get getCliente(){
        return this.#cliente;
    }

    constructor(){
       this.#cliente = null; //null significa que no existe pero que está el espacio
        this.#saldo = 0;
        this.numero = ''; //se coloca así, para que no aparezca undefined en la consola. Si no como vacío y no se coloca valor inicial 
        this.agencia = '';
    }

    depositoEnCuenta(valor){ //la función es un método
        if(valor > 0)          //para evitar que se deposite en negativo
        this.#saldo += valor; //clase sepa a que instancia debe ir
        return this.#saldo;

    }

    retirarDeCuenta(valor){      
        if(valor <= this.#saldo)    //para evitar que quede en saldo negativo
        this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino){ 
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;;
    }
}