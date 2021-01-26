const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const DataSchema = new mongoose.Schema({
    nome_usuario:{type:String, default:"a"},
    email_usuario:{type:String, default:"a"},
    tipo_usuario:{type:Number, default:1},
    senha_usuario:{type:String, default:"a"},
},{
    timestamps:true
});

DataSchema.pre('save',function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = this.senha_usuario;
    next();
});

DataSchema.pre('findOneAndUpdate', function (next){
    var password = this.getUpdate().senha_usuario+'';
    if(password.length<55){
        this.getUpdate().senha_usuario = password;
    }
    next();
});

DataSchema.methods.isCorrectPassword = function (password, callback ){
    bcrypt.compare(password,this.senha_usuario,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        console.log(`password - ${password}`);
        console.log(`senha - ${same}`);
        }
    })
}

const usuarios = mongoose.model('Usuarios',DataSchema);
module.exports = usuarios;