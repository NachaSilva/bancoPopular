//Definición de clases

class Cliente
{
    nombreCliente;
    dniCliente;
}


class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    constructor(){
        this.saldo = 0;
        this.numero = ''; //se coloca así, para que no aparezca undefined en la consola. Si no como vacío y no se coloca valor inicial 
        this.agencia = '';
    }

    depositoEnCuenta(valor){ //la función es un método
        this.saldo += valor; //clase sepa a que instancia debe ir
    }

    retirarDeCuenta(valor){
        this.saldo -= valor;
    }
}

cuentaDeLeonardo = new CuentaCorriente()
//cuentaDeLeonardo.saldo = 0;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);





