export default async function handler(req, res) {
  // Только для вызовов от Vercel Cron
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  console.log('🔄 Running scheduled price update...');
  
  // Здесь можно добавить логику обновления цен
  // Например, вызов внешнего API или обновление кеша
  
  res.status(200).json({
    success: true,
    message: 'Price update job started',
    timestamp: new Date().toISOString(),
    nextRun: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString() // 6 часов
  });
}