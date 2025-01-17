const express = require('express');
const libros = require('./controller/uses-cases/libros.controller');
const usuarios = require('./controller/uses-cases/usuarios.controller');
const passport = require('passport');

const router = express.Router();

//MODULO LIBROS

router.post("/registrarlibro", libros.creaLibros);
router.get("/listarLibro", libros.libro);
router.put("/actualizarLibro/:id", libros.update);
router.delete("/eliminarL/:id", libros.eliminarL);

//MODULO USUARIOS
router.post("/registrarUsuario", usuarios.crear);
router.get("/listarUsuarios", usuarios.usuario);
router.put("/actualizarUsuarios/:id", usuarios.updateUsu);
router.delete("/eliminarU/:id", usuarios.eliminarU);





//MOSTRAR PAGINA PRICIPAL
router.get("/landing", (req, res)=>{
    res.render('landing');
});





router.get("/inicio",(req, res, next)=>{
    res.render('inicio');
});

router.post("/inicio", passport.authenticate('local-inicio',{
    successRedirect: '/inicio',
    failureRedirect: '',
    passReqToCallback: true
}));





router.get("/mostrarFormulario", libros.formularioLibro);

router.get("/mostrarCatalogo", libros.Tabla);

router.get("/listarUsuarios", usuarios.usu);

router.get("/busqueda",(req, res)=>{
    res.render('busqueda');
})





// router.get("/mostrarTabla", libros.tablaCatalogo);



//MODULO USUARIO

router.post("/crear", usuarios.crear);

module.exports = router;