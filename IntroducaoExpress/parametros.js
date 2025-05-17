const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Tudo bem?");
    }
);

app.get("/sobre", function(req, res) {
    res.send("Sobre nós!");
});

app.get("/contato", function(req, res) {
    res.send("Contatos!");
});

app.get("/ola/:cargo/:nome/:cor", function(req, res) {
    res.send("<h1>Ola " + req.params.nome + ", seu cargo e " + req.params.cargo + "</h1>" + "<h2>Sua cor e " + req.params.cor , "</h2>");

    // Send só pode ser usado uma vez.
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
});