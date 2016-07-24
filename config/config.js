/**
 * Created by Krishna Sai on 7/10/16.
 */

'use strict';
var _= require('lodash');


// self invoking function
var initGlobalConfig = function () {
    var config = {
        server:{},
        client:{}
    };
    var defaultConfig = require('./env/default'),
        envConfig = require('./env/' + (process.env.NODE_ENV || 'development'));
    config = _.extend(defaultConfig, envConfig);


    return config;
};

module.exports = initGlobalConfig();
