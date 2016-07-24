/**
 * Created by Krishna Sai on 7/22/2016.
 */

'use strict';

var mongoose = require('mongoose'),
Contact = require('../models/contact.server.model.js');


module.exports.getContacts = function (callback) {
    Contact.find({},function (err, contacts) {
        if(err) throw err;
        console.log(contacts);
        callback(contacts);
    });
}


module.exports.saveContact = function(savableContact,callback)
{
    var ccontact = new Contact(savableContact);

    ccontact.save(function(err){

        callback(err,savableContact);
    })

        console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1


}
module.exports.updateContact = function (contactID,updateContact,callback) {

    Contact.findByIdAndUpdate(contactID,{firstName:updateContact.firstName,lastName:updateContact.lastName,phone: updateContact.phone, email: updateContact.email},function(err,contact) {

        if (err){
            console.log("error is here");
            console.log(err);
            throw(err);
        }
        updateContact._id = contact._id;
        console.log("====updated contact=====");
        console.log(updateContact);
        callback(updateContact);
    });


}
module.exports.deleteContact = function (contactID,callback) {
    var deleted;
    Contact.findByIdAndRemove(contactID, function(err) {

        if (err){
            console.log("Error: Unable to Delete Contact");
            deleted = false;
        }else{
            console.log("Contact Deleted successfully");
            deleted = true;
        }
        callback(deleted);
    });


}
module.exports.findContactById = function(id,callback){
    Contact.findById(id, function(err, contact) {
        if (err) throw err;
        callback(contact);
    });
}
module.exports.getContactsByNum = function(findnumber,callback)
{
    var retObj = [],
    foundContact = [];
    Contact.find({phone :findnumber }).exec(function (err,contacts){
        if (err){
            callback(err);
        }
        else
        {
            console.log(contacts);
            for (var i = 0; i< contacts.length; i++)
            {
                retObj = {firstName:contacts[i].firstName,lastName:contacts[i].lastName,phone: contacts[i].phone, email: contacts[i].email};
                foundContact.push(retObj);
            }
            callback(null,foundContact);
        }
    })

}