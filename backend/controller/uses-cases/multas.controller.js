const multas = require('../data-acces/multas');

exports.create = async(req, res)=>{
    const datos = req.body;

    const nuevaMulta = multas.Createmultas(datos);

    res.status(200).json({resultado: nuevaMulta});
}

exports.find = async(req, res) =>{
    
    try{
        const buscar = await multas.buscar()

        if(buscar.respuesta === false) {
            res.status(404).json({resultado: "no existe ninguna multa"})
        }else{
            res.status(200).json({multas:  buscar})
        }
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.update = async(req, res)=>{

    try {
<<<<<<< HEAD
        
    } catch (error) {
        
    }


    const id = {_id: req.params.id};
    const actualizar = req.body;
    const actualizarMulta  = await multas.updateMultas(id, actualizar);
    res.status(200).json({multas: 'se actualizo con exito'});
}
=======
        const filtro = {_id: req.params.id };
        const datos = {
            tiempoSancion: req.body.tiempoSancion,
            motivo: req.body.motivo
        }

        const updateMultas  = await multas.updateMultas(filtro, datos);

        if(updateMultas.respuesta === false){
            console.log('hola')
            res.status(404).json({resultado: "no se actualizo"})
        }else{
            res.status(200).json({multas:  updateMultas})
        }
    } catch (e) {
        res.status(500).json({error:e})
    }
    
};


>>>>>>> f848a34fcb7f1e63151fea8f3094c22d3f30c9bb

