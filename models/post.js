const db = require("./banco")

const Agendamentos = db.sequelize.define('agendamentos',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force:true})

module.exports = Agendamentos


// //constante para fazer manipulação da base de dados
// const Clientes = db.sequelize.define("clientes", {
//     nome:{
//         type: db.Sequelize.STRING
//     },
//     endereco:{
//         type: db.Sequelize.STRING
//     },
//     bairro:{
//         type: db.Sequelize.STRING
//     },
//     cep:{
//         type: db.Sequelize.STRING
//     },
//     cidade:{
//         type: db.Sequelize.STRING
//     },
//     estado:{
//         type: db.Sequelize.STRING
//     },
//     observacao:{
//         type: db.Sequelize.TEXT
//     },

// })

// //Sincronizar com a base de dados
// // Clientes.sync({force: true})

// module.exports = Clientes