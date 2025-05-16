const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World!");
    }
);

app.get("/sobre", function(req, res) {
    res.send("Sobre nós!");
});

app.get("/contato", function(req, res) {
    res.send("Contatos!");
});

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
});