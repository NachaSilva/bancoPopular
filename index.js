//Importación de clases
import {Cliente} from './cliente.js'
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente(); 
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';


const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (CuentaLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';


const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2; //asigno cliente a cliente 2

console.log(cuentaDeMaria.cliente);
cuentaDeMaria.cliente = 0;
console.log(cuentaDeMaria.cliente);

/*if(cuentaDeMaria.cliente)
console.log(cuentaDeMaria.cliente);
else
console.log(cuentaDeMaria); */


let parametroValor = 100;
/*
console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

/*
console.log('El Saldo actual (cuentaMaria) '+saldoMaria);
const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
*/
