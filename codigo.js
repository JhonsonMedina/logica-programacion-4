function esNumero(valor) {
    return typeof valor === 'number';
  }function verNumero() {
    let numero = prompt('Ingresa un número');
    numero = Number(numero);
  
if (esNumero(numero)) {
      return numero;
} else {
      console.log('Entrada inválida. Por favor, ingresa un número válido.');
      return verNumero(); 
}
}
  
function miFibonacci(numero) {
    let serie = [0, 1]
    for (let i = 2; i < numero; i++) {
      serie[i] = serie[i-1] + serie[i-2];
    }
    console.log(serie.join(', '));
  }

  let numero = verNumero();
  miFibonacci(numero);