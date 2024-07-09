const librosModel = require ("../models/librosModel.js")

/* CRUD */


/* READ - GET */
const readLibros = async (req,res) =>{
    try {
        const todos_los_libros = await librosModel.findAll()
        res.json(todos_los_libros)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* READ - GET ONE */
const readUnLibro = async (req,res) =>{
    try {
        const un_libro = await librosModel.findByPk(req.params.id)
        res.json(un_libro)
    } catch (error) {
        res.json({message:error.message})
    }
}

 /* CREATE - POST */
const createLibro = async (req,res) =>{
    try {
        await librosModel.create(req.body)
        res.json ({"message":"Registro creado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* UPDATE - PUT */
const updateLibro = async (req,res)=>{
    try {
        await librosModel.update(req.body,{
            where: {id:req.params.id}
        })
        res.json ({"message":"Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* DELETE */
const deleteLibro = async (req,res)=>{
    try {
        await librosModel.destroy({
            where: {id:req.params.id} 
        })
        res.json ({"message":`se borro el registro ${req.params.id}`}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}






module.exports = {readLibros, readUnLibro, createLibro, updateLibro, deleteLibro}