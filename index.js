//Importo modulo Express
const express = require ("express");
const app = express();
const port = 3030
const cors = require("cors")
const librosRouter = require("./routes/librosRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json())

app.get ("/",(req,res)=>{
    res.send("HOME")
})

app.use ("/libros", librosRouter)

const conexiondb = async ()=>{
    try {
        await db.authenticate()
        console.log(`Base de datos conectada`);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
   
app.listen(port,()=>{
    conexiondb()
    console.log(`Server ok en el puerto ${port}`);
})
