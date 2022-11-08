import {Cuenta} from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero, agencia, saldo){
        super(cliente,numero,agencia, 0);
    }
    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);
    }
}

