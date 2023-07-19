const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre :{
        type:String,
        require: [true, 'Name is required']
    },

    email :{
        type:String,
        require: [true, 'Email is required'],
        unique:true
    }
})