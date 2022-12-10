const express = require('express');
const conectarBD = require('./config/bd');
const cors = require('cors') ;


const app = express();
const port = 5000;


// enlazamos la bd 
conectarBD();
app.use(cors());

app.use(express.json());

app.use('/api/Usuarios/', require('./routes/usuarios'));



// vamos a mostrar un mensaje en el navegador

app.get('/', (req, res) => {
    res.send('Bienvenido ya esta configurado nuestro servidor');
});

app.listen(port, () => console.log("esta conectado el servidor en el puerto ",port));