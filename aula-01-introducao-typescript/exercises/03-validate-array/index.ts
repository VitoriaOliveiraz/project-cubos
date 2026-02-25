// ✏️ O que aprendi:
// Nesse exercício apliquei pela primeira vez um for...in, foi interessante não nego. E além disso me mostrou interessante a curiosidade que me levantou do for of (nunca usei). Além disso, notei uma atitude regular pela optação do código bruto, normalmente ifs, esquecendo que há métodos que podem facilitar muito mais meu código.

// ✅ O que ficou claro:
// O for in, que percorre os valores do array e faz a verificação se existe ou não um valor impar dentre os números do array. Além de ligar o alerta de que pode existir métodos, pra solução do meu empasse.

// ❓ O que ainda gera dúvida:
// Nenhuma dúvida

// ─────────────────────────────────────────
// CÓDIGO
// ─────────────────────────────────────────

const arrayEven = (arrayToNumbers: number[]): string => {
  let existOddNumbers = 0
  for (const number of arrayToNumbers) {
    if ((number % 2 == 0) == false) {
      existOddNumbers += 1
    }
  }
  if (existOddNumbers > 0) {
    return `Array inválido, pois contém ${existOddNumbers} impares`
  }
  return "Array valido, pois todos os numeros são pares"
}

console.log(arrayEven([0, 122, 4, 6, 7, 8, 44]))
console.log(arrayEven([0, 122, 4, 6, 2, 8, 44]))

// ─────────────────────────────────────────
// VERSÃO SIMPLIFICADA — usando o método SOME
// ─────────────────────────────────────────

const arrayEvens = (numbers: number[]): string => {
  const hasOdd = numbers.some(number => number % 2 !== 0)
  return hasOdd ? "Array inválido" : "Array válido"
}

console.log(arrayEvens([0, 122, 4, 6, 7, 8, 44])) // Array inválido
console.log(arrayEvens([0, 122, 4, 6, 2, 8, 44])) // Array válido