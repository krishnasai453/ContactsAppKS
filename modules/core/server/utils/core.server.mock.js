/**
 * Created by Krishna Sai on 7/10/16.
 */
'use strict';

var Chance = require('chance'),
    _ = require('lodash');


var contacts = genMockContacts();


module.exports.saveContact = function (contact){
    var chance = new Chance();
    var cloneContact = _.clone(contact);
    cloneContact.id = chance.guid();
    contacts.push(cloneContact);
    return cloneContact;
}


module.exports.getContacts = contacts;

function genMockContacts () {
    var chance = new Chance();
    var contacts = [];

    for(var i =0;i<10;i++){
        var contact = {};
        var name = chance.name().split(' ');
        contact.firstName = name[0];
        contact.lastName = name[1];
        contact.zip = chance.zip();
        contact.email = chance.email();
        contacts.push(contact);
    }
//    console.log(contacts);
    return contacts;
}


