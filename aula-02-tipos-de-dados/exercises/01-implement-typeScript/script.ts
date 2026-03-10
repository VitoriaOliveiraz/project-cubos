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
): string {
  const usuarioEncontrado = lista.find((donoPet) =>
    donoPet.pets.includes(nomePet),
  );

  if (usuarioEncontrado) {
    return `O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}.`;
  }
  
  return `Que pena, o(a) ${nomePet} não possui um(a) dono(a) cadastrado(a)!`;
}

console.log(buscarDonoPet(usuarios, "Max"))
console.log(buscarDonoPet(usuarios, "Vhicky"))

