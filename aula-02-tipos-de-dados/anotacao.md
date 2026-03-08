# Tipos de dados 🎲

### Dados primitivos 🌱

- São dados básicos que podem contribuir futuramente dados mais robustos. Sem eles até mesmo os códigos mais simples não funcionariam, como eu disso dados básicos(string, number, boolean, any(exclusivo do ts) por exemplo)

```
// string
let nome: string = 'Guido';
// console.log(typeof nome);

// number
let idade: number = 12;
// console.log(typeof idade);

// boolean
let maiorIdade: boolean = true;
// console.log(typeof maiorIdade);

let sobrenome: string;
sobrenome = 'Cerqueira';
console.log(typeof sobrenome);

```

### Any e tipagem explícita 🗒️

- Ao colocar um tipo any é dizer que ele é "coração de mãe", cabe todos, e isso não é recomendado por abrir espaço pra bugs e possiveis frustrações por ser muito permissivel. Seu uso tem quer cuidadoso e consciente, pra evitar os problemas citados acima. Por isso ser explicito nas tipagens é altamente recomendavel, já que o TypeScript nos da ferramenta é melhor usarmos ela da maneira certa.

```
// string
let nome: string = 'Guido';
// console.log(typeof nome);

// number
let idade: number = 12;
// console.log(typeof idade);

// boolean
let maiorIdade: boolean = true;
// console.log(typeof maiorIdade);

let sobrenome: any; // Isso abre brecha, que pode ser evitada
let sobrenome: string; // Isso é a brecha e a dor de cabeça sendo evitada
sobrenome = 'Cerqueira';
console.log(typeof sobrenome);
```

### Tipagem de lista

- Em tipagens de listas vemos novamente os tipos primitivos aplicado em listas. Na tipagem de listas se é inferido `tipoDeDado[]` assim, tipo de dado de cada item da lista e se abre os colchetes da lista, definindo a tipagem explícita da lista.

```
let nomes: string[] = ['Guido', 'Vidal', 'Dani', 'Ruli']; // string[] - Lista de strings
nomes = [];

let numeros: number[] = [123, 456, 1, 0];   // number[] - Lista de números
numeros = [];


let b: boolean[] = [true, true, false, false];    // boolean[] - Lista de booleanos
b = [];


let c: any[] = [123, 'ilhgafcjkhdb', true];   // any[] - Lista de valores diversos
```

### Tipagem de objetos

- A tipagem de objetos costuma ser ainda mais explícita, deixando futuramente, qualquer adaptação ainda mais facil sabendo oque se espera e o que se deve ser enviado.

- **Mas isso me levanta a duvida e as intertfaces e types? Onde eles ficam?**

```
let usuario: { nome: string, idade: number, ativo: boolean };

usuario = {
    nome: 'Cerqueira',
    idade: 32,
    ativo: false,
}

console.log(usuario);
```

### Como usar tipos em funções

- Quando se trata de tipagem em funções, até elas sofrem com a inferencia de tipos, mas mesmop assim é melhor previnir. Além de que as funções mantem tipo do parâmetro como obrigatório. Se uma função recebe um parametro o tipo dela tem que ser explícito (evitando o any). Parte desta tipagem eu já vi, ou já apliquei em pratica, por isso estou apenas documentando a maioria pra consulta caso necesário.

- **Não compreendo, isso não  ficario sujo em grande escala? Claro eu sei que é apenas a introdução, mas isso em grande escala seria inconvenientemente chato. Tipar todos os parametros, assim em uma função que recebe valores ou objetos enormes isso seria puxado.**
```
function imprimir(nome: string): string {
    return `olá ${nome}`;
}

const imprimriMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
}

function imprimirUsuario(usuario: { nome: string, idade: number }): string {
    return `olá ${usuario.nome}`;
}

function imprimirArray(array: string[]): string {
    return array[0];
}


const somar = (a: number, b: number): number => {
    return a + b;
}


```
