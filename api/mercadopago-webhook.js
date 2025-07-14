export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // O Mercado Pago envia notificações com informações na query string
  const { topic, id, type, data } = req.query;
  let body = req.body;

  // Log para depuração
  console.log('Webhook Mercado Pago recebido:', { topic, id, type, data, body });

  // Aqui você pode implementar a lógica para atualizar o status do presente
  // Exemplo: buscar o pagamento pelo payment_id e marcar como comprado

  // Sempre responda 200 para o Mercado Pago saber que recebeu
  res.status(200).json({ received: true });
} 