// Faturamento por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Cálculo do faturamento total
const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

// Função para calcular o percentual de cada estado
function calcularPercentual(faturamento, total) {
    return (faturamento / total) * 100;
}

// Exibir o percentual de cada estado
for (const estado in faturamentoEstados) {
    const percentual = calcularPercentual(faturamentoEstados[estado], faturamentoTotal);
    console.log(`${estado}: ${percentual.toFixed(2)}% do faturamento total`);
}
