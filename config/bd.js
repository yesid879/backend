const mongoose = require('mongoose');
require("dotenv").config();


// funcion conectar con mongo db 
const conectarBD = () => {

    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("esta conectada la base de datos"))
        .catch((err) => console.error(err));
}

module.exports = conectarBD;