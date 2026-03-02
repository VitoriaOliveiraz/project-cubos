//   - Buscar coleção completa ✅
//   - Buscar item por identificador único (id) ✅
//   - Adicionar um novo mangá ✅
//   - Atualizar um mangá em partes ✅
//   - Atualizar um mangá completo ou adicionar um novo ✅
//   - Deletar um mangá ✅
//   - Buscar todos os mangás de um autor ✅
//   - Buscar um só mangá de um auto ✅
// - O mangá deve possuir o nome, o genero, o autor e o indetificador único ✅
//  - Todas as rotas devem estar devidamente validadas ✅
//  - O statusCode deve corresponder com o tipo de retorno (sucesso, erro e etc) ✅
// - O servidor deve iniciar sem mangás existentes na coleção ✅

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser());

const mangas = [];
//Aqui so mostra
app.get("/mangas", (req, res) => {
  res.status(200).json(mangas);
});

//aqui eu estou bucando pelo id

app.get("/busca/mangas/:id", (req, res) => {
  const params = req.params;
  const atualizarManga = mangas.find(
    (manga) => parseInt(params.id) === parseInt(manga.id)
  );
  if (!Number(params.id)) {
    res.status(400).json({ message: "O id é invalido" });
  }
  if (atualizarManga) {
    res.status(200).json(atualizarManga);
  }
  if (!atualizarManga) {
    res
      .status(404)
      .json({ message: "Não foi possivel achar o manga tente novamente" });
  }
});

//Estou criando um novo manga
app.post("/mangas", (req, res) => {
  const body = req.body;
  if (!body.nome || !body.genero || !body.autor) {
    res.status(400).json({
      message:
        "Por gentileza prencha todos os campos, nenhum campo pode ficar em branco",
    });
  }
  const novoManga = {
    id: mangas.length + 1,
    nome: body.nome,
    genero: body.genero,
    autor: body.autor,
  };
  mangas.push(novoManga);
  res.status(201).json(novoManga);
});

//ATUALIZO APENAS UMA PARTE DO MANGA

app.patch("/mangas/:id", (req, res) => {
  const body = req.body;
  const params = req.params;
  const atualizarManga = mangas.find(
    (manga) => parseInt(params.id) === parseInt(manga.id)
  );
  if (!Number(params.id)) {
    res.status(400).json({ message: "Por favor insira um id valido" });
  }
  if (!atualizarManga) {
    res.status(404).json({ message: "Manga não encontrado" });
  }

  if (!body.nome && body.genero && body.autor) {
    res
      .status(400)
      .json({ message: "por favor deve prencher ao menos algum campo" });
  }
  if (body.nome) {
    atualizarManga.nome = body.nome;
  }
  if (body.genero) {
    atualizarManga.genero = body.genero;
  }
  if (body.autor) {
    atualizarManga.autor = body.autor;
  }
  res.json(atualizarManga);
});

//ATUALIZANDO OU COLOCANDO UM NOVO
app.put("/mangas/:id", (req, res) => {
  const body = req.body;
  const params = req.params;
  const atualizarManga = mangas.find(
    (manga) => parseInt(params.id) === manga.id
  );
  if (!Number(params.id)) {
    res
      .status(400)
      .json({ message: "Id é invalido, por favor facilite meu trabalho" });
  }
  if (atualizarManga) {
    if (body.nome) {
      atualizarManga.nome = body.nome;
    }

    if (body.genero) {
      atualizarManga.genero = body.genero;
    }
    if (body.autor) {
      atualizarManga.autor = body.autor;
    }
    res.json(atualizarManga);
  }
  if (!atualizarManga) {
    const novoManga = {
      id: mangas.length + 1,
      nome: body.nome,
      genero: body.genero,
      autor: body.autor,
    };
    mangas.push(novoManga);
    res
      .status(201)
      .json({ message: "Manga não encontrado, portanto criamos um novo" });
    res.json(novoManga);
  }
});

//DELETANDO UM MANGA
app.delete("/mangas/:id", (req, res) => {
  const params = req.params;
  const deletarTarefa = mangas.find(
    (manga) => parseInt(params.id) === manga.id
  );
  console.log(deletarTarefa);
  if (!Number(params.id)) {
    return res.status(400).json({ message: "Id inderido não é válido" });
  }
  if (!deletarTarefa) {
    return res.status(404).json({ message: "Manga não encontrado" });
  }

  const indice = mangas.indexOf(deletarTarefa);
  console.log(indice);
  mangas.splice(indice, 1);
  res.json({ message: "Mangá excluido com sucesso" });
});

app.get("/manga/autor/:autor", (req, res) => {
  const params = req.params;
  const encontrAutor = mangas.filter((manga) => params.autor === manga.autor);
  if (encontrAutor.length < 1) {
    return res.status(404).json({ message: "Não ha mangas desse autor." });
  }
  if (Number(params.autor)) {
    return res
      .status(400)
      .json({ message: "Nome de autor inserido não é valido" });
  }
  res.json(encontrAutor);
});

app.get("/manga/encontra/:autor", (req, res) => {
  const params = req.params;
  const encontrarObra = mangas.find((manga) => params.autor === manga.autor);
  if (!encontrarObra) {
    return res.status(404).json({ message: "Não existe obra desse auto" });
  }
  if (Number(encontrarObra)) {
    return res.json({ message: "Nome de autor inserido não é valido" });
  }
  res.json(encontrarObra);
});

//Desafio marcelo 😎
// atualizar o nome do autor de todos 

app.put("/atualizandoAutor/:autor", (req, res) => {
  const params = req.params;
  const body = req.body;
  const encontrarAautor = mangas.filter(
    (manga) => params.autor === manga.autor
  );
  if (Number(encontrarAautor)) {
    return res.status(400).json({ message: "Nome de autor inserido não é valido " });
  }
  if (!encontrarAautor) {
    return res.status(404).json({ message: "Autor não emcontrado" });
  }
  if(body.nome || body.genero){
 return res.status(400).json({mensage:"Por favor, apenas o nome do autor deve ser enviado"})
  }
  const mudandoAutor = encontrarAautor.map(
    (manga) => (encontrarAautor.autor = body.autor)
  );
  res.status(200).json(mudandoAutor)
});

app.listen(50);
