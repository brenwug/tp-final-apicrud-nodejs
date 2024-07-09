const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const librosModel = db.define ("libros",{
    autor:{type:DataTypes.STRING},
    titulo:{type:DataTypes.STRING},
    genero:{type:DataTypes.STRING},
    editorial:{type:DataTypes.STRING}
})

module.exports = librosModel