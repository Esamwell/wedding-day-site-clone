const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

const client = new mercadopago.MercadoPagoConfig({
  accessToken: 'APP_USR-5838542224567522-071322-332a3355b54ccd9a6d78b128fb3d2ffa-1556040852'
});

const preference = new mercadopago.Preference(client);

const app = express();
app.use(cors({ origin: '*' })); // CORS aberto para qualquer origem
app.use(express.json());

// Log de toda requisição recebida
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.post('/create_preference', async (req, res) => {
  console.log('Recebi requisição:', req.body);
  const { nome, preco, id } = req.body;
  try {
    const preferenceData = {
      items: [
        {
          id,
          title: nome,
          unit_price: Number(preco),
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'https://ericosamuelecatarina.vercel.app/sucesso',
        failure: 'https://ericosamuelecatarina.vercel.app/erro',
        pending: 'https://ericosamuelecatarina.vercel.app/erro',
      },
      auto_return: 'approved',
    };
    const result = await preference.create({ body: preferenceData });
    console.log('Preferência criada:', result);
    res.json({ init_point: result.init_point });
  } catch (error) {
    console.error('Erro Mercado Pago:', error);
    if (error.cause) {
      console.error('Causa:', error.cause);
    }
    if (error.response) {
      console.error('Response:', error.response);
    }
    if (error.stack) {
      console.error('Stack:', error.stack);
    }
    res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
});

app.listen(3001, () => console.log('Backend rodando na porta 3001')); 