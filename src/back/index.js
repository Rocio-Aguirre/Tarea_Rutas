import express from "express";
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const url_atlas = "mongodb+srv://Rori:on3hkYepgeepjwfi@cluster0.p60vf.mongodb.net/TareaDatabase?retryWrites=true&w=majority";

//INICIALIZACIONES
const app = express();

//MODELOS Y ESQUEMAS
const usuarioSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    }
})

const productoSchema = new Schema({
    titulo: {
        type: String
    },
    precio: {
        type: Number
    },
    stock: {
        type: Number
    },
    descripcion: {
        type: String
    }

})

const Usuario = model("Usuario", usuarioSchema)
const Producto = model("Producto", productoSchema)

//const nuevoUsuario = new Usuario({username: "rocio@gmail.com"})
//const nuevoProducto = new Producto({titulo: "aceitunas"})

//MIDDLEWARES
app.use(express.json())
app.use(express.static(__dirname+"/public"))

//RUTAS
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/items",(req,res)=>{
    /*try{
        //const datos = await Usuario.find();
        //res.json(datos);
        //console.log(datos);
    }catch(error){
        console.log(error)
    }*/
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/api/items", async(req, res)=>{
    try{
        const datos = await Usuario.find().cursor();
        const dato = await datos.next()
        
        const {min, max} = req.query;
        //const {items} = req.params;
        const {titulo} = req.query;

        console.log(min, max);
        console.log(titulo);
        
        const filtro_1 = await Producto.find({'precio' : {$gt:min, $lt: max}});
        const filtro_2 = await Producto.find({'titulo' : titulo});
        const filtro = await filtro_1.length ? filtro_1 : filtro_2;  
        console.log(filtro);

        res.json(dato);

    }catch(error){
        console.log(error)
    }
})

app.post("/api/items", async(req,res)=>{
    const {titulo, precio, stock, descripcion} = req.body;

    const nuevoProducto = new Producto({titulo, precio, stock, descripcion})
    console.log(nuevoProducto)
    await nuevoProducto.save();

    res.send("Producto añadido correctamente")
})

app.put("/api/items/:id", async(req, res)=>{
    try{
        const {titulo, precio, stock, descripcion} = req.body;
        const {id} = req.params;

        await Producto.updateOne({_id : id}, {titulo, precio, stock, descripcion});

        console.log(id);

        res.send("Se agregaron las propiedades del producto")
    }catch(error){
        console.log(error)
    }
})

app.delete("/api/items/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        
       await Producto.deleteOne({_id : id});

        res.send("Producto borrado")
    }catch(error){
        console.log(error);
    }
})

app.get("*", (req, res)=>{
    res.send("Page not found - 404")
})

//APERTURA DE PUERTOS
mongoose.connect(url_atlas, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Cliente DB conectado")
})
.catch((error)=>{
    console.log(error)
})

app.listen(8000, ()=>{
    console.log("Servidor web iniciado")
})