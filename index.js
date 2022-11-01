//clase que sirve repetir n veces 

class Cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.numeroCuenta = "23232323";
cliente1.saldoCuenta = 2000;

const cliente2 = new Cliente();
cliente2.nombreCliente = "María";
cliente2.dniCliente = "12332";
cliente2.numeroCuenta = "567832323";
cliente2.saldoCuenta = 2000;

const cliente3 = new Cliente();
cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "134456789";
cliente3.numeroCuenta ="12343434"
cliente3.saldoCuenta = 1000;


console.log(cliente1);
console.log(cliente2);
console.log(cliente3);