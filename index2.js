//Definición de clases

class Cliente
{
    nombreCliente;
    dniCliente;
}


class CuentaCorriente
{
    numero;
    #saldo; //con el # se convierte el saldo en privado, eso quiere decir que en la consola no aparecerá el monto
    agencia;

    constructor(){
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
}

cuentaDeLeonardo = new CuentaCorriente()
//cuentaDeLeonardo.saldo = 0;

let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(50);
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
//saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' +saldo);







