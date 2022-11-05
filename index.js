//Importación de clases
import {Cliente} from './cliente.js'
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050', '132224'); 
const cliente2 = new Cliente('Maria','16979808', '8989');


const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas); //para todas las instancias de cuenta corriente, dame el total de cuentas

console.log(CuentaCorriente.cantidadCuentas);



/*if(cuentaDeMaria.cliente)
console.log(cuentaDeMaria.cliente);
else
console.log(cuentaDeMaria); */


//let parametroValor = 100;
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
