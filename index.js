const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
    // template engine
        app.engine('handlebars', engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Conexão com o banco de dados
        const sequelize = new Sequelize('connectbank', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        })

    // Rotas
        app.get('/cad', (req, res) => {
            res.render("fomularios");
        })

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
});
