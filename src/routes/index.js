const express = require('express');
const router = express.Router();

const mongoose = require('./../config/database');
const Estudiante = require('./../models/Estudiante');

router.get('/', (req, res, next) => {
    Estudiante.find((err, alumnos) => {
        if(err) throw err;
        res.render('index', {alumnos : alumnos}); 
    });
}); 

router.get('/alumnos/add', (req, res, next) => {
    res.render(users, {}); 
}); 

router.get('/alumnos/update/:id', (req, res, next) => {
    const idAlumno = req.params.idAlumno;

    Estudiante.findOne({_id: idAlumno}, (err, alumno) => {
        if(err) throw err; 
        res.render('users', {alumno: alumno})
    });
});

router.get('/alumnos/delete/:id', (req, res, next) => {
    const idAlumno = req.params.idAlumno;
    Estudiante.remove({_id: idAlumno}, (err) => {
        res.redirect('/');
    });
}); 

module.exports = router; 
