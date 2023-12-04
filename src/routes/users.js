const express = require('express'); 
const router = express.Router(); 

const mongoose = require('./../config/database');
const Estudiante = require('./../models/Estudiante');

router.post('/alumnos/operate', (req, res, next) => {
    console.log(req.body); 

    if(req.body._id === "") {
        const alum = new Estudiante({
            numDeCuenta: req.body.numDeCuenta, 
            nombre: req.body.nombre,
            carrera: req.body.carrera,
            seccion: req.body.seccion
        }); 

        alum.save(); 
    } else{
        Estudiante.findByIdAndUpdate(req.body._id, {$set: req.body}, 
            { new: true}, (err, model) =>{
                if(err) throw err;
            });
    } 
    res.redirect('/');
}); 

module.exports = router; 