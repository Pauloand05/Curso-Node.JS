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