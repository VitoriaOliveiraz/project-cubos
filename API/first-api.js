// Neste exercício, você irá criar uma API para gerenciar uma lista de tarefas. O objetivo é implementar os quatro verbos HTTP básicos (GET, POST, PUT, DELETE) em rotas diferentes e testar suas funcionalidades.

// Crie uma API para gerenciar tarefas com as seguintes funcionalidades:
//✔
// Listar tarefas (GET)
// Rota: /tarefas
// Retorna todas as tarefas no formato JSON.
//✔
// Adicionar tarefa (POST)
// Rota: /tarefas
// Recebe uma tarefa no corpo da requisição e a adiciona à lista.
// Estrutura da tarefa: { id: número, descricao: string, concluida: boolean }.

// Atualizar tarefa (PUT)
// Rota: /tarefas/:id
// Atualiza a descrição ou o status (concluida) de uma tarefa específica, identificada pelo id.

// Remover tarefa (DELETE)
// Rota: /tarefas/:id
// Remove uma tarefa da lista pelo id.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser());

let tarefas = [
  {
    id: 1,
    tarefa: "lavar vasilha",
    status: false,
  },
  {
    id: 2,
    tarefa: "Criar uma IA",
    status: false,
  },
  {
    id: 3,
    tarefa: "Ver kimetsu",
    status: false,
  },
];

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const body = req.body;
  if (!body.tarefa || !body.status) { 
    res.status(400).json({ message: "Por favor preencha todos os campos" });
  }
  const novaTarefa = {
    id: tarefas.length +1,
    tarefa: body.tarefa,
    status: body.status,
  };

  //   res.push(novaTarefa) ERRADO
  tarefas.push(novaTarefa); //Certinho 😎
  res.status(201).json(novaTarefa);
});

//Ta Errado
// app.put("/tarefas", (req,res) => {
// body = req.body //esqueci o req.params 🤣😂
// let idstring = req.params.id
// id = parseInt(idstring)
// const atualizarTarefa = tarefas.find(tarefa => id === tarefa.id)
// if(!atualizarTarefa){
//   res.status(404).json({message:"Tarefa não encontrada"})

// tarefa = body.id
// tarefa.body.status
// res.json(atualizarTarefa)
// }})

app.put("/tarefas/:id", (req, res) => {
  const body = req.body;
  const params = req.params;
  const atualizarTarefa = tarefas.find(
    (tarefa) => Number(params.id) === tarefa.id
  );
  if (!atualizarTarefa) {
    res.status(404).json({ message: "Não há tarefa existente com este id" });
  }
  if (atualizarTarefa.tarefa) {
    atualizarTarefa.tarefa = body.tarefa;
  }

  atualizarTarefa.status = body.status;

  res.json(atualizarTarefa);
});

app.delete("/tarefas/:id", (req, res) => {
  const id = req.params.id;
  const deletarTarefa = tarefas.find((tarefa) => tarefa.id === parseInt(id));
  if (!deletarTarefa) {
    res.status(404).json({ message: "Tarefa não encontrada." });
  }
  const indice = tarefas.indexOf(deletarTarefa);
  tarefas.splice(indice, 1);
  console.log(indice);
  res.json({ message: "Tarefa excluida"});
});

app.listen(40);
