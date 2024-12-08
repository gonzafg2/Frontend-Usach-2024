// const saldo = 1000;

const retirar = function (monto) {
  console.log("Saldo actual:", this.saldo);
  console.log("Retirando...", monto);
  if (monto <= this.saldo) {
    this.saldo -= monto;
    console.log(`Retiro exitoso, su saldo actual es ${this.saldo}`);
    return `Retiro exitoso, su saldo actual es ${this.saldo}`;
  } else {
    console.log("Saldo insuficiente");
    return "Saldo insuficiente";
  }
};

const cuentaCorrientePepito = {
  saldo: 1000,
  tieneTarjeta: true,
  titular: "Pepito",
  puedeRetirar: true,
  puedeTransferir: true,
  retirar,
};

const cuentaCorrienteJuanito = {
  saldo: 100,
  tieneTarjeta: true,
  titular: "Juanito",
  puedeRetirar: true,
  puedeTransferir: true,
  retirar,
};

const cuentaCorrientePedrito = {
  saldo: 500,
  tieneTarjeta: true,
  titular: "Pedrito",
  puedeRetirar: true,
  puedeTransferir: true,
  retirar,
};

// Un banco X tiene 200.000 clientes de Cuentas Corrientes
// Cada cuenta corriente tiene un saldo, un tituler, si tiene tarjeta, si puede retirar, si puede transferir

// cuentaCorrientePepito.retirar(100);

// Cuatro principios de la POO:
// Encapsulamiento
// Herencia
// Polimorfismo
// Abstracción

class CuentaBase {
  constructor(titular, tieneTarjeta) {
    this._titular = titular;
    this._tieneTarjeta = tieneTarjeta;
  }
  get titular() {
    return this._titular;
  }
  set nuevoTitular(titular) {
    this._titular = titular;
  }
}

// Otras clases hijas como: CuentaAhorro, CuentaVista, etc.
class CuentaCorriente extends CuentaBase {
  #saldo;

  // Se definen las propiedades o atributos del objeto en el constructor. No van los métodos aquí.
  constructor(saldo, titular, tieneTarjeta, puedeRetirar, puedeTransferir) {
    // Clousure function
    super(titular, tieneTarjeta);
    this.#saldo = saldo;
    this._puedeRetirar = puedeRetirar;
    this._puedeTransferir = puedeTransferir;
  }

  get saldo() {
    return this.#saldo;
  }

  set nuevoSaldo(saldo) {
    this.#saldo = saldo;
  }

  retirar(monto) {
    // console.log("Saldo actual:", this._saldo);
    // console.log("Saldo actual getter:", this.saldo);
    console.log("Saldo actual:", this.saldo);

    console.log("Retirando...", monto);
    if (monto <= this.saldo) {
      const valorRestante = this.saldo - monto;
      // this._saldo = valorRestante;
      this.nuevoSaldo = valorRestante;
      console.log(`Retiro exitoso, su saldo actual es ${this.saldo}`);
      return `Retiro exitoso, su saldo actual es ${this.saldo}`;
    } else {
      console.log("Saldo insuficiente");
      return "Saldo insuficiente";
    }
  }
}

const pedrito = new CuentaCorriente(500, "Pedrito", true, true, true);

console.log("pedrito: ", pedrito);

// pedrito.#saldo = 100000;

// console.log("pedrito nuevo saldo: ", pedrito);

pedrito.retirar(100000);
