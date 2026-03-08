const usuarios: { nome: string; pets: string[] }[] = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

function buscarDonoPet(
  lista: { nome: string; pets: string[] }[],
  nomePet: string,
) {
  let usuarioEncontrado;

  // for (let i = 0; i < lista.length; i++) {
  //   for (let j = 0; j < lista[i].pets.length; j++) {
  //     if (lista[i].pets[j] === nomePet) {
  //       usuarioEncontrado = lista[i];
  //       break;
  //     }
  //   }
  //   if (usuarioEncontrado) {
  //     break;
  //   }
  // }

  // if (usuarioEncontrado) {
  //   console.log(`O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}.`);
  // } else {
  //   console.log(
  //     `Que pena, o(a) ${nomePet} não possui um(a) dono(a) cadastrado(a)!`,
  //   );
  // }
}

buscarDonoPet(usuarios, "Max");
buscarDonoPet(usuarios, "Guido");
