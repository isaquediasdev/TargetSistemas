// Função que verifica se o número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (a <= numero) {
        if (a === numero) {
            return true;  // O número pertence à sequência de Fibonacci
        }
        let temp = a;
        a = b;
        b = temp + b;
    }
    return false;  // O número não pertence à sequência
}

// Utilizar readline para aceitar a entrada do usuário via terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar ao usuário que insira o número
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input);  // Converter a entrada para número inteiro

    // Verificar se o número pertence à sequência de Fibonacci
    if (pertenceFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }

    // Fechar a interface de leitura
    rl.close();
});
