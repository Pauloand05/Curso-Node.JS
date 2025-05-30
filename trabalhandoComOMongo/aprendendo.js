const mongoose = require("mongoose");

// Configuração Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo", {
        useMongoClient: true
    }).then( () => {
        console.log("Conexão feita com sucesso!");
    }).catch( (err) => {
        console.log("Erro ao estabelecer a conexão: " + err);
    });
