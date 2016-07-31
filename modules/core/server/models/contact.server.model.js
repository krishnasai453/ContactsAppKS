/**
 * Created by Krishna Sai on 7/23/2016.
 */
'use strict';

var mongoose = require('mongoose');
    //mongoose.connect("mongodb://localhost/news");
require("../services/contact.server.service");
require("../controllers/core.server.controller");
require("../controllers/main.server.controller");
var Schema = mongoose.Schema; //function constructor
var validator = require('validator');

validator.isEmail('foo@bar.com');

var validateEmailStrategy = function (property) {
    return validator.isEmail(property);
}

var validateFieldStrategy = function (property) {
    return property.length;
}
/*var ValidatePhoneStrategy = function (property) {
    return validator.isMobilePhone(property)
}*/

var ContactSchema = new Schema({

    firstName:{
        type : String,
        default: '',
        trim : true,
        validate : [validateFieldStrategy, 'Firstname cannot be empty']

    },
    lastName:{
        type : String,
        default: '',
        trim : true,
        validate : [validateFieldStrategy, 'Lastname cannot be empty']

    },
    phone:{
        type: String,
        default: '',
        trim : true,
        validate : [validateFieldStrategy, 'number cannot be empty']

    },

    email:{
        type: String,
        default: '',
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validateEmailStrategy,'Please enter valid email id' ]

    },
    city:{
        type: String,
        default: '',
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validateFieldStrategy,'Please enter valid city ' ]

    }

});

var Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;