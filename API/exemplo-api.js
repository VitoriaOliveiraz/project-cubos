const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());

let carros = [
  {
    id: 1,
    marca: "BMW",
    modelo: "X6",
    placa: "000",
  },
  {
    id: 2,
    marca: "BMW",
    modelo: "M3",
    placa: "abc-123",
  },
  {
    id: 3,
    marca: "Audi",
    modelo: "A3",
    placa: "abc-456",
  },
];

app.get("/listarCarros", (req, res) => {
  res.json(carros);
});

app.get("/listarCarros/:id", (req, res) => {
  let id = req.params.id;
  id = Number(id);
  const carro = carros.find((carro) => carro.id === id);
  if (!carro) {
    return res.status(404).json({ message: "Carro não encontrado!" });
  }
  res.json(carro);
});

app.post("/adicionarCarro", (req, res) => {
  const body = req.body;
  if (!body.marca || !body.modelo || !body.placa) {
    return res.status(400).json({
      message: "Todos os dados são obrigatórios. [MARCA, MODELO, PLACA]",
    });
  }

  const novoCarro = {
    id: carros.length + 1,
    marca: body.marca,
    modelo: body.modelo,
    placa: body.placa,
  };

  carros.push(novoCarro);
  res.status(201).json(novoCarro);
});

app.patch("/atualizarCarro", (req, res) => {
  const { id, marca, modelo, placa } = req.body;
  if (!Number(id)) {
    return res.status(400).json({ message: "Id inválido!" });
  }

  if (!marca && !modelo && !placa) {
    return res.status(400).json({
      message:
        "Algum dado é obrigatório para atualização. [MARCA, MODELO, PLACA]",
    });
  }

  const carro = carros.find((carro) => carro.id === Number(id));
  if (!carro) {
    return res.status(404).json({ message: "Carro não encontrado!" });
  }
  if (marca) {
    carro.marca = marca;
  }

  if (modelo) {
    carro.modelo = modelo;
  }

  if (placa) {
    carro.placa = placa;
  }

  res.json(carro);
});

app.put("/atualizarCarro", (req, res) => {
  const { id, marca, modelo, placa } = req.body;
  if (!Number(id)) {
    return res.status(400).json({ message: "Id inválido!" });
  }

  if (!marca || !modelo || !placa) {
    return res.status(400).json({
      message: "Todos os dados são obrigatórios. [MARCA, MODELO, PLACA]",
    });
  }

  const carro = carros.find((carro) => carro.id === Number(id));

  if (!carro) {
    const novoCarro = {
      id: carros.length + 1,
      marca,
      modelo,
      placa,
    };
    carros.push(novoCarro);
    return res.status(201).json(novoCarro);
  }

  carro.marca = marca;
  carro.modelo = modelo;
  carro.placa = placa;

  res.json(carro);
});

app.delete("/deletarCarro/:id", (req, res) => {
  let id = req.params.id;
  if (!Number(id)) {
    return res.status(400).json({ message: "Id inválido!" });
  }
  id = Number(id);
  const carro = carros.find((carro) => carro.id === id);
  if (!carro) {
    return res.status(404).json({ message: "Carro não encontrado!" });
  }
  const indice = carros.indexOf;
  console.log(indice)(carro);
  carros.splice(indice, 1);
  res.json({ mensagem: "Carro deletado!" });
});

app.listen(3000);
