const mongoose = require ('mongoose');

// el modelo debe ser igual al esquema de la base de datos

const usuarioSchema = mongoose.Schema({
nombres :{
    type : String,
    required :true
},
apellidos :{
    type : String,
    required :true
},

documento :{
    type : Number,
    required :true
},

correo :{
    type : String,
    required :true
},

telefono :{
    type : Number,
    required :true
},

direccion :{
    type : String,
    required :true
}

},{ versionkey:false });

module.exports = mongoose.model('Usuario', usuarioSchema );