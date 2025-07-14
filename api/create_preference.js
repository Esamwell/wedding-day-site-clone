import mercadopago from 'mercadopago';

const client = new mercadopago.MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN // Use variável de ambiente no Vercel!
});

const preference = new mercadopago.Preference(client);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

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
    res.status(200).json({ init_point: result.init_point });
  } catch (error) {
    console.error('Erro Mercado Pago:', error);
    res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
} 