//Importación de clases
import {Cliente} from './cliente.js'
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050'); //se reduce las lineas al colocarlas dentro del valor
//cliente.nombreCliente = 'Leonardo';
//cliente.dniCliente = '13804050';

const cliente2 = new Cliente('Maria','16979808');
//cliente2.nombreCliente = 'Maria';
//cliente2.dniCliente = '16979808';


const cuentaDeLeonardo = new CuentaCorriente('1','001', cliente);
//cuentaDeLeonardo.numero = '1';
//cuentaDeLeonardo.agencia = '001';
//cuentaDeLeonardo.cliente = cliente;

const cuentaDeMaria = new CuentaCorriente('2', '002', cliente2);
//cuentaDeMaria.numero = '2';
//cuentaDeMaria.agencia = '002';
//cuentaDeMaria.cliente = cliente2; //asigno cliente a cliente 2

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();
saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);
console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);

console.log(CuentaCorriente.cantidadCuentas); //para todas las instancias de cuenta corriente, dame el total de cuentas



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
