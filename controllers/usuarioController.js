const Usuario = require ('../models/Usuario');

exports.mostrarUsuarios = async(req,res) => {

    try {

const usuario = await Usuario.find();
res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar los datos");
        
    }
}

exports.agregarUsuarios = async(req,res) => {

try {
    let usuario;
    usuario = new Usuario(req.body)
    await usuario.save();
    res.send(usuario);

    
} catch (error) {
    console.log(error);
    res.status(500).send(" hubo un error al cargar los datos");
}

}

exports.obtenerUsuario = async(req,res) => {

try {

    let usuario = await Usuario.findById(req.params.id);
    if(!usuario){
        res.status(404).json({msg:"no se puede encontrar los datos"})
    }
res.send(usuario);

} catch (error) {
    console.log(error);
    res.status(500).send(" hubo al cargar la informacion");
}

}

exports.modificarUsuario = async (req, res) => {
    try {
        const { nombres, apellidos, documento, correo, telefono, direccion } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: "el usuario no existe" })
        }

        usuario.nombres = nombres;
        usuario.apellidos = apellidos;
        usuario.documento = documento;
        usuario.correo = correo;
        usuario.telefono = telefono;
        usuario.direccion = direccion;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true });

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo al cargar la informacion");
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: "el usuario no existe" })
        }

        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "el usuario a sido eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(" no se puede eliminar la informacion");
    }

}