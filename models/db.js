const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
