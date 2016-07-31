/**
 * Created by Krishna Sai on 7/10/16.
 */
'use strict';
var controller = require('../controllers/core.server.controller');
var mainController = require('../controllers/main.server.controller');
    module.exports = function (app) {

        app
        .route('/')
        .get(mainController.index);
        
        app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);
    app
        .route('/api/:num')
        .get(controller.getContactByNum)
        
    app
        .route('/api/contact/:contactId')
        .put(controller.updateContact)
        .delete(controller.deleteContact)
        .get(controller.getContactById);
        
}
