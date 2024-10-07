const fs = require('fs');

// Função para processar o faturamento a partir do arquivo JSON
function processarFaturamentoJSON(caminhoArquivo) {
    const dados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8'));

    const valoresFaturamento = dados
        .map(dado => dado.valor)
        .filter(valor => valor > 0); // Ignorar dias sem faturamento (valor 0)

    return valoresFaturamento;
}

// Função principal que processa os dados, calcula o menor, maior e a média
function analisarFaturamento(valoresFaturamento) {
    const menorValor = Math.min(...valoresFaturamento);
    const maiorValor = Math.max(...valoresFaturamento);
    const somaFaturamento = valoresFaturamento.reduce((acc, valor) => acc + valor, 0);
    const diasComFaturamento = valoresFaturamento.length;

    // Calcular a média de faturamento
    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    // Contar o número de dias com faturamento acima da média
    const diasAcimaDaMedia = valoresFaturamento.filter(valor => valor > mediaFaturamento).length;

    // Exibir os resultados
    console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Média de faturamento: R$ ${mediaFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

// Função principal para executar o código
function main() {
    const caminhoArquivo = './dados.json'; // Caminho do arquivo JSON
    const valoresFaturamento = processarFaturamentoJSON(caminhoArquivo);
    analisarFaturamento(valoresFaturamento);
}

// Executar o programa
main();
