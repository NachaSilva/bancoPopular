//clase que sirve repetir n veces 

class Cliente
{
    nombreCliente;
    dniCliente;
}


class CuentaCorriente
{
    numero;
    saldo;

    depositoEnCuenta(valor){ //la función es un método
        this.saldo += valor; //en vez de hacer una función para cada cuenta con el fin de aceptar depósitos, se utiliza this. Es decir si una cuenta recibe depósito, se suma el inicial el valor  
    }
}



const cliente1 = new Cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "23232323";
cuentaCorriente1.saldo = 5000;

const cliente2 = new Cliente();
cliente2.nombreCliente = "María";
cliente2.dniCliente = "12332";

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero = "567832323";
cuentaCorriente2.saldo = 2000;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100); //se suma los 100 al saldo inicial de la cuenta (despues de linea 16)
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500); 
console.log(cuentaCorriente2.saldo);

const cliente3 = new Cliente();
cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "134456789";

const cuentaCorriente3 = new CuentaCorriente();
cuentaCorriente3.numero = "12343434"
cuentaCorriente3.saldo = 1000;








