const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const estudianteSchema = new Schema({
    id: {type: String},
    numDeCuenta: { type: String},
    nombre: {type: String},
    carrera: {type: String},
    seccion: {type: String}, 
}, { versionKey: false}); 

const Estudiante = mongoose.model('Estudiantes', estudianteSchema);

module.exports = Estudiante; 