const express = require ("express")
const router = express.Router()

const {readLibros, readUnLibro, createLibro, updateLibro, deleteLibro} = require("../controllers/controllers.js")

router.get ("/",readLibros) // 
router.get ("/:id",readUnLibro) // 
router.post ("/",createLibro) // 
router.put ("/:id",updateLibro) // 
router.delete ("/:id",deleteLibro)

module.exports = router
