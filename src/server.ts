import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello, MK Solutions!' });
});

app.listen(3333, () => {
  console.log('🚀 MK Solutions - Server started on post 3333');
});
