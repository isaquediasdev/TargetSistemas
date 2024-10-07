// Função para inverter uma string
function inverterString(texto) {
    let invertida = "";
    for (let i = 0; i < texto.length; i++) {
        invertida = texto[i] + invertida;  // Adiciona cada caractere no início da string invertida
    }
    return invertida;
}

// String inserida diretamente no código
const texto = "Estágio Target Sistemas";

// Inverter a string
const resultado = inverterString(texto);

// Exibir o resultado
console.log(`String original: ${texto}`);
console.log(`String invertida: ${resultado}`);
