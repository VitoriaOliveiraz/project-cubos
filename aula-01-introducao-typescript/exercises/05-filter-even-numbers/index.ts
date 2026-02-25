// ✏️ O que aprendi:
// Aqui segue o mesmo exeplo do exercício anterior, eu já havia aplicado o filter embora praticar seja sempre bom

// ✅ O que ficou claro:
// Estrutura do filter, tipagem de parametro, tipagem de dado recebido, e tipagem de retorno

// ❓ O que ainda gera dúvida:
// nenhuma

// ─────────────────────────────────────────
// CÓDIGO
// ─────────────────────────────────────────

const filtroNumerosPares =(arrayNumerosPares: number[]): number[] => {
    return arrayNumerosPares.filter(number => number % 2 == 0)

}
const exemploOne = [1, 98, -76, 0, 12, 19, 5, 60, 44]

console.log(filtroNumerosPares(exemploOne))

// ─────────────────────────────────────────
// VERSÃO DO PROFESSOR
// ─────────────────────────────────────────

const filtroNumerosParesProfe = (numeros: number[]): number[] => {
  const numerosPares = numeros.filter(numero => numero % 2 === 0);
  return numerosPares;
};

console.log(filtroNumerosParesProfe(exemploOne))