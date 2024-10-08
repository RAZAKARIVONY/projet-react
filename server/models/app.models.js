const mongoose = require('mongoose')

const PhoneBookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})

const PhoneBook = mongoose.model('PhoneBook',PhoneBookSchema)

module.exports = PhoneBook