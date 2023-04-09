const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (number) => {
  if (isNaN(number)) {
    console.log('Valor inválido. Por favor, digite um número.');
    rl.close();
  } else {
    const x = parseFloat(number);
    const y = x*x + 5*x + 100;
    console.log(`O resultado da função y = x^2 + 5x + 100 é: ${y}`);
    rl.close();
  }
});