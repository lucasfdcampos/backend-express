import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello, MK Solutions!'});
})

app.listen(3333, () => {
  console.log('🚀 MK Solutions - Server started on post 3333')
})