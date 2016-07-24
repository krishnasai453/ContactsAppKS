/**
 * Created by Krishna Sai on 7/10/16.
 */

'use strict';

var express = require('./express');  // it will search within same directory instead of node_modules
var config = require('../config');
var path = require('path'),
    mongoose = require('./mongoose');



module.exports.loadRoutes = function (app) {
  var coreRoute =   require(path.join(process.cwd(),'modules/core/server/routes/core.server.routes'));
    coreRoute(app);
}



module.exports.start = function () {
    var self = this;
    mongoose.connect(function (db) {

        var app = express.init();

        // Routes registration
        self.loadRoutes(app);

        app.listen(config.app.port, function () {
            console.log('Application is running on port :: ' + config.app.port);
        });
    })
}