# CookieSalesAPI

## Descrição
Este projeto consiste na criação de um backend para gerenciar a venda de caixas de biscoitos através de tickets de atendimento. É um projeto pensado para quem está aprendendo Node.js, incluindo o uso de MongoDB como banco de dados.

O serviço permite:
- Criar tickets de atendimento.
- Listar produtos disponíveis.
- Salvar dados do usuário no ticket.
- Adicionar produtos ao ticket.
- Exibir um resumo da compra.
- Finalizar a compra.

Extras opcionais estão descritos no final deste README.

---

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [MongoDB](https://www.mongodb.com/) (rodando localmente ou em um serviço cloud como Atlas)
- Um editor de texto como [Visual Studio Code](https://code.visualstudio.com/)

---

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   MONGO_URI=mongodb://localhost:27017/cookiesales
   PORT=3000
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

## Endpoints

### 1. Criar Ticket ✅
- **Rota**: `/tickets`
- **Método**: `POST`
- **Descrição**: Cria um ticket inicial para o atendimento.
- **Body**:
  ```json
  {
    "phoneNumber": "string",
    "firstMessage": "string"
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "idTicket": "string",
    "phoneNumber": "string",
    "firstMessage": "string",
    "status": "OPEN",
    "createdAt": "ISODate",
    "updatedAt": "ISODate"
  }
  ```

---

### 2. Listar Produtos ✅
- **Rota**: `/products`
- **Método**: `GET`
- **Descrição**: Retorna a lista de produtos disponíveis para venda.
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "priceInCents": 1000,
      "isAvailable": true
    }
  ]
  ```

---

### 3. Salvar Dados do Usuário ✅
- **Rota**: `/tickets/user`
- **Método**: `POST`
- **Descrição**: Salva os dados do cliente no ticket. Antes de salvar os dados, é necessário:
  1. **Validar se o ticket existe**: Certifique-se de que o `idTicket` fornecido corresponde a um ticket válido no banco de dados. Caso não exista, retorne um erro apropriado.
  2. **Atualizar o ticket após a interação**: Sempre salve as alterações feitas no ticket após realizar a operação.
- **Body**:
  ```json
  {
    "idTicket": "string",
    "name": "string",
    "cpf": "string",
    "email": "string"
  }
  ```
- **Resposta**: Atualiza o ticket com os dados do cliente. ✅

---

### 4. Adicionar Produto ao Ticket ✅
- **Rota**: `/tickets/cart`
- **Método**: `POST`
- **Descrição**: Adiciona um produto ao campo `cart` do ticket. Antes de adicionar o produto, é necessário:
  1. **Validar se o ticket existe**: Certifique-se de que o `idTicket` fornecido corresponde a um ticket válido no banco de dados. Caso não exista, retorne um erro apropriado.
  2. **Atualizar o ticket após a interação**: Sempre salve as alterações feitas no ticket após realizar a operação.
- **Body**:
  ```json
  {
    "idTicket": "string",
    "productId": "string",
    "quantity": 1
  }
  ```
- **Resposta**: Atualiza o ticket com o campo `cart`. ✅

---

### 5. Resumo da Compra ✅
- **Rota**: `/tickets/summary/{idTicket}`
- **Método**: `GET`
- **Descrição**: Retorna o resumo da compra. Antes de exibir o resumo, é necessário:
  1. **Validar se o ticket existe**: Certifique-se de que o `idTicket` fornecido corresponde a um ticket válido no banco de dados. Caso não exista, retorne um erro apropriado.
- **Exemplo de Resposta**:
  ```json
  {
    "user": {
      "name": "string",
      "cpf": "string",
      "email": "string"
    },
    "cart": [
      {
        "productId": "string",
        "name": "string",
        "priceInCents": 1000,
        "quantity": 1
      }
    ],
    "totalPriceInCents": 1000
  }
  ```

---

### 6. Finalizar Compra ✅
- **Rota**: `/tickets/checkout/{idTicket}`
- **Método**: `POST`
- **Descrição**: Finaliza a compra, adicionando a tag `PEDIDO CONCLUIDO` ao ticket. Antes de finalizar a compra, é necessário:
  1. **Validar se o ticket existe**: Certifique-se de que o `idTicket` fornecido corresponde a um ticket válido no banco de dados. Caso não exista, retorne um erro apropriado.
  2. **Atualizar o ticket após a interação**: Sempre salve as alterações feitas no ticket após realizar a operação.
- **Regra**: Certifique-se de que todos os campos obrigatórios estejam preenchidos.
- **Resposta**: Marca o ticket como concluído.

---

## Extras

1. **Vender Mais de Um Produto** 🕗
   - Adicione múltiplos produtos ao campo `cart` do ticket.

2. **Fechar Ticket** ✅
   - **Rota**: `/tickets/:idTicket/close`
   - **Método**: `POST`
   - **Descrição**: Marca o ticket como `CLOSE`.

3. **Gerenciamento de Tickets**
   - Antes de criar um novo ticket para um número, feche o ticket existente, se houver.

4. **Salvar dados de endereço**
   - Criar uma rota que recebe o cep do cliente e busca o endereço na api do ViaCep.
   - Salve os dados de endereço junto com os dados do usuário.
---

## Notas Finais

- Valide os dados enviados em cada endpoint.
- Tickets com a tag `PEDIDO CONCLUIDO` não podem ser alterados e devem retornar erro 409.
- Utilize o MongoDB para armazenar os dados, e atualize o documento sempre que necessário usando o `_id`.

Bom aprendizado e boa sorte! 😊

