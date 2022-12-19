// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
})
app.get("/register", (req, res) => {
     res.sendFile(path.resolve(__dirname,"./views/register.html"));})

app.get("/compra", (req, res) => {
    res.send("Compra exitosa")
})

app.get("/venta", (req, res) => {
    res.send("Venta exitosa")
})