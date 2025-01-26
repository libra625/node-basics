const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use((req, res, next) => {
    console.log(`REQ: ${req.method} URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.send(`Користувач з ID: ${id}`)
})

app.post('/submit', (req, res) => {
    const {name, email} = req.body
    res.send(`Отримано дані: Ім'я - ${name}, Електронна пошта - ${email}`);
});

app.use((req, res) => {
    // console.log(err.message)
    // console.log(err.status)
    res.status(404).send('Сторінка не знайдена');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

