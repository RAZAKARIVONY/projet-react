const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
let userSchema= new Schema({
    nom: {
        type: String,
        required:true
      },
    email:{
        type: String,
        required:true,
        unique:true
      },
    password: {
        type: String,
        required:true
      },
},{
    timestamps:true,
});


module.exports = mongoose.model('User', userSchema);