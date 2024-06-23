const express = require('express');
const app = express();
const port = 3000;

// Обслуживание статических файлов
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('Тестовый сайт');
  });

app.use((req, res) => {
    res.status(404).send('Страница не найдена');
});