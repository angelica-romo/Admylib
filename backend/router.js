const express = require('express');
const multas = require('./controller/uses-cases/multas.controller');
const autores = require('./controller/uses-cases/autores.controller');
const libros = require('./controller/uses-cases/libros.controller');
const lib = require('./controller/libros');
const bibliotecologos = require('./controller/uses-cases/bibliotecologos.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');

const router = express.Router();

//MODULO MULTAS
router.post("/registrar", multas.create); // post hacer un cambio 
router.get("/buscar", multas.find);
router.put("/actualizar/:id", multas.update);
router.delete("/eliminarM/:id", multas.eliminar);


//MODULO AUTORES
router.post("/registrarAutor", autores.registerAutores);
router.get("/listar", autores.findListar);
router.put("/actualizarA/:id", autores.actualizarAutor);
router.delete("/eliminarA/:id", autores.eliminarA);

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.find);
router.put("/actualizarLibro/:id", libros.update);
router.delete("/eliminarL/:id", libros.eliminarL); //get para hacer busquedas


//MODULO BIBLIOTECOLOGOS

router.post("/register", bibliotecologos.Registrar);
router.get("/ver", bibliotecologos.findB);
router.put("/actualizarB/:id", bibliotecologos.updateB);
router.delete("/eliminarB/:id", bibliotecologos.eliminarB);




//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});


router.get("/mostrarFormulario", libros.formularioLibro ) //se pone el nombre de la ruta y ademas se llama la funcion que recien se crea para mostrar el fomrulario


//MODULO USUARIO

router.post("/crear", usuarios.crear);


module.exports = router;