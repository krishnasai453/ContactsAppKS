/**
 * Created by Krishna Sai on 7/10/16.
 */

'use strict';

var contactService = require('../services/contact.server.service.js'),
    express = require('../../../../config/lib/express');

module.exports.getContacts = function (req, res) {
    contactService.getContacts(function (contacts) {
        res.status(200);
        res.json(contacts);
    });
}

    module.exports.createContact = function (req,res)
{
    var contact = req.body;
    if (!contact){
        res.status(400);
        res.end("error undefined in posting the contact..");
    }

    contactService.saveContact(contact,function(err,contact) {
        if(err)
        {
            console.log(err);
            res.status(400)
                .send({message: 'Error:: Internal error while saving data.please try later'});
        }
        else
        {

            res.status(200);
            res.json(contact);
        }
    })

}

module.exports.updateContact = function (req, res) {

    var updateContact = req.body;
    //var meta = req.metadata
    var contactID = req.params.contactId;
    contactService.updateContact(contactID,updateContact, function(updatedContact) {
        if(!updatedContact)
        {
            console.log(err)
            res.status(400)
                .send({message: 'Error:: Internal error while updating contact data by id.please try later'});
        }
        else
        {
            res.status(200)
                .json(updatedContact);
        }

        });
}
module.exports.deleteContact = function (req,res) {
    var contactID = req.params.contactId;
    contactService.deleteContact(contactID, function(deletedContact) {
        if(!deletedContact)
        {
            console.log(err)
            res.status(400)
                .send({message: 'Error:: Internal error while deleting contact data by id.please try later'});
        }
        else
        {
            res.status(200)
                .json(deletedContact);
        }
    });

}
module.exports.getContactByNum = function(req, res)
{
    var number = req.params.num;
    contactService.getContactsByNum(number,function (err,foundContact) {

        if(err)
        {
            console.log(err)
            res.status(400)
                 .send({message: 'Error:: Internal error while finding contact data by number.please try later'});
        }
        else
        {
            res.status(200)
                .json(foundContact);
        }

        
    })


}

/*
module.exports.createContact = function (req,res) {
    var contact = req.body;
    if (!contact){
        res.status(400);
        res.end("error undefined in posting the contact..");
    }
    contact = mockService.saveContact(contact);
    if (contact){
        res.status(200);
        res.json(contact);
    }

}*/
