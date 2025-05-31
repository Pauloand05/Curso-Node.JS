const mongoose = require("mongoose");

// Configuração Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo", {
        useNewUrlParser: true,
    }).then( () => {
        console.log("Conexão feita com sucesso!");
    }).catch( (err) => {
        console.log("Erro ao estabelecer a conexão: " + err);
    });

// Definindo Schema
const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})
// Criando uma collection
mongoose.model("usuarios", UsuarioSchema);

const Paulo = mongoose.model("usuarios")

// Adicionando dados ao schema
    new Paulo({
        nome: "Paulo",
        sobrenome: "André",
        email: "pauloandre@gmail.com",
        idade: 20,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário cadastrado com sucesso!")
    }).catch((err) => {
        console.log("Erro ao cadastrar novo Usuário: " + err)
    })