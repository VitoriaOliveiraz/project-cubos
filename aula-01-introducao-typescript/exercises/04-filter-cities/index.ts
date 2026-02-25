// ✏️ O que aprendi:
// Aqui neste exercicio já havia aplicado tudo no meu trabalho na mundiale. O uso do método filter é muito usado por lá.

// ✅ O que ficou claro:
// cComo funciona o metodo filter pra arrays e como podemos evitar linhas redundantes de código,evitando linhas disnecessárias e devolvendo na mesma qualidade em um código melhorado.

// ❓ O que ainda gera dúvida:
// Nenhuma

// ─────────────────────────────────────────
// CÓDIGO
// ─────────────────────────────────────────

const citiesEightCharacters = (arrayCities: string[]): string[] => {
    return arrayCities.filter((city: string) => city.length <= 8)
    
}

let exemplo: string[]= ["Salvador", "São Paulo", "Brasília", "Recife", "Rio de Janeiro"]

let maisExemplos: string[]= ["Bahia", "Minas Gerais", "São Paulo", "Brasília", "Parana", "Rio de Janeiro"]

console.log(citiesEightCharacters(exemplo))

console.log(citiesEightCharacters(maisExemplos))


// ─────────────────────────────────────────
// VERSÃO DO PROFESSOR
// ─────────────────────────────────────────

function filtroCidades(cidades: string[]): string[] {
    return cidades.filter(cidade => cidade.length <= 8);
}

const cidades = ["Salvador", "São Paulo", "Brasília", "Recife", "Rio de Janeiro"];
const cidadesFiltradas = filtroCidades(cidades);

console.log(cidadesFiltradas); // Saída esperada: ['Salvador', 'Recife', 'Brasília']