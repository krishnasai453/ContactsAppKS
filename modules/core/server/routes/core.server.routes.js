/**
 * Created by Krishna Sai on 7/10/16.
 */
'use strict';

    module.exports = function (app) {
    var controller = require('../controllers/core.server.controller.js');
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);
    app
        .route('/api/:num')
        .get(controller.getContactByNum);
    app
        .route('/api/contact/:contactId')
        .put(controller.updateContact)
        .delete(controller.deleteContact);
}
