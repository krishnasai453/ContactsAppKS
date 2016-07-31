/**
 * Created by Krishna Sai on 7/10/16.
 */

'use strict';

var express = require('express'), // web server framework
    bodyParser = require('body-parser'),
    consolidate = require('consolidate'),
    swig = require('swig'),
    path = require('path'),
    config = require('../config'); //third party library


// provides the interface to communicate with other modules ; how to use this in other modules is ->  require('./express');
module.exports.init = function () {
    var app = express();
    //integrating body parser middleware//
    this.initBodyParser(app);
    this.initViewEngine(app);
    this.initIgnoreStaticRoutes(app);
    return app;
}



module.exports.initBodyParser = function (app) {
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json())

}

module.exports.initViewEngine = function (app) {
    app.engine('server.view.html',consolidate['swig']);
    app.set('view engine','server.view.html');
    app.set('views',path.join(process.cwd(),'./modules/core/server/views'));


}
module.exports.initIgnoreStaticRoutes = function(app){
    app.use('/public', express.static(path.resolve('./public')));

    config.client.files.forEach(function(staticPath){
        app.use(staticPath, express.static(path.resolve('./'+ staticPath)));
    })
    //app.use(express.static(__dirname + '/public'));
}