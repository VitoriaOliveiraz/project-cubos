// ✏️ O que aprendi:
// Confesso que ainda me vejo travada em constructor, neste exercício (que peguei por conta própria) mesmo com exemplo cometi erros, então ainda está em prática, preciso testar mais, fazer mais e passar pra TS

// ✅ O que ficou claro:
// Quase nada, está feito, mas não fixado, tenho dificuldades.

// ❓ O que ainda gera dúvida:
//Como funciona o constructor, porque o this. Como funciona ele no geral

// ─────────────────────────────────────────
// EXEMPLO DE REFERÊNCIA — Classe Gato
// ─────────────────────────────────────────

// class Gato {
//   constructor(nome, cor) {
//     this.nome = nome;
//     this.cor = cor;
//     this.energia = 100;
//   }

//   miar() {
//     console.log(`${this.nome} faz: Miau! 🐱`);
//   }

//   brincar() {
//     this.energia = this.energia - 10;
//     console.log(`${this.nome} brincou! Energia agora: ${this.energia}`);
//   }
// }

// let meuGato = new Gato("Mingau", "laranja");
// let outroGato = new Gato("Frajola", "preto e branco");

// console.log(meuGato.nome);
// console.log(meuGato.cor);
// console.log(meuGato.energia);
// meuGato.miar();
// meuGato.brincar();
// console.log(outroGato.nome);

// ─────────────────────────────────────────
// CÓDIGO
// ─────────────────────────────────────────

class livros {
  constructor(titulo, autor, paginas){
    //Definindo o nome do livro (titulo)
      this.titulo = titulo;
       //Definindo o nome do autor
      this.autor = autor;
       //Definindo o numeros de paginas do livro
      this.paginas = paginas;
      this.paginasLidas = 0
  }

  ler(quantasPaginas) {
    this.paginasLidas = this.paginasLidas + quantasPaginas
    console.log(`${quantasPaginas} já foram adicionadas a suas paginas lidas. Que agora está atualmente em ${this.paginasLidas}`)
 }

informacoes() {
  console.log(`Título: ${this.titulo}`);
  console.log(`Autor: ${this.autor}`);
  console.log(`Total de páginas: ${this.paginas}`);
  console.log(`Páginas já lidas: ${this.paginasLidas}`);
}
}


let Moana = new livros("um mar de aventuras", "disney", 255)
let cinderela = new livros("A gata borralheira", "disney", 300)

Moana.ler(56);
cinderela.ler(100);

Moana.informacoes()