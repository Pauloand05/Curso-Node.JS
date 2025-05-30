const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const Post = require("./models/Post");

// Config
    // template engine
        app.engine('handlebars', engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Configurando o body-parser
    app.use(express.json())
    app.use(express.urlencoded({ extended: false}))
    

    // Rotas
        app.get("/", (req, res) => {
            Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
                res.render("home", {posts: posts})
            })
            
        })

        app.get('/cad', (req, res) => {
            res.render("fomularios");
        })

        app.post('/add', (req, res) => {
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then( () => {
                res.redirect("/")
            }).catch( (err) => {
                res.send("Houve um erro: " + err);
            })
        })

        app.get('/deletar/:id', (req, res) => {
            Post.destroy({where: {id: req.params.id}}).then(() => {
                res.send("Postagem deletada com sucesso!");
            }).catch((err) => {
                res.send("Esta postagem não existe");
            });
        })

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
});
