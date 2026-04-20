# API-REST

Este projeto foi desenvolvido com o objetivo de criar e aprimorar o uso de uma API REST simples, 

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework web para Node.js, utilizado para criar o servidor e gerenciar rotas.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **TSX**: Ferramenta para executar arquivos TypeScript diretamente.

## Status do projeto
> Desenvolvimento ainda pendente
> Falta outros metodos

## Funcionalidades 

A API possui endpoints para gerenciamento de produtos:

- `GET /products`: Lista produtos (aceita parâmetros de query `itens` e `limite`).
- `POST /products`: Cria um novo produto (requer `name` e `price` no corpo da requisição).

Inclui middleware personalizado, tratamento de erros e validação de dados com Zod.

## Como Usar

1. **Instalar dependências**:
   ```
   npm install
   ```

2. **Executar o servidor em modo de desenvolvimento**:
   ```
   npm run dev
   ```

3. **Acessar a API**:
   - O servidor roda na porta 3000.
   - Use ferramentas como Postman ou curl para testar os endpoints.

Exemplo de requisição POST:
```
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "Produto Exemplo",
  "price": 29.99
}
```
