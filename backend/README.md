# Backend Mercado Pago

Este backend serve para criar preferências de pagamento do Mercado Pago para o site de casamento.

## Como rodar

1. Acesse a pasta backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node server.js
   ```

O backend ficará disponível em http://localhost:3001

## Endpoints

- `POST /create_preference`
  - Body: `{ nome: string, preco: number, id: string }`
  - Retorna: `{ init_point: string }` (link do checkout Mercado Pago)

## Configuração

- O access token do Mercado Pago já está configurado em `server.js`.
- As URLs de retorno estão apontando para `http://localhost:5173` (ajuste para produção se necessário).

## Observações
- Nunca exponha o access token no frontend.
- Para produção, utilize variáveis de ambiente para o token. 