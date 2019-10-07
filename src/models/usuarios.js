const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UsuariosSchema = new Schema({
    "id": String,
    "ciudad": String,
    "profesion": String,
    "institucion": String,
    "friends":[]
})

module.exports=mongoose.model('Usuarios',UsuariosSchema);