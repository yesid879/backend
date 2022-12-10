const express = require ('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// rutas crud

router.get('/', usuarioController.mostrarUsuarios);
router.post('/', usuarioController.agregarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.modificarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);


module.exports = router;