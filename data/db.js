
const {Sequelize} = require ("sequelize")

/* nombre de tu base datos - users - contraseña - {donde esta alojada tu bd?,lenguaje,puerto} */

const db = new Sequelize ("dblibros","root","",{
host : "localhost",
dialect:"mysql",
port:3306
})

module.exports = db

