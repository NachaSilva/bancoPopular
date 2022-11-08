/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaNomina } from './CuentaNomina';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

//const cuentaSimple = new Cuenta(cliente, '098', '002', '100'); //se muetsra el error para proteger la clase base que es cuenta para que no sea extansiada en el exterior
//console.log(cuentaSimple);

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);
const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());





