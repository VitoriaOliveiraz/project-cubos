// ✏️ O que aprendi:
// Oque foi uma novidade pra mim era que podia se tipar ate mesmo o retorno de uma função, neste exercício criei esta função abaixo de buscar um livro pelo indice dele na biblioteca, começando pelo 1 ao invés do 0 que é padrão. Regularmente não utilizo muito o método do indexOf, então foi ótimo

// ✅ O que ficou claro:
// Que as funções podem ter suas respostas tipadas e o método do indexOf

// ❓ O que ainda gera dúvida:
// Ainda não senti nenhuma duvida.

// ─────────────────────────────────────────
// CÓDIGO
// ─────────────────────────────────────────

const buscarLivro = (livros: string[], nomeDoLivro: string): string => {
  const posiçãoDoLivro: number = livros.indexOf(nomeDoLivro) + 1

  if (posiçãoDoLivro) {
    return `O livro solucionado atualmente está na posição ${posiçãoDoLivro}`
  }
  return "Livro não encontrado na estante"
}
console.log(buscarLivro(["Guerra e Paz", "A Montanha Mágica", "Cem Anos de Solidão", "Dom Quixote", "A Divina Comédia"], "Guerra e Paz"))

console.log(buscarLivro(["Guerra e Paz", "A Montanha Mágica", "Cem Anos de Solidão", "Dom Quixote", "A Divina Comédia"], "Pão com ovo"))