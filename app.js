const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'app-ramo-auy1104'
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API AUY1104 - Ciclo de Vida del Software II',
    endpoints: ['/health']
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
