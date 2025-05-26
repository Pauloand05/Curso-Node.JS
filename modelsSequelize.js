const { type } = require('os');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('connectbank', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})


sequelize.authenticate().then(() => {
    console.log('Conectado com Sucesso!');
}).catch((err) => {
    console.error('Erro ao conectar: ', err);
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: 'Primeira Postagem',
//     conteudo: 'Conteudo da primeira postagem'
// })

// Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

Usuario.create({
    nome: 'Paulo',
    sobrenome: 'André',
    idade: 20
})

// Usuario.sync({force: true})
